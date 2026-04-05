import Footer from "./../../components/Footer/Footer";
import Navbar from "./../../components/Header/Header";
import React from "react";
import { Outlet } from "react-router";
import { Toaster } from "react-hot-toast";

const Root = () => {
    return (
        <div className="max-w-6xl mx-auto">
        <Toaster
            position="top-center"
            reverseOrder={false}
            gutter={8}
            toastOptions={{
                duration: 3000,
                style: {
                    background: '#363636',
                    color: '#fff',
                },
                success: {
                    duration: 3000,
                    theme: {
                        primary: '#23BE0A',
                        secondary: '#23BE0A',
                    },
                },
                error: {
                    duration: 3000,
                },
            }}
        />
        <Navbar></Navbar>
        <Outlet></Outlet>
        <Footer></Footer>
        </div>
    );
};

export default Root;