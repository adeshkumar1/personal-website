"use client";
import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import FooterSocial from "./components/Footer/FooterSocial";
import Part from "./components/Particles";
import { TextGenerateEffect } from "./components/text";

export default function Home() {

  return (
    <>
      <div className="min-h-screen w-full dark:bg-black bg-white dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex flex-col items-center justify-center">
        <div className="absolute top-0 z-40 w-screen">
          <Navigation />
        </div>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black  dark:[mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)] text-white [mask-image:radial-gradient(ellipse_at_center,transparent_0%,rgba(10,100,10,0.5))]">
          <Part />
        </div>
        <div className="flex flex-col justify-center space-y-96 py-16">
          <TextGenerateEffect
            words="Hi My Name is Adesh Kumar, I'm currently studying Computer
              Science @ UIUC"
            className="text-white text-2xl antialiased"
          />
        </div>
        <div className="fixed bottom-0 w-full z-10">
          <FooterSocial />
        </div>
      </div>
    </>
  );
}
