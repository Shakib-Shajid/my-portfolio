import { createBrowserRouter } from "react-router-dom";
import Root from '../layouts/Root'
import About from "../Components/About";
import Projects from "../Components/Projects";
import Contact from "../Components/Contact";
import Error from "../Components/Error";
import Skills from "../Components/Skills";
import Main from "../Components/Main";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Main></Main>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/skills',
                element: <Skills></Skills>
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