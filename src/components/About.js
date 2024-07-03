import React from "react";
import { NavLink } from "react-router-dom";
import { FaDatabase, FaKeyboard, FaLaptopCode } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { PiCertificateBold } from "react-icons/pi";
import { GiStarsStack } from "react-icons/gi";
import { FaTrophy } from "react-icons/fa6";

import "./About.css";
export const About = () => {
    return (
        <div className="w-2/4 font-poppins bg-eerie-grey  border border-gray-800 rounded-xl p-8 shadow-md ">
            <h1 className="text-4xl text-custom-grey font-bold">About Me</h1>
            <div className="w-6 h-[6px] bg-white rounded-lg mt-4"></div>
            <section className="mt-9 mb-9 space-y-6 text-custom-grey">
                <p className="">
                    Hii there!, I'm final year computer science engineering
                    student from Mumbai, India, proficient in creating web
                    application. I enjoy turning complex problems into simple,
                    beautiful and intuitive web application.
                </p>
                <p>
                    My expertise include building website using latest MERN
                    stack technology so that it is functional and user-friendly
                    but at the same time attractive. Morever I am always eager
                    to learn and adapt to new technologies and frameworks, as I
                    strive to stay up-to-date with the latest industry trends.
                </p>
                <p>
                    I am open to exciting opportunities where I can contribute
                    my expertise and make a meaningful impact.
                </p>
            </section>
            <section className="mb-8 text-custom-grey">
                <h1 className="text-3xl font-bold text-white mb-8">Skills</h1>
                <ul className="grid grid-cols-2 gap-5 text-white">
                    <li className="card-color p-4 rounded-xl flex flex-row justify-center items-center gap-10">
                        <FaKeyboard className="text-3xl" />
                        <div className="flex flex-col">
                            <h1 className="text-xl mb-3 font-semibold">
                                Programming Language
                            </h1>
                            <p className="text-base">C++, Python, C, Java</p>
                        </div>
                    </li>

                    <li className="card-color p-4 rounded-xl flex flex-row justify-center items-center gap-10">
                        <MdOutlineDesignServices className="text-3xl" />
                        <div className="flex flex-col">
                            <h1 className="text-xl mb-3 font-semibold">
                                FrontEnd Technologies
                            </h1>
                            <p className="text-base">
                                HTML, CSS, Javascript,<br></br>Tailwind, ReactJs
                            </p>
                        </div>
                    </li>
                    <li className="card-color p-4 rounded-xl flex flex-row justify-center items-center gap-10">
                        <FaLaptopCode className="text-3xl" />
                        <div className="flex flex-col">
                            <h1 className="text-xl mb-3 font-semibold">
                                BackEnd Technologies
                            </h1>
                            <p className="text-base">
                                Javascript, NodeJS, ExpressJS
                            </p>
                        </div>
                    </li>
                    <li className="card-color p-7 pl-[4.1rem] rounded-xl flex flex-row items-center gap-10">
                        <FaDatabase className="text-3xl" />
                        <div className="flex flex-col">
                            <h1 className="text-xl mb-3 font-semibold">
                                Database
                            </h1>
                            <p className="text-base">MongoDB, SQL</p>
                        </div>
                    </li>
                </ul>
            </section>
            <section>
                <h3 className="font-semibold text-3xl text-white mb-6">
                    Achievements
                </h3>

                <ul className="scroll-wrapper gap-x-5 ">
                    <li className="w-[35rem] scroll-item card-color p-7 pl-[4.1rem] rounded-xl flex flex-row items-center gap-10">
                        <PiCertificateBold className="text-7xl text-white" />
                        <div className="flex flex-col">
                            <h1 className="text-xl mb-3 font-semibold text-white">
                                Certificate
                            </h1>
                            <p className="text-base text-white">MongoDB, SQL</p>
                        </div>
                    </li>
                    <li className="card-color scroll-item p-7 pl-[4.1rem] rounded-xl flex flex-row items-center gap-10">
                        <FaTrophy className="text-7xl text-white" />
                        <div className="flex flex-col">
                            <h1 className="text-xl mb-3 font-semibold text-white">
                                Database
                            </h1>
                            <p className="text-base text-white">MongoDB, SQL</p>
                        </div>
                    </li>
                    <li className="card-color scroll-item p-7 pl-[4.1rem] rounded-xl flex flex-row items-center gap-10">
                        <GiStarsStack className="text-7xl text-white" />
                        <div className="flex flex-col">
                            <h1 className="text-xl mb-3 font-semibold text-white">
                                Database
                            </h1>
                            <p className="text-base text-white">MongoDB, SQL</p>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
};
export default About;
