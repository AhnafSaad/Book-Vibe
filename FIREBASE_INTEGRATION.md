# Firebase Integration Guide for Book Vibe

This document explains how to integrate Firebase Authentication into the Book Vibe application.

## Prerequisites

1. Create a Firebase project at [https://console.firebase.google.com](https://console.firebase.google.com)
2. Enable Email/Password and Google authentication in Firebase Console
3. Get your Firebase config credentials

## Installation Steps

### Step 1: Install Firebase Package

```bash
npm install firebase
```

### Step 2: Create Firebase Configuration File

Create a new file: `src/config/firebase.js`

```javascript
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
  measurementId: "YOUR_MEASUREMENT_ID"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
```

### Step 3: Update Login Page

In `src/pages/Login/Login.jsx`, replace the TODO comment with:

```javascript
import { signInWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../../config/firebase";

// Inside handleLogin function, replace the try block:
try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("User logged in:", userCredential.user);
    toast.success("Login successful!");
    setEmail("");
    setPassword("");
    // Navigate to home: navigate('/');
} catch (error) {
    toast.error(error.message);
}

// Add Google login handler:
const handleGoogleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        console.log("User logged in with Google:", result.user);
        toast.success("Login successful!");
    } catch (error) {
        toast.error(error.message);
    }
};

// Update the Google button:
<button
    onClick={handleGoogleLogin}
    className="btn w-full border border-gray-300 hover:bg-gray-100 bg-base-100"
>
    {/* SVG code */}
    Login with Google
</button>
```

### Step 4: Update SignUp Page

In `src/pages/SignUp/SignUp.jsx`, replace the TODO comment with:

```javascript
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile } from "firebase/auth";
import { auth } from "../../config/firebase";

// Inside handleSignUp function, replace the try block:
try {
    const userCredential = await createUserWithEmailAndPassword(auth, formData.email, formData.password);
    await updateProfile(userCredential.user, {
        displayName: formData.name
    });
    console.log("User created:", userCredential.user);
    toast.success("Account created successfully!");
    setFormData({ name: "", email: "", password: "", confirmPassword: "" });
    setAgreeTerms(false);
    // Navigate to home: navigate('/');
} catch (error) {
    toast.error(error.message);
}

// Add Google signup handler:
const handleGoogleSignUp = async () => {
    const provider = new GoogleAuthProvider();
    try {
        const result = await signInWithPopup(auth, provider);
        console.log("User signed up with Google:", result.user);
        toast.success("Account created successfully!");
    } catch (error) {
        toast.error(error.message);
    }
};

// Update the Google button:
<button
    onClick={handleGoogleSignUp}
    className="btn w-full border border-gray-300 hover:bg-gray-100 bg-base-100"
>
    {/* SVG code */}
    Sign Up with Google
</button>
```

### Step 5: Create Authentication Context (Optional but Recommended)

Create `src/context/AuthContext.jsx`:

```javascript
import React, { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../config/firebase";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);
        });

        return unsubscribe;
    }, []);

    const logout = async () => {
        try {
            await signOut(auth);
            setUser(null);
        } catch (error) {
            console.error("Logout error:", error);
        }
    };

    return (
        <AuthContext.Provider value={{ user, loading, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
```

### Step 6: Wrap App with AuthProvider

In `src/main.jsx`, add the provider:

```javascript
import { AuthProvider } from "./context/AuthContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>,
);
```

### Step 7: Update Header to Show User Info

In `src/components/Header/Header.jsx`, use the AuthContext:

```javascript
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
    const { user, logout } = useContext(AuthContext);

    return (
        // ... navbar code ...
        <div className="navbar-end gap-2">
            {user ? (
                <>
                    <span className="text-sm font-semibold">{user.displayName || user.email}</span>
                    <button onClick={logout} className="btn btn-sm">Logout</button>
                </>
            ) : (
                <>
                    <Link to="/login">
                        <button className="btn bg-[#23BE0A] hover:bg-[#1fa308] text-white border-none">Sign In</button>
                    </Link>
                    <Link to="/signup">
                        <button className="btn bg-[#50B1C9] hover:bg-[#3d9cb4] text-white border-none">Sign Up</button>
                    </Link>
                </>
            )}
        </div>
        // ... rest of navbar ...
    );
};
```

### Step 8: Create Protected Routes (Optional)

Create `src/components/PrivateRoute/PrivateRoute.jsx`:

```javascript
import { useContext } from "react";
import { Navigate } from "react-router";
import { AuthContext } from "../../context/AuthContext";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen"><span className="loading loading-spinner loading-lg"></span></div>;
    }

    return user ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
```

## Environment Variables

Create a `.env` file in the project root:

```
VITE_FIREBASE_API_KEY=your_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_auth_domain
VITE_FIREBASE_PROJECT_ID=your_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
VITE_FIREBASE_APP_ID=your_app_id
VITE_FIREBASE_MEASUREMENT_ID=your_measurement_id
```

Then update `src/config/firebase.js` to use environment variables:

```javascript
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};
```

## Features Already Implemented

✅ Login page with email/password form
✅ Sign Up page with validation
✅ Password visibility toggle
✅ Google authentication button (ready for integration)
✅ Toast notifications for success/error
✅ Navigation between login and sign up pages
✅ Remember me checkbox
✅ Loading states during authentication

## Next Steps

1. Install Firebase: `npm install firebase`
2. Create Firebase project and get credentials
3. Create `src/config/firebase.js` with your config
4. Update the authentication handlers in Login and SignUp pages
5. (Optional) Create AuthContext for better state management
6. Test login and sign up functionality

All pages are fully styled and ready for Firebase integration!
