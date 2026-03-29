import About from "../pages/About/About";
import BookDetails from "../pages/BookDetails/BookDetails";
import Error from "../pages/Error/Error";
import Home from "../pages/Home/Home";
import Root from "../pages/Root/Root";
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
        }

    ]

  }
]);