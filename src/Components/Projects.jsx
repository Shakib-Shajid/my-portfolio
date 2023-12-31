import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <div>
            <div className="flex justify-center w-2/3 md:w-1/3 border-b-2 rounded-xl mx-auto leading-3 my-8">
                <h3 className="text-3xl md:text-5xl font-semibold text-center md:my-6 text-white my-3">My Projects</h3>
            </div>
            <div className="gap-5 md:flex md:justify-center md:flex-wrap">
                <div className="card card-compact  md:w-[300px] lg:w-[500px] bg-base-100 shadow-xl border-blue-600 border-2 ">
                    <figure><img src="../project-1.png" alt="Shoes" /></figure>
                    <div className="card-body text-justify">
                        <h2 className="card-title text-white">Career Fair</h2>
                        <p>This is an event management agency. They manage career fair events. In this website people can visit and see all the events of us. People need to login and see details here.</p>
                        <div className="card-actions mt-3">
                            <Link target="_blank" to="https://react-career-fair.web.app/"><button className="btn btn-info">Live Link</button></Link>
                            <Link target="_blank" to="https://github.com/Shakib-Shajid/react-career-fair" ><button className="btn btn-info">Source Code</button></Link>
                            {/* <button className="btn btn-info">Details</button> */}
                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                            <button className="btn btn-info" onClick={() => document.getElementById('my_modal_3').showModal()}>Details</button>
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <h3 className="text-3xl font-semibold text-white my-3">Features of my website</h3>
                                    <ul className="text-white ml-4 list-decimal" >
                                        <li>You can see all the services we provide.</li>
                                        <li>You can ask any question.</li>
                                        <li>Show all the details of events.</li>
                                        <li>Login and registration system.</li>
                                        <li>Can not see sensitive info without login.</li>
                                    </ul>
                                    <h3 className="text-3xl font-semibold text-white my-3">Technology</h3>
                                    <ul className="text-white ml-4 list-decimal" >
                                        <li>React</li>
                                        <li>Firebase</li>
                                        <li>Tailwind css</li>
                                        <li>Daisy UI</li>
                                    </ul>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
                <div className="card card-compact  md:w-[300px] lg:w-[500px] bg-base-100 shadow-xl border-blue-600 border-2 ">
                    <figure><img src="../project-2.png" alt="Shoes" /></figure>
                    <div className="card-body text-justify">
                        <h2 className="card-title text-white">Weather API</h2>
                        <p>This is a weather checker website. We can easily check any country weather quickly by using this website. There has also some features like sunset, humidity, pressure and time also.</p>
                        <div className="card-actions mt-3">
                            <Link target="_blank" to="https://weather-api-taupe.vercel.app/"><button className="btn btn-info">Live Link</button></Link>
                            <Link target="_blank" to="https://github.com/Shakib-Shajid/weather-api" ><button className="btn btn-info">Source Code</button></Link>
                            {/* You can open the modal using document.getElementById('ID').showModal() method */}
                            <button className="btn btn-info" onClick={() => document.getElementById('my_modal_2').showModal()}>Details</button>
                            <dialog id="my_modal_2" className="modal">
                                <div className="modal-box">
                                    <form method="dialog">
                                        {/* if there is a button in form, it will close the modal */}
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    <h3 className="text-3xl font-semibold text-white my-3">Features of my website</h3>
                                    <ul className="text-white ml-4 list-decimal" >
                                        <li>You can see over the world temperature.</li>
                                        <li>You can see those by icons</li>
                                        <li>Show here date and time also</li>
                                        <li>You can see another info like sunset, pressure etc.</li>
                                        <li>You can see country name.</li>
                                    </ul>
                                    <h3 className="text-3xl font-semibold text-white my-3">Technology</h3>
                                    <ul className="text-white ml-4 list-decimal" >
                                        <li>React</li>
                                        <li>Javascript</li>
                                        <li>CSS 3</li>
                                        <li>HTML 5</li>
                                    </ul>
                                </div>
                            </dialog>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;