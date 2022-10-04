// src/components/Testimonials

import React from "react";
import { PlusIcon, UsersIcon, MinusIcon } from "@heroicons/react/solid";
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
                        <div className="p-4 skill-wrapper w-full border-4 border-gray-800 m-1">
                            <div className="h-full bg-white bg-opacity-40 p-8 ">
                                <p className="leading-relaxed mb-6 testimonial">{testimonial.quote}
                                    <span className="dots font-medium">...</span>
                                    <span className="hidden hidden-text">{testimonial.extra}</span>
                                </p>
                                <div class="flex">
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
                                    <div class="collapsible-icon">
                                        <div class="plus">
                                            <PlusIcon className="block w-8 text-neutral-900 mb-4" />
                                        </div>
                                        <div class="minus hidden">
                                            <MinusIcon className="block w-8 text-neutral-900 mb-4" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}