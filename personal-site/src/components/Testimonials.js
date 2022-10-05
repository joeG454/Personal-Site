// src/components/Testimonials

import React from "react";
import { TerminalIcon, UsersIcon } from "@heroicons/react/solid";
import { testimonials } from "../data";

export default function Testimonials() {
    return (
        <section id="testimonials">
            <div className="container px-5 py-10 mx-auto text-center">
                <UsersIcon className="w-10 inline-block mb-4" />
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-black mb-12">
                    Testimonials
                </h1>
                <div className="flex flex-wrap m-4">
                    {testimonials.map((testimonial) => (
                        <div className="custom-50-wrapper w-full m-1 testimonial-wrapper">
                            <div className="h-full bg-white border-gray-800 rounded p-8 ">
                                <TerminalIcon className="block w-8 text-neutral-900 mb-4" />
                                <p className="leading-relaxed mb-6 testimonial">{testimonial.quote}
                                    <span className="dots font-medium">...</span>
                                    <span className="hidden hidden-text">{testimonial.extra}</span>
                                    <span className="testimonial-readmore font-semibold">Read more</span>
                                </p>
                                <div className="inline-flex items-center">
                                    <img
                                    alt="testimonial"
                                    src={testimonial.image}
                                    className="w-12 -full flex-shrink-0 object-cover object-center"
                                    />
                                    <span className="flex-grow flex flex-col pl-4">
                                    <span className="title-font font-medium text-black">
                                        {testimonial.name}
                                    </span>
                                    <span className="text-neutral-900 text-sm uppercase">
                                        {testimonial.company}
                                    </span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}