import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa6";
import { Link } from "react-router-dom";

const About = () => {
    return (
        <div className="my-10 ">
            <div className="flex justify-center w-2/3 md:w-1/3 border-b-2 rounded-xl mx-auto leading-3 my-8">
                <h3 className="text-3xl md:text-5xl font-semibold space-y-5 text-center justify-center my-3 md:my-6 text-white ">About Me</h3>
            </div>
            <div className="flex gap-6 items-center flex-col md:flex-row mx-2 lg:mx-0">
                <img className='rounded-full' src="../shakib.png" alt="" />
                <div className="border-2 border-blue-600  p-4 rounded-lg">
                    <h3 className="text-white text-4xl font-semibold my-8">I'm Shakib Al Shajid</h3>
                    <p className="md:text-base lg:text-lg text-justify">I am a Front End Developer.I use React for my project.I also use tailwind css, bootstrap, daisyui, and Firebase for my projects. <br />
                        I like to do coding and it is my passion. It is my hobby to be a web developer. Now I am a front-end developer with React and nextjs. But now I am focusing on the backend and want to make myself a MERN stack developer. I need more practice and hard work to achieve my goal. <span className="font-bold  text-white">"There is no shortcut to success."</span></p>

                    <h3 className="text-white text-2xl font-medium mt-5">Want to know more </h3>
                    <div className="text-2xl flex gap-3 my-5">
                        <Link to="https://www.linkedin.com/in/shakibalshajid/" target="_blank"><BsLinkedin /></Link>
                        <Link to="https://github.com/Shakib-Shajid" target="_blank"><FaGithub /></Link>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;

