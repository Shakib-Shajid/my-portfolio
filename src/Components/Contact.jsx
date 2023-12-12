import { BsLinkedin } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";


const Contact = () => {
    return (
        <div className="my-3 md:my-7 lg:my-12">
            <h3 className="text-4xl font-semibold text-white text-center mt-5">Contact with Me</h3>
            <div className="flex md:ml-4 lg:ml-0 justify-center items-center md:gap-10 flex-col md:flex-row">
                <div className="md:w-1/3 mt-10">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ducimus voluptatem nesciunt placeat, in soluta eum consectetur quibusdam, deserunt pariatur eveniet dolorum voluptatibus alias architecto est repellendus rem neque laudantium. Dolorem tempora qui cumque corporis harum placeat eius, dolores ex earum, deserunt est non voluptatem omnis dicta eaque reiciendis sapiente.</p>
                    <div className="text-white">
                        <p className="rounded-lg border-2 p-4 my-3 flex items-center gap-3"><MdOutlineEmail />
                            shakibalshajid1682@gmail.com</p>
                        <p className="rounded-lg border-2 p-4 my-3 flex items-center gap-3"><BsLinkedin />
                            Shakib Al Shajid</p>
                        <p className="rounded-lg border-2 p-4 my-3 flex items-center gap-3"><FaGithub />
                            shakib-shajid</p>
                    </div>
                </div>
                <div className="md:px-6 lg:px-8 w-2/3">

                    <form className="mx-auto mt-10 max-w-xl">
                        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">

                            <div className="sm:col-span-2">
                                <label htmlFor="company" className="block text-sm font-semibold leading-6 text-white">
                                    Full Name
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-white">
                                    Email
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="email"
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="last-name" className="block text-sm font-semibold leading-6 text-white">
                                    Phone Number
                                </label>
                                <div className="mt-2.5">
                                    <input
                                        type="text" className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>


                            <div className="sm:col-span-2">
                                <label htmlFor="message" className="block text-sm font-semibold leading-6 text-white">
                                    Message
                                </label>
                                <div className="mt-2.5">
                                    <textarea
                                        rows={4}
                                        className="block w-full rounded-md border-0 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>
                        </div>
                        <button className="btn btn-info  w-full mt-5 text-white">Send Message</button>
                    </form>
                </div>
            </div>
        </div>
    )
};
export default Contact;