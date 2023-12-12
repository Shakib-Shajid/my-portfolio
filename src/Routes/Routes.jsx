import { createBrowserRouter } from "react-router-dom";
import Root from '../layouts/Root'
import Home from "../Components/Home";
import About from "../Components/About";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Error from "../Components/Error";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/projects',
                element: <Projects></Projects>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    },
]);

export default router;