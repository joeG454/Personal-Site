// src/components/Skills.js

import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";
import React from "react";
import { skills } from "../data";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <ChipIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
            While being a web developer requires a wide array of skills these are my most refined.
          </p>
        </div>
        <div className="flex flex-wrap xl:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {skills.map((skill) => (
            <div key={skill} className="p-2 w-full m-1 custom-50-wrapper border-4 bg-white border-white rounded">
              <div className="bg-white  flex p-4 h-full items-center">
                <BadgeCheckIcon className="text-orange-500 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-black">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}