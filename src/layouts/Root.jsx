import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import AnimatedCursor from "react-animated-cursor"


const Root = () => {
    return (
        <div className="max-w-6xl mx-auto ">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
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

export default Root;