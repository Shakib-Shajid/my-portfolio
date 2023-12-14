import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import Projects from "./Projects";
import Skills from "./Skills";
import AnimatedCursor from "react-animated-cursor"


const Main = () => {
    return (
        <div>
            <Home></Home>
            <About></About>
            <Skills></Skills>
            <Projects></Projects>
            <Contact></Contact>
            {/* <AnimatedCursor
                innerSize={8}
                outerSize={35}
                innerScale={1}
                outerScale={2}
                outerAlpha={0}
                hasBlendMode={true}
                innerStyle={{
                    backgroundColor: 'var(--cursor-color)'
                }}
                outerStyle={{
                    border: '3px solid var(--cursor-color)'
                }}
            /> */}
            <AnimatedCursor
                innerSize={8}
                outerSize={35}
                innerScale={1}
                outerScale={1.7}
                outerAlpha={0}
                outerStyle={{
                    border: '3px solid var(--cursor-color)'
                }}
                innerStyle={{
                    backgroundColor: 'var(--cursor-color)'
                }}
            />
        </div>
    );
};

export default Main;