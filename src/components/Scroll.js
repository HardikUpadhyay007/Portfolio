import React from "react";
import "./Scroll.css";

export const Scroll = () => {
    return (
        <div>
            <ul class="scroll-wrapper">
                <li class="scroll-item card-color p-7 pl-[4.1rem] rounded-xl flex flex-row items-center gap-10">
                    <i class="fas fa-certificate text-7xl text-white"></i>
                    <div class="flex flex-col">
                        <h1 class="text-xl mb-3 font-semibold text-white">
                            Certificate
                        </h1>
                        <p class="text-base text-white">MongoDB, SQL</p>
                    </div>
                </li>
                <li class="scroll-item card-color p-7 pl-[4.1rem] rounded-xl flex flex-row items-center gap-10">
                    <i class="fas fa-certificate text-7xl text-white"></i>
                    <div class="flex flex-col">
                        <h1 class="text-xl mb-3 font-semibold text-white">
                            Certificate
                        </h1>
                        <p class="text-base text-white">MongoDB, SQL</p>
                    </div>
                </li>
                <li class="scroll-item card-color p-7 pl-[4.1rem] rounded-xl flex flex-row items-center gap-10">
                    <i class="fas fa-certificate text-7xl text-white"></i>
                    <div class="flex flex-col">
                        <h1 class="text-xl mb-3 font-semibold text-white">
                            Certificate
                        </h1>
                        <p class="text-base text-white">MongoDB, SQL</p>
                    </div>
                </li>
            </ul>
        </div>
    );
};
export default Scroll;
