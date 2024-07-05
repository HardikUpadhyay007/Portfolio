import React from "react";
import { NavLink } from "react-router-dom";
import { FaDatabase, FaKeyboard, FaLaptopCode } from "react-icons/fa";
import { MdOutlineDesignServices } from "react-icons/md";
import { GiStarsStack } from "react-icons/gi";
import { FaStairs } from "react-icons/fa6";
import { CiPen } from "react-icons/ci";

import "./About.css";

export const About = () => {
    return (
        <div className="w-2/4 font-poppins container bg-eerie-grey overflow-y-auto border border-gray-800 rounded-xl p-8 shadow-md ">
            <h1 className="text-4xl main-heading text-custom-grey font-bold">
                About Me
            </h1>
            <div className="w-6 h-[6px] bg-white rounded-lg mt-4"></div>
            <section className="mt-9 mb-9 para-div space-y-6 text-custom-grey">
                <p className="">
                    Hii there!, I'm second year computer science engineering
                    student from Punjab, India proficient in creating web
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
            <section className="mb-8 text-custom-grey second-div">
                <h1 className="text-3xl font-bold second-main-heading text-white mb-8">
                    Skills
                </h1>
                <ul className="grid grid-cols-2 tech-list gap-5 text-white">
                    <li className="card-color tech-item p-4 rounded-xl flex flex-row justify-center items-center gap-10">
                        <FaKeyboard className="text-3xl icon-item" />
                        <div className="flex text-item flex-col">
                            <h1 className="text-xl mb-3 font-semibold">
                                Programming Language
                            </h1>
                            <p className="text-base para-text">
                                C++, Python, C, Java
                            </p>
                        </div>
                    </li>

                    <li className="card-color p-4 tech-item rounded-xl flex flex-row justify-center items-center gap-10">
                        <MdOutlineDesignServices className="text-3xl" />
                        <div className="flex text-item flex-col">
                            <h1 className="text-xl mb-3 font-semibold">
                                FrontEnd Technologies
                            </h1>
                            <p className="text-base para-text">
                                HTML, CSS, Javascript,<br></br>Tailwind, ReactJs
                            </p>
                        </div>
                    </li>
                    <li className="card-color p-4 rounded-xl tech-item flex flex-row justify-center items-center gap-10">
                        <FaLaptopCode className="text-3xl" />
                        <div className="flex text-item flex-col">
                            <h1 className="text-xl mb-3 font-semibold">
                                BackEnd Technologies
                            </h1>
                            <p className="text-base para-text">
                                Javascript, NodeJS, ExpressJS
                            </p>
                        </div>
                    </li>
                    <li className="card-color p-4 rounded-xl tech-item flex flex-row justify-center items-center gap-10">
                        <FaDatabase className="text-3xl" />
                        <div className="flex text-item flex-col">
                            <h1 className="text-xl mb-3 font-semibold">
                                Database Technologies
                            </h1>
                            <p className="text-base para-text">
                                Mongo DB , SQL
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
            <section className="scroll-sction">
                <h3 className="font-semibold scroll-heading text-3xl text-white mb-6">
                    What I Am Doing
                </h3>
                <ul class="scroll-wrapper">
                    <li class="scroll-item card-color-item ">
                        <i class="fas text-7xl font-extralight text-white">
                            <FaStairs></FaStairs>
                        </i>
                        <div class="flex flex-col">
                            <h1 class="text-xl mb-3 font-semibold text-white">
                                Learning
                            </h1>
                            <p class="text-base text-white">ReactJS , NextJS</p>
                        </div>
                    </li>
                    <li class="scroll-item card-color-item ">
                        <i class="fas text-7xl text-white">
                            <GiStarsStack></GiStarsStack>
                        </i>
                        <div class="flex flex-col">
                            <h1 class="text-xl mb-3 font-semibold text-white">
                                Certification
                            </h1>
                            <p class="text-base text-white">
                                DSA (Abdul Bari) , AI Certification (Google
                                Cloud)
                            </p>
                        </div>
                    </li>
                    <li class="scroll-item card-color-item ">
                        <i class="text-7xl text-white">
                            <CiPen></CiPen>
                        </i>
                        <div class="flex flex-col">
                            <h1 class="text-xl mb-3 font-semibold text-white">
                                Upsolving
                            </h1>
                            <p class="text-base text-white">
                                80+ Problems (Leetcode)
                            </p>
                        </div>
                    </li>
                </ul>
            </section>
        </div>
    );
};
export default About;
