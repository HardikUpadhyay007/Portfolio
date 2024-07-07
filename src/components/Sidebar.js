import React from "react";
import AvatarImg from "../assests/avatar.png";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Sidebar.css";
export const Sidebar = () => {
    return (
        <div className="w-68 text-custom-grey main-div boxshadow relative bottom-[-7.5rem] top-13 h-full  mx-1 my-3 mb-0  z-10 bg-eerie-grey border border-gray-800 rounded-xl p-2 shadow-md">
            <div className="flex figure-div items-center flex-col">
                <figure className="bg-avatar-color img-div p-5 m-3 rounded-xl">
                    <img src={AvatarImg} className="avatar-img "></img>
                </figure>
                <div className="flex flex-col name-heading items-center text-white mt-4 font-poppins">
                    <h2 className="text-2xl font-bold name tracking-wide m-4">
                        Hardik Upadhyay
                    </h2>
                    <h4 className="text-base second-heading border rounded-xl card-color">
                        full stack developer
                    </h4>
                </div>
            </div>
            <div className="w-full px-2 font-poppins">
                <div class="w-full h-[1px] bg-white my-9"></div>
                <ul className="flex flex-col w-full gap-7 mb-4 ">
                    <li className="flex flex-row items-center min-w-full gap-[16px] mb-7">
                        <div className="w-12 card-color h-12 border border-white rounded-lg text-lg flex items-center justify-center">
                            <i className="gg-smartphone inline-block text-white"></i>
                        </div>
                        <div className="flex flex-col items-start justify-center">
                            <span className="ml-4 text-xs text-white">
                                Phone
                            </span>
                            <span className="ml-4 text-base text-white">
                                8467918277
                            </span>
                        </div>
                    </li>
                    <li className="flex flex-row items-center min-w-full gap-[16px] mb-7">
                        <div className="w-12 h-12 card-color border border-white rounded-lg text-lg flex items-center justify-center">
                            <FaEnvelope className="text-white size-6 card-color" />
                        </div>
                        <div className="flex flex-col items-start justify-center">
                            <span className="ml-4 text-xs text-white">
                                Email
                            </span>
                            <p className="ml-4 text-base text-white text-wrap">
                                hardikkupadhyay123<br></br>@gmail.com
                            </p>
                        </div>
                    </li>
                    <li className="flex flex-row items-center min-w-full gap-[16px] mb-7">
                        <a
                            href="https://www.linkedin.com/in/hardikkupadhyay"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div className="w-12 h-12 card-color border border-white rounded-lg text-lg flex items-center justify-center">
                                <FaLinkedin className="text-white" />
                            </div>
                        </a>
                        <div className="flex flex-col items-start justify-center">
                            <span className="ml-4 text-xs text-white">
                                LinkedIn
                            </span>
                            <span className="ml-4 text-base text-white">
                                hardikkupadhyay
                            </span>
                        </div>
                    </li>
                </ul>
                <div class="w-full h-[1px] my-7"></div>

                <ul className="flex pl-8 flex-row justify-center items-center gap-y-2 text-white">
                    <li className=" mr-6">
                        <a
                            href="https://github.com/HardikUpadhyay007"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-github"></i>
                        </a>
                    </li>
                    <li className="mr-6">
                        <a
                            href="https://www.instagram.com/hardikkupadhyay"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                    </li>
                    <li className="mr-6">
                        <a
                            href="https://leetcode.com/u/hardikupadhyay"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <i className="fas fa-code"></i>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default Sidebar;
