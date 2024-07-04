import React from "react";
import "./Resume.css";
import "./About.css";
export const Resume = () => {
    return (
        <div className="w-2/4 font-poppins bg-eerie-grey  border border-gray-800 rounded-xl p-8 shadow-md ">
            <h1 className="text-4xl text-custom-grey font-bold">Resume</h1>
            <div className="w-6 h-[6px] bg-white rounded-lg mt-4"></div>
            <section className="design-section ">
                <h1 className="text-4xl text-white font-semibold mb-10 mt-10">
                    Education
                </h1>

                <div class="timeline">
                    <div class="timeline-empty"></div>

                    <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div>
                    <div class="timeline-component timeline-content">
                        <h3 className="underline text-xl">
                            B.Tech Computer Science
                        </h3>
                        <p className="text-slate-400">2022-Present</p>
                    </div>
                    <div class="timeline-component timeline-content">
                        <h3 className="underline text-xl">
                            Higher Secondary Education
                        </h3>
                        <p className="text-slate-400">2020-2022</p>
                        <p>
                            Completed my secondary education at Sir Padampat
                            Singhania Education Centre, achieving a commendable
                            90%.
                        </p>
                    </div>
                    <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div>
                    <div class="timeline-empty"></div>

                    <div class="timeline-empty"></div>

                    <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div>
                    <div class=" timeline-component timeline-content">
                        <h2 className="underline text-xl">
                            Secondary School Education
                        </h2>
                        <p className="text-slate-400">2019-2020</p>
                        <p>
                            Completed my secondary education at Sir Padampat
                            Singhania Education Centre, achieving a commendable
                            92%.
                        </p>
                    </div>
                </div>
                <div className="hrcss w-[15rem] h-[6px] bg-white rounded-lg mt-10"></div>
            </section>
            <section className="design-section ">
                <h1 className="text-4xl text-white font-semibold mb-10 mt-10">
                    Projects
                </h1>

                <div class="timeline">
                    <div class="timeline-empty"></div>

                    <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div>
                    <a
                        href="https://github.com/HardikUpadhyay007/Portfolio"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div class="timeline-component timeline-content">
                            <h3 className="text-xl underline mb-1.5">
                                Portfolio
                            </h3>
                            <p>
                                My portfolio to pratice and brush up my
                                development skills.
                            </p>
                        </div>
                    </a>
                    <a
                        href="https://github.com/HardikUpadhyay007/automobile-final"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div class="timeline-component timeline-content">
                            <h3 className="text-xl underline mb-1.5">
                                Automobile Display Website
                            </h3>
                            <p>
                                Created a display website for a business store
                                to establish online presence.
                            </p>
                        </div>
                    </a>
                    <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div>
                    <div class="timeline-empty"></div>

                    <div class="timeline-empty"></div>

                    <div class="timeline-middle">
                        <div class="timeline-circle"></div>
                    </div>
                    <a
                        href="https://github.com/HardikUpadhyay007/Spotify-Clone"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <div class=" timeline-component timeline-content">
                            <h3 className="text-xl underline mb-1.5">
                                Spotify Clone
                            </h3>
                            <p>
                                Developed a Spotify clone to enhance my
                                development skills.
                            </p>
                        </div>
                    </a>
                </div>
                <div className="hrcss w-[15rem] h-[6px] bg-white rounded-lg mt-10"></div>

                <section>
                    <h2 className="text-4xl text-white font-semibold mb-10 mt-10">
                        My Skills Measure
                    </h2>
                    <ul className="ml-[-15rem]">
                        <li>
                            <div className="flex flex-row">
                                <h3 className="text-xl text-white mr-5">
                                    HTML
                                </h3>
                                <p className="text-custom-grey text-xl">90%</p>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-fill w-[90%]"></div>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-row">
                                <h3 className="text-xl text-white mr-5">CSS</h3>
                                <p className=" text-custom-grey text-xl">80%</p>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-fill w-[80%]"></div>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-row">
                                <h3 className="text-xl text-white mr-5">
                                    Tailwind CSS
                                </h3>
                                <p className=" text-custom-grey text-xl">70%</p>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-fill w-[70%]"></div>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-row">
                                <h3 className="text-xl text-white mr-5">
                                    React JS
                                </h3>
                                <p className=" text-custom-grey text-xl">60%</p>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-fill w-[60%]"></div>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-row">
                                <h3 className="text-xl text-white mr-5">
                                    Node JS
                                </h3>
                                <p className=" text-custom-grey text-xl">80%</p>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-fill w-[80%]"></div>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-row">
                                <h3 className="text-xl text-white mr-5">
                                    Express JS
                                </h3>
                                <p className=" text-custom-grey text-xl">75%</p>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-fill w-[75%]"></div>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-row">
                                <h3 className="text-xl text-white mr-5">
                                    Javascript
                                </h3>
                                <p className=" text-custom-grey text-xl">80%</p>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-fill w-[80%]"></div>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-row">
                                <h3 className="text-xl text-white mr-5">
                                    MongoDB
                                </h3>
                                <p className=" text-custom-grey text-xl">60%</p>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-fill w-[60%]"></div>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-row">
                                <h3 className="text-xl text-white mr-5">SQL</h3>
                                <p className=" text-custom-grey text-xl">75%</p>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-fill w-[75%]"></div>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-row">
                                <h3 className="text-xl text-white mr-5">C++</h3>
                                <p className=" text-custom-grey text-xl">90%</p>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-fill w-[90%]"></div>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-row">
                                <h3 className="text-xl text-white mr-5">
                                    Python
                                </h3>
                                <p className=" text-custom-grey text-xl">70%</p>
                            </div>
                            <div className="progress-bar">
                                <div className="progress-fill w-[70%]"></div>
                            </div>
                        </li>
                    </ul>
                </section>
            </section>
        </div>
    );
};
export default Resume;
