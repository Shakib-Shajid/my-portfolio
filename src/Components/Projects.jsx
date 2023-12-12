
const Projects = () => {
    return (
        <div>
            <h3 className="text-3xl font-semibold text-center my-10">My Projects</h3>
            <div className="grid grid-cols-2">
                <div className="card card-compact w-[500px] bg-base-100 shadow-xl border-blue-600 border-2 ">
                    <figure><img src="../../public/project-1.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">Career Fair</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions mt-3">
                            <button className="btn btn-info ">Live Link</button>
                            <button className="btn btn-info ">Server Code</button>
                            <button className="btn btn-info ">Client Codes</button>
                            <button className="btn btn-info ">Details</button>
                        </div>
                    </div>
                </div>
                <div className="card card-compact w-[500px] bg-base-100 shadow-xl border-blue-600 border-2 ">
                    <figure><img src="../../public/project-2.png" alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-white">Weather API</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                        <div className="card-actions mt-3">
                            <button className="btn btn-info ">Live Link</button>
                            <button className="btn btn-info ">Server Code</button>
                            <button className="btn btn-info ">Client Codes</button>
                            <button className="btn btn-info ">Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;