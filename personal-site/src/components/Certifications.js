// src/components/About.js

import { AcademicCapIcon } from "@heroicons/react/solid";
import React from "react";
import { certs } from "../data";

export default function Certifications() {
  return (
    <section id="certifications">
      <div className="container px-5 py-10 mx-auto">
        <div className="text-center mb-20">
          <AcademicCapIcon className="w-10 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-4">
            Certifications &amp; Education
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
          </p>
        </div>
        <div className="lg:w-1/2 w-full sm:mx-auto sm:mb-2">
        {certs.map((cert) => (
            <div className="cert-wrapper flex flex-wrap border-4 bg-white border-white rounded mb-3 mx-auto justify-center">
                <div className="cert-icon sm:basis-1/3 self-center py-3">
                    <img
                        alt="Certification"
                        src={cert.image}
                        className="w-30 flex-shrink-0 object-cover object-center"
                    />
                </div>
                <div className="cert-text sm:basis-2/3 py-3 px-5">
                    <p className="text-xl font-bold text-black">{cert.title}</p>
                    <p className="font-light">{cert.issuer}</p>
                    <p><span className="">Issued:</span> {cert.date}</p>
                    <p>{cert.id}</p>
                </div>
            </div>
        ))}
        </div>
      </div>
    </section>
  );
}