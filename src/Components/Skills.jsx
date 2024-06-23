
const Skills = () => {
    return (
        <div>

            <div className=" flex justify-center w-2/3 md:w-1/3 border-b-2 rounded-xl mx-auto leading-3 my-8">
                <h3 className="text-white text-3xl md:text-5xl font-semibold text-center my-3 md:my-6">My Skills</h3>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
                <div className=" border-blue-600 border-2 card w-80 bg-base-100 shadow-xl">
                    <figure><img className="mt-8 w-1/2" src="../html.png" alt="html" /></figure>
                    <div className="card-body">
                        <h2 className="text-xl font-medium text-center">HTML 5</h2>
                    </div>
                </div>
                <div className=" border-blue-600 border-2 card w-80 bg-base-100 shadow-xl">
                    <figure><img className="mt-8 w-1/3" src="../css.png" alt="css" /></figure>
                    <div className="card-body">
                        <h2 className="text-xl font-medium text-center">CSS 3</h2>
                    </div>
                </div>
                <div className=" border-blue-600 border-2 card w-80 bg-base-100 shadow-xl">
                    <figure><img className="mt-8 w-1/2" src="../js.png" alt="javascript" /></figure>
                    <div className="card-body">
                        <h2 className="text-xl font-medium text-center">Javascript</h2>
                    </div>
                </div>
                <div className=" border-blue-600 border-2 card w-80 bg-base-100 shadow-xl">
                    <figure><img className="mt-8 w-1/2" src="../tailwind.png" alt="tailwind" /></figure>
                    <div className="card-body">
                        <h2 className="text-xl font-medium text-center">Tailwind CSS</h2>
                    </div>
                </div>
                <div className=" border-blue-600 border-2 card w-80 bg-base-100 shadow-xl">
                    <figure><img className="mt-8 w-1/2" src="../daisyui.png" alt="daisyui" /></figure>
                    <div className="card-body">
                        <h2 className="text-xl font-medium text-center">Daisy UI</h2>
                    </div>
                </div>
                <div className=" border-blue-600 border-2 card w-80 bg-base-100 shadow-xl">
                    <figure><img className="mt-8 w-1/3" src="../react.png" alt="react" /></figure>
                    <div className="card-body">
                        <h2 className="text-xl font-medium text-center">React</h2>
                    </div>
                </div>
                <div className=" border-blue-600 border-2 card w-80 bg-base-100 shadow-xl">
                    <figure><img className="mt-20 w-2/3" src="../nextjs.png" alt="nextjs" /></figure>
                    <div className="card-body">
                        <h2 className="text-xl mt-16 font-medium text-center">Next JS</h2>
                    </div>
                </div>                
                <div className=" border-blue-600 border-2 card w-80 bg-base-100 shadow-xl">
                    <figure><img className="mt-8 w-1/2" src="../node-js.png" alt="node-js" /></figure>
                    <div className="card-body">
                        <h2 className="text-xl font-medium text-center">Node JS</h2>
                    </div>
                </div>
                <div className=" border-blue-600 border-2 card w-80 bg-base-100 shadow-xl">
                    <figure><img className="mt-8 w-1/2" src="../express.png" alt="express-js" /></figure>
                    <div className="card-body">
                        <h2 className="text-xl font-medium text-center">Express JS</h2>
                    </div>
                </div>
                <div className=" border-blue-600 border-2 card w-80 bg-base-100 shadow-xl">
                    <figure><img className="mt-8 w-1/2" src="../mongodb.png" alt="mongodb" /></figure>
                    <div className="card-body">
                        <h2 className="text-xl font-medium text-center">MongoDB</h2>
                    </div>
                </div>
                <div className=" border-blue-600 border-2 card w-80 bg-base-100 shadow-xl">
                    <figure><img className="mt-8 w-1/2" src="../firebase.png" alt="firebase" /></figure>
                    <div className="card-body">
                        <h2 className="text-xl font-medium text-center">Firebase</h2>
                    </div>
                </div>
                <div className=" border-blue-600 border-2 card w-80 bg-base-100 shadow-xl">
                    <figure><img className="mt-8 w-1/2" src="../github.png" alt="github" /></figure>
                    <div className="card-body">
                        <h2 className="text-xl font-medium text-center">Github</h2>
                    </div>
                </div>
                <div className=" border-blue-600 border-2 card w-80 bg-base-100 shadow-xl">
                    <figure><img className="mt-8 w-1/2" src="../gitBash.png" alt="gitbash" /></figure>
                    <div className="card-body">
                        <h2 className="text-xl font-medium text-center">Git Bash</h2>
                    </div>
                </div>
                <div className=" border-blue-600 border-2 card w-80 bg-base-100 shadow-xl">
                    <figure><img className="mt-8" src="../vsCode.png" alt="vscode" /></figure>
                    <div className="card-body">
                        <h2 className="text-xl font-medium text-center">VS Code</h2>
                    </div>
                </div>
            
            </div>
        </div>
    );
};

export default Skills;