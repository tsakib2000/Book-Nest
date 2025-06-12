import { FaBars, FaBook, FaDashcube, FaHome, FaPhone } from "react-icons/fa";
import { FaPerson } from "react-icons/fa6";
import { Link } from "react-router-dom";



const Navbar = () => {
    const navLinks =
        <>
            <li><Link to='/' ><FaHome /> Home</Link ></li>
            <li><Link to='/allBooks' > <FaBook /> All Books</Link ></li>
            <li><Link to='/' ><FaPerson /> About Us</Link ></li>
            <li><Link to='/' ><FaPhone /> Contact Us</Link ></li>
            <li><Link to='/' ><FaDashcube /> Dashboard</Link ></li>
        </>
    return (

        <div className="z-10 top-0 navbar bg-white  fixed  mx-auto flex flex-col h-[80px] md:h-[80px] md:flex-row  border-b-0">
            <div className="flex justify-evenly w-11/12 mx-auto">
                <div className="navbar ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div className="drawer ">
                                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                                <div className="drawer-content flex flex-col items-center justify-center">
                                    {/* Page content here */}
                                    <label htmlFor="my-drawer-2" className="drawer-button lg:hidden cursor-pointer text-2xl btn btn-ghost">
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
                        <button className=" ml-2.5 text-xl cursor-pointer edu-qld-hand">Book Nest</button >
                    </div>

                    <div className="navbar-center ">
                        <label className="input focus:outline-none focus:ring-none rounded-3xl" >
                            <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                <g
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2.5"
                                    fill="none"
                                    stroke="currentColor"
                                >
                                    <circle cx="11" cy="11" r="8"></circle>
                                    <path d="m21 21-4.3-4.3"></path>
                                </g>
                            </svg>
                            <input type="search" className="grow  rounded-2xl" placeholder="Search" />

                        </label>
                    </div>

                    <div className="navbar-end">

                        <div className="flex gap-2">
                            <Link to='singin' className="btn  btn-outline  border-[#0078d4]">Sign In </Link>
                            <span className="hidden md:block">  <Link to='signup' className="btn  text-white bg-gradient-to-r from-pink-300 to-[#0078d4] border-none ">Sign Up</Link></span>
                        </div>
                    </div>
                </div>
            </div>
           
        </div>

    );
};

export default Navbar;