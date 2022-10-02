// src/components/About.js

import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="bg-white container mx-auto flex md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center self-center pl-10">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            Hi, I'm Joe.
            <br className="hidden lg:inline-block" />I love to build amazing
            apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
            laborum quasi, incidunt dolore iste nostrum cupiditate voluptas?
            Laborum, voluptas natus?
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-500  text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-neutral-800 bg-white border-0 py-2 px-6 hover:underline underline-offset-4 text-lg">
              See My Past Work
            </a>
          </div>
        </div>
        <div className="w-100 md:w-1/2 w-5/6 hero-img h-96">
          PLACEHOLDER
        </div>
      </div>
    </section>
  );
}