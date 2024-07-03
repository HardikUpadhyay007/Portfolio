import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes,
    NavLink,
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Sidebar from "./components/Sidebar"; // Assuming Sidebar is imported
import "./components/Sidebar.css";
function App() {
    return (
        <div className="relative min-h-screen bg-black">
            {" "}
            {/* Ensure this div is relatively positioned */}
            <nav className="absolute card-color top-[-1rem] right-[18rem] z-2 font-poppins font-semibold p-4 bg-avatar-color text-white rounded-2xl">
                <ul className="flex flex-row gap-x-4">
                    {" "}
                    {/* Adjusted for vertical layout */}
                    <li className="hover:text-gray-300 cursor-pointer">
                        <NavLink to="/">About</NavLink>
                    </li>
                    <li className="hover:text-gray-300 cursor-pointer">
                        <NavLink to="/resume">Resume</NavLink>
                    </li>
                    <li className="hover:text-gray-300 cursor-pointer">
                        <NavLink to="/contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
            <div className="flex flex-row justify-center mt-12 gap-x-10">
                <Sidebar></Sidebar>
                <Routes>
                    <Route path="/" element={<About />} />
                    <Route path="/resume" element={<Resume />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </div>
        </div>
    );
}

export default App;
