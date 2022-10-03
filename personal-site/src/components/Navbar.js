import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
    return (
        <header className="bg-white md:sticky top-0 z-10 border-b-4 border-gray-800">
            <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                <a className="title-font font-medium text-black mb-4 md:mb-0">
                <a href="#about" className="ml-3 text-xl">
                    Joseph Griffith
                </a>
                </a>
                <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
                <a href="#projects" className="mr-5 hover:text-black">
                    Past Work
                </a>
                <a href="#skills" className="mr-5 hover:text-black">
                    Skills
                </a>
                <a href="#credentials" className="mr-5 hover:text-black">
                    Credentials
                </a>
                <a href="#testimonials" className="mr-5 hover:text-black">
                    Testimonials
                </a>
                <a href="./Joseph_Griffith_Resume.pdf" className="mr-5 hover:text-black" target="_blank">
                    Resume
                </a>
                </nav>
                <a
                href="#contact"
                className="inline-flex items-center bg-white border-0 py-1 px-3 focus:outline-none hover:bg-gray-700  text-base mt-4 md:mt-0">
                Hire Me
                <ArrowRightIcon className="w-4 h-4 ml-1" />
                </a>
            </div>
        </header>
    )
}