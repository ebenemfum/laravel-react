import { createBrowserRouter } from "react-router-dom";

import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";
import Users from "./views/Users.jsx";
import NotFound from "./views/NotFound.jsx";
import DefaultLayout from "./components/DefaultLayout.jsx";
import GuestLayout from "./components/GuestLayout.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        children: [
            {
                path: "/users", // Corrected path for Users
                element: <Users />,
            }

        ]
    },
    {
        path: "/",
        element: <GuestLayout />,
        children:[
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/signup",
                element: <Signup />,
            },
        ]
    },

    {
        path: "/users", // Corrected path for Users
        element: <Users />,
    },
    {
        path: "*", // Catch-all route (not found)
        element: <NotFound />,
    },
]);

export default router;
