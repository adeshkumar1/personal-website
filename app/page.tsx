"use client";
import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import FooterSocial from "./components/Footer/FooterSocial";
import Part from "./components/Particles";
import { TextGenerateEffect } from "./components/text";
import React from "../public/React logo.png";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

export default function Home() {
  const scrollDown = () => {
    window.scrollBy({ top: 600, behavior: "smooth" });
  };

  return (
    <>
      <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col justify-start items-center">
        <div className="absolute top-0 z-40 w-screen">
          <Navigation />
        </div>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black dark:[mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)] text-white [mask-image:radial-gradient(ellipse_at_center,transparent_2%,rgba(10,10,50,0.5))]">
          <Part />
        </div>
        <div id="MainText">
          <TextGenerateEffect
            words="Hi I'm Adesh Kumar, a Junior studying Computer
              Science @ UIUC"
            className="text-center p-4 md:mt-[40vh] mt-[30vh]"
          />
        </div>
        <div
          id="aboutme"
          className="dark:text-white text-black lg:w-[60%] md:w-[50%] w-[80%] text-center"
        >
          I have extensive experience in full-stack development and a strong
          passion for software engineering. I love problem-solving and I am
          dedicated to delivering robust solutions to engaging problems.{" "}
        </div>
        <div
          id="learnmore"
          className="dark:text-white text-black font-bold text-xl mt-10 hover:cursor-pointer"
          onClick={scrollDown}
        >
          Learn more ↓
        </div>

        <div
          className="dark:text-white text-black mt-[60vh] text-2xl font-bold flex flex-col items-center"
          id="skills"
        >
          <div className="-mb-8">Skills.</div>

          <Skills />
        </div>
        <div
          id="projects"
          className="dark:text-white text-black mt-40 text-2xl font-bold flex flex-col items-center -space-y-8"
        >
          <div>Projects.</div>
          <Projects />
        </div>

        <div className=" bottom-0 w-screen">
          <FooterSocial />
        </div>
      </div>
    </>
  );
}
