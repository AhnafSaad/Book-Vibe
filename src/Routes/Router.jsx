import About from "../pages/About/About";
import BookDetails from "../pages/BookDetails/BookDetails";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import ReadList from "../pages/Readlist/ReadList";
import Root from "../pages/Root/Root";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import { createBrowserRouter } from "react-router";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<Error></Error> ,
    children: [
        {
            index: true,
            path: "/",
            Component: Home
        },
        {
          path: "/about",
          Component: About
        }
        ,
        {
          path: "/bookDetails/:id",
          Component: BookDetails,
          loader: () => fetch('booksData.json').then(res => res.json())
        },
        {
          path: "/readList",
          Component: ReadList,
          loader: () => fetch('booksData.json').then(res => res.json())
        },
        {
          path: "/login",
          Component: Login
        },
        {
          path: "/signup",
          Component: SignUp
        }

    ]

  }
]);