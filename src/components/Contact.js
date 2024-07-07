import React, { useEffect } from "react";
import "./Contact.css";
import { useNavigate } from "react-router-dom"; // Step 1: Import useHistory

function Contact() {
    // Select the form by its id
    const navigate = useNavigate();

    useEffect(() => {
        const form = document.getElementById("contactForm");
        const handleSubmit = (event) => {
            event.preventDefault(); // Prevent the default form submission
            navigate("/about"); // Use navigate to change the route
        };

        if (form) {
            form.addEventListener("submit", handleSubmit);
        }

        // Cleanup function to remove the event listener
        return () => {
            if (form) {
                form.removeEventListener("submit", handleSubmit);
            }
        };
    }, [navigate]);
    return (
        <div className="w-2/4 font-poppins bg-eerie-grey contact-div border border-gray-800 rounded-xl p-8 shadow-md ">
            <h1 className="text-4xl text-custom-grey font-bold ">Contact Me</h1>
            <div className="w-6 h-[6px] bg-white rounded-lg mt-4 mb-[10rem]"></div>
            <div className="contact-wrapper flex flex-col items-center">
                <form className="font-poppins" id=" contact-form">
                    <div className="mb-7">
                        <label
                            htmlFor="name"
                            className="block text-sm font-medium "
                        >
                            {/* Name */}
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            className="mt-1 p-2 w-[18rem] bg-eerie-grey border border-grey-200 rounded-md shadow-sm text-white "
                            required
                            placeholder="Name"
                        />
                    </div>
                    <div className="mb-7">
                        <label
                            htmlFor="email"
                            className="block text-sm font-medium text-white"
                        >
                            {/* Email */}
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="mt-1 p-2 w-[18rem] bg-eerie-grey border border-grey-200 rounded-md shadow-sm text-white "
                            placeholder="Email"
                            required
                        />
                    </div>
                    <div className="mb-7">
                        <label
                            htmlFor="phone"
                            className="block text-sm font-medium text-white"
                        >
                            {/* Phone Number */}
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            name="phone"
                            className="mt-1 p-2 w-[18rem] bg-eerie-grey border border-grey-200 text-white rounded-md shadow-sm "
                            placeholder="Phone Number"
                            required
                        />
                    </div>
                    <div className="mb-7">
                        <label
                            htmlFor="message"
                            className="block text-sm font-medium text-white"
                        >
                            {/* Message */}
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            placeholder="Message me!"
                            className="mt-1 p-2 w-[18rem] bg-eerie-grey text-white border border-grey-200 rounded-md shadow-sm "
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="inline-flex ml-[7rem] mb-[15rem] card-color justify-center py-2 px-4 border border-white shadow-sm text-sm font-medium rounded-md text-white bg-eerie-grey hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Send
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
