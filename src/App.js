import React from "react";
import StarsCanvas from "./components/Star";
import "./App.css"; // Ensure you have some basic styles for your app
import {
    BrowserRouter as Router,
    Route,
    Routes,
    Link,
    NavLink,
} from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Resume from "./components/Resume";
import Sidebar from "./components/Sidebar";
import "./components/Sidebar.css";
const App = () => {
    return (
        <div className="relative w-full mb-10">
            <StarsCanvas />
            <div className="relative z-30">
                <div className="flex flex-row justify-center mt-12 gap-x-10">
                    {/* <div className="flex flex-row justify-center mt-12 gap-x-10"> */}
                    <Sidebar></Sidebar>
                    <Routes>
                        <Route path="/" element={<About />} />
                        <Route path="/resume" element={<Resume />} />
                        <Route path="/contact" element={<Contact />} />
                    </Routes>
                    <nav className="">
                        <ul className="navbar flex flex-col bg-custom-grey gap-y-4 ">
                            <li className="card-color rounded-lg">
                                <a href="#">
                                    <Link to="/">
                                        <i class="fas fa-user "></i>
                                        <span>About</span>
                                    </Link>
                                </a>
                            </li>
                            <li className="card-color rounded-lg">
                                <a href="#">
                                    <Link to="/resume">
                                        <i class="fas fa-file-alt"></i>
                                        <span>Resume</span>
                                    </Link>
                                </a>
                            </li>
                            <li className="card-color rounded-lg">
                                <a href="#">
                                    <Link to="/contact">
                                        <i class="fas fa-phone"></i>
                                        <span>Contact</span>
                                    </Link>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    );
};

export default App;
