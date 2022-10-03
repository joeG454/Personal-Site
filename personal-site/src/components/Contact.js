// src/components/Contact.js

import React from "react";

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    
    function encode(data) {
        return Object.keys(data)
        .map(
            (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    }
    
    function handleSubmit() {
       /* fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", name, email, message }),
        })
        .then(() => alert("Message sent!"))
        .catch((error) => alert(error));*/
    }    
      
    return (
        <section id="contact" className="relative">
            <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
            <div className="lg:w-2/3 md:w-1/2 bg-white overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                <iframe
                width="100%"
                height="100%"
                title="map"
                className="absolute inset-0"
                frameBorder={0}
                marginHeight={0}
                marginWidth={0}
                style={{ filter: "opacity(0.7)" }}
                src="https://www.google.com/maps/embed/v1/place?q=Tempe,+AZ,+USA&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
                />
                <div className="bg-white relative flex flex-wrap py-6  shadow-md">
                    <div className="lg:w-1/3 px-6">
                        <h2 className="title-font font-semibold text-black tracking-widest text-xs">
                        LOCATION
                        </h2>
                        <p className="mt-1">
                            Tempe, AZ
                        </p>
                    </div>
                    <div className="lg:w-2/3 px-6 mt-4 lg:mt-0">
                        <h2 className="title-font font-semibold text-black tracking-widest text-xs">
                        EMAIL
                        </h2>
                        <a className="text-orange-500 leading-relaxed">
                        joseph.griffith454@gmail.com
                        </a>
                        <h2 className="title-font font-semibold text-black tracking-widest text-xs mt-4">
                        PHONE
                        </h2>
                        <p className="leading-relaxed">480-383-9616</p>
                    </div>
                </div>
            </div>
            <form
                netlify
                name="contact"
                onSubmit={handleSubmit()}
                className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                <h2 className="text-black sm:text-4xl text-3xl mb-1 font-medium title-font">
                Hire Me
                </h2>
                <p className="leading-relaxed mb-5">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                suscipit officia aspernatur veritatis. Asperiores, aliquid?
                </p>
                <div className="relative mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-neutral-800">
                    Name
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-white  border border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                </div>
                <div className="relative mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-neutral-800">
                    Email
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-white  border border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                />
                </div>
                <div className="relative mb-4">
                <label
                    htmlFor="message"
                    className="leading-7 text-sm text-neutral-800">
                    Message
                </label>
                <textarea
                    id="message"
                    name="message"
                    className="w-full bg-white  border border-gray-700 focus:border-orange-500 focus:ring-2 focus:ring-orange-500 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                />
                </div>
                <button
                type="submit"
                className="text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-500  text-lg">
                Submit
                </button>
            </form>
            </div>
        </section>
    );
}