import { FaBars, FaBook, FaDashcube, FaHome, FaPhone } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";


const Navbar = () => {
    const navLinks =
        <>
            <li><a><FaHome /> Home</a></li>
            <li><a> <FaBook /> All Books</a></li>
            <li><a><FaPerson /> About Us</a></li>
            <li><a><FaPhone /> Contact Us</a></li>
            <li><a><FaDashcube /> Dashboard</a></li>
        </>
    return (
        <div className="navbar   w-11/12 mx-auto">
            <div className="navbar-start">
                <div className="dropdown">
                    <div className="drawer ">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-content flex flex-col items-center justify-center">
                            {/* Page content here */}
                            <label htmlFor="my-drawer-2" className="drawer-button lg:hidden cursor-pointer">
                                <FaBars />
                            </label>
                        </div>
                        <div className="drawer-side ">
                            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                                {navLinks}
                            </ul>
                        </div>
                    </div>
                </div>
                <button className="btn btn-ghost text-xl h-">Book Nest</button >
            </div>

            <div className="navbar-end">
                <div className="hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks}
                    </ul>
                </div>
                <div className="flex gap-2">
                    <a className="btn btn-sm btn-outline border-2">Sign In </a>
                    <span className="hidden md:block">  <a className="btn btn-sm btn-outline border-2 ">Sign Up</a></span>
                </div>
            </div>
        </div>
    );
};

export default Navbar;