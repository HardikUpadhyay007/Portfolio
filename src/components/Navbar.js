import React from "react";
import { Link, NavLink } from "react-router-dom"; // Import Link

export const Navbar = () => {
    return (
        <div className="bg-avatar-color relative z-2 font-poppins font-semibold p-4 border border-2 h-full border-gray-300 rounded-2xl ">
            {/* <ul className="flex flex-row gap-x-[4rem] text-white ">
                <li className="hover:text-gray-300 cursor-pointer">
                    <Link to="/about">About</Link>
                </li>
                <li className="hover:text-gray-300 cursor-pointer">
                    <Link to="/resume">Resume</Link>
                </li>
                <li className="hover:text-gray-300 cursor-pointer">
                    <Link to="/contact">Contact</Link>
                </li>
            </ul> */}
            <nav className="flex flex-row gap-x-[4rem] text-white ">
                <li className="hover:text-gray-300 cursor-pointer">
                    <NavLink to="/about">About</NavLink>
                </li>
                <li className="hover:text-gray-300 cursor-pointer">
                    <NavLink to="/resume">Resume</NavLink>
                </li>
                <li className="hover:text-gray-300 cursor-pointer">
                    <NavLink to="/contact">Contact</NavLink>
                </li>
            </nav>
        </div>
    );
};
export default Navbar;
