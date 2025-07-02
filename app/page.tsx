"use client";


import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Resume from "./components/Resume/Resume";
import Exhibitions from "./components/Exhibitions/Exhibitions";
import "./globals.css"
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";

export default function LandingPage() {
  return (
    <>
   <Hero />
   <About />
   <Resume />
   <Exhibitions />
   <Portfolio />
   <Contact />
   </>  
  );
}
