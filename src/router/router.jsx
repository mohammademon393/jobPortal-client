import { createBrowserRouter } from "react-router";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
        {
            index: true,
            Component: Home,
        },
        {
            path: "/about",
            Component: () => <div>About Page</div>,
        },
        {   
            path: "/contact",   
            Component: () => <div>Contact Page</div>,
        },

        // auth releted routes
        {
            path: "/login",
            Component: () => <div>Login Page</div>,
        },
        {
            path: "/register",
            Component: () => <div>Register Page</div>,
        }

    ]
  },
]);

export default router;