import { NavLink } from "react-router-dom";
import { MdOutlineFileDownload } from "react-icons/md";


const Navbar = () => {
    const a =
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#2564eb]  font-bold" : ""
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#2564eb]  font-bold" : ""
                    }
                >
                    About
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/skills"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#2564eb]  font-bold" : ""
                    }
                >
                    Skills
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/projects"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#2564eb]  font-bold" : ""
                    }
                >
                    Projects
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/contact"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-[#2564eb]  font-bold" : ""
                    }
                >
                    Contact
                </NavLink>
            </li>


        </>
    return (
        <div className="navbar text-white sticky top-0 z-50 bg-black rounded-xl ">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {a}
                    </ul>
                </div>
                <a className="btn btn-ghost text-xl hidden md:block pt-2 uppercase" href='/'>Shakib Al Shajid</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {a}
                </ul>
            </div>
            <div className="navbar-end ">
                <a className="btn btn-info font-bold " href="../assets/Shakib_Al_Shajid_Resume.pdf" download="Shakib_Al_Shajid_Resume.pdf"><MdOutlineFileDownload className="text-xl" />Download Resume</a>
            </div>
        </div>
    );
};

export default Navbar;