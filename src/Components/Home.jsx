import { Typewriter } from 'react-simple-typewriter'


const Home = () => {
    return (
        <div className="flex flex-col md:flex-row md:gap-3 lg:gap-6 items-center my-3 md:my-5 lg:my-10">
            <div >
                <h3 className="text-5xl lg:text-7xl text-center md:text-start font-semibold mb-5 mx-2 lg:mx-0 text-white" >I am Shakib <br /> <span className="text-5xl lg:text-7xl text-center md:text-start"> Al Shajid</span></h3>
                {/* ........................... */}
                <h3 className='text-3xl font-bold my-3  mx-2 lg:mx-0'>
                    <Typewriter
                        words={["I am a Web Developer"]}
                        loop={100}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    // onLoopDone={"handleDone"}
                    // onType={handleType}
                    />
                </h3>
                {/* ........................... */}
                <p className="text-lg mx-2 lg:mx-0 w-3/4 md:text-justify">Welcome to my portfolio website! I am a web developer. I design and build attractive, user-friendly websites. Check my github to know more.</p>
            </div>
            <img className='rounded-full' src="../shakib.png" alt="" />
            {/* <img className='rounded-full border-2 border-white' src="../public/user.png" alt="none" /> */}
        </div>
    );
};

export default Home;