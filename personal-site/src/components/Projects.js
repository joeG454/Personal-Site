import { CodeIcon } from "@heroicons/react/solid";
import React from "react";
import { projects } from "../data";

export default function Projects() {
  return (
    <section id="projects" className="text-neutral-800 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4 " />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-black">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Focusing on React.js, Next.js, and other web frameworks I prefer to use my personal projects as opportunites for growth as well as entertainment.</p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="flex relative border-4 bg-white border-white rounded border-hidden">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="relative w-full">
                    <div className="opacity-0 hover:opacity-100 bg-white px-8 py-10 project-overlay">
                        <h2 className="tracking-widest text-sm title-font font-medium text-orange-500 mb-1">
                        {project.subtitle}
                        </h2>
                        <h1 className="title-font text-lg font-medium text-black mb-3">
                        {project.title}
                        </h1>
                        <p className="leading-relaxed">{project.description}</p>
                    </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}