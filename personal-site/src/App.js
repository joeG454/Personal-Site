import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Certifications from "./components/Certifications";
import Testimonials from "./components/Testimonials";

export default function App() {
  return (
    <main className="text-neutral-800 bg-gradient body-font">
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Certifications />
      <Testimonials />
      <Contact />
    </main>
  );
}