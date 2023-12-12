
const Contact = () => {
    return (
        <div className="flex justify-center items-center gap-10 ">
            <div className="w-1/3">
                <h3 className="text-3xl font-semibold text-white my-3">Contact with Me</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam ducimus voluptatem nesciunt placeat, in soluta eum consectetur quibusdam, deserunt pariatur eveniet dolorum voluptatibus alias architecto est repellendus rem neque laudantium. Dolorem tempora qui cumque corporis harum placeat eius, dolores ex earum, deserunt est non voluptatem omnis dicta eaque reiciendis sapiente.</p>
                <div className="text-white">
                    <p className="border-2 p-4 my-3">Email: shakibalshajid1682@gmail.com</p>
                    <p className="border-2 p-4 my-3">Email: shakibalshajid1682@gmail.com</p>
                    <p className="border-2 p-4 my-3">Email: shakibalshajid1682@gmail.com</p>
                </div>
            </div>
            <div className=" px-6 py-24 sm:py-32 lg:px-8 w-2/3">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Contact</h2>
                </div>
                <form action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
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
    )
};
export default Contact;