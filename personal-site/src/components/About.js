// src/components/About.js

import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="bg-white mx-auto flex items-center flex-wrap-reverse lg:flex-nowrap">
        <div className="w-5/6 mx-auto xl:max-w-4xl lg:max-w-xl lg:flex-grow lg:pr-24 lg:pr-16 flex flex-col lg:items-start lg:text-left mb-16 md:mb-0 items-center text-center self-center pl-3 pr-3 pt-5 lg:pl-10">
            <div className="text-wrapper">
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
                    Hi, I'm Joe.
                </h1>
                <p className="mb-8 leading-relaxed max-w-2xl">
                    I'm a developer with 5 years of professional experince and a true passion for what I do. Working primarily in the e-commerce space, I pride
                    myself in being a team-oriented developer. If that sounds like someone you could use on your team please reach out below.
                </p>
                <div className="flex justify-center lg:justify-start">
                    <a
                    href="#contact"
                    className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none btn-purple text-lg">
                    Work With Me
                    </a>
                    <a
                    href="#projects"
                    className="ml-4 inline-flex text-neutral-800 bg-white border-0 my-2 mx-6 underline-grow text-lg">
                    See My Past Work
                    </a>
                </div>
            </div>
        </div>
        <div className="w-full hero-img lg:flex-grow lg:flex-shrink">
          <img class="image-responsive" src="./phx.jpeg" alt="Picture of Phoenix AZ" />
        </div>
      </div>
    </section>
  );
}