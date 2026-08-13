"use client";
import Navigation from "./components/Navigation";
import FooterSocial from "./components/Footer/FooterSocial";
import Part from "./components/Particles";
import { TextGenerateEffect } from "./components/text";
import Projects from "./components/Projects";
import Experience from "./components/experience";

/** Offset so the scrolled-to heading clears the fixed navigation bar. */
const SCROLL_OFFSET = 100;

export default function Home() {
  const handleLearnMore = () => {
    const element = document.getElementById("actual_exp");
    if (!element) return;

    const top =
      element.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="overflow-hidden min-h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col justify-start items-center">
      <div className="absolute top-0 z-40 w-screen">
        <Navigation />
      </div>
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black dark:[mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)] text-white [mask-image:radial-gradient(ellipse_at_center,transparent_2%,rgba(10,10,50,0.5))]">
        <Part />
      </div>
      <div id="MainText">
        <TextGenerateEffect
          words="Hi I'm Adesh Kumar, a Junior studying Computer Science @ UIUC"
          className="text-center p-4 md:mt-[40vh] mt-[30vh]"
        />
      </div>
      <div
        id="aboutme"
        className="dark:text-white text-black lg:w-[60%] md:w-[50%] w-[80%] text-center"
      ></div>
      <button
        type="button"
        id="learnmore"
        className="dark:text-white text-black font-bold text-xl mt-10 hover:cursor-pointer rounded-full border-2 dark:border-white border-black p-4 text-center transition-all duration-300 hover:scale-105 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black"
        onClick={handleLearnMore}
      >
        Learn more ↓
      </button>

      <div
        id="experience"
        className="dark:text-white text-black mt-[60vh] text-2xl font-bold flex flex-col items-center -space-y-8"
      >
        <h2 id="actual_exp" className="mb-40 sm:mb-20">
          Experiences.
        </h2>
        <Experience />
      </div>

      <div
        id="projects"
        className="dark:text-white text-black my-[30vh] text-2xl font-bold flex flex-col items-center -space-y-8"
      >
        <h2>Projects.</h2>
        <Projects />
      </div>

      <div className="bottom-0 w-screen">
        <FooterSocial />
      </div>
    </div>
  );
}
