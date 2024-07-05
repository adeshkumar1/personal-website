"use client";
import { useEffect, useState } from "react";
import Navigation from "./components/Navigation";
import FooterSocial from "./components/Footer/FooterSocial";
import Part from "./components/Particles";
import { TextGenerateEffect } from "./components/text";
import Card from "./components/card";
import Cpp from "../public/C++ Logo.svg.png";
import Python from "../public/Python logo.png";
import TypeScript from "../public/Typescript logo 2020.svg.png";
import TailWind from "../public/Tailwind CSS Logo.png";
import Git from "../public/Git logo.png";
import React from "../public/React logo.png";
import MongoDB from "../public/MongoDB Logo.png";
import Java from "../public/Java Logo 1511x2048.png";
import NodeJS from "../public/Node.js logo.svg";
import Docker from "../public/Docker Logo 2013.png";
import HT_ML from "../public/HTML5 logo wordmark.png";
import Image from "next/image";

export default function Home() {
  useEffect(() => {
    const classList = document.documentElement.classList;
    classList.add("dark");
  }, []);
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
        <div className="dark:text-white text-black font-bold text-xl mt-10">
          Learn more ↓
        </div>

        <div className="dark:text-white text-black mt-[60vh] text-2xl font-bold flex flex-col items-center">
          <div className="-mb-8">Skills.</div>

          <div className="mt-12 grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 justify-items-center w-[70vw]">
            <div className="m-4 h-16 w-20 rounded-3xl bg-gray-900 flex justify-center items-center border dark:border-white border-black hover:scale-110 transition-all">
              <Image src={Cpp} alt="" className=" p-[12px] w-16 "></Image>
            </div>
            <div className="m-4 h-16 w-20 rounded-full bg-gray-900 flex justify-center items-center border dark:border-white border-black hover:scale-110 transition-all">
              <Image src={Python} alt="" className="p-[12px] w-16 "></Image>
            </div>
            <div className="m-4 h-16 w-20 rounded-full bg-gray-900 flex justify-center items-center border dark:border-white border-black hover:scale-110 transition-all">
              <Image src={React} alt="" className="p-[12px] w-16 "></Image>
            </div>
            <div className="m-4 h-16 w-20 rounded-full bg-gray-900 flex justify-center items-center border dark:border-white border-black hover:scale-110 transition-all">
              <Image src={TypeScript} alt="" className="p-[12px] w-16 "></Image>
            </div>
            <div className="m-4 h-16 w-20 rounded-full bg-gray-900 flex justify-center items-center border dark:border-white border-black hover:scale-110 transition-all">
              <Image src={Git} alt="" className="p-[12px] w-16 "></Image>
            </div>
            <div className="m-4 h-16 w-20 rounded-full bg-gray-900 flex justify-center items-center border dark:border-white border-black hover:scale-110 transition-all">
              <Image src={Java} alt="" className="p-[12px] w-16 "></Image>
            </div>
            <div className="m-4 h-16 w-20 rounded-full bg-gray-900 flex justify-center items-center border dark:border-white border-black hover:scale-110 transition-all">
              <Image src={NodeJS} alt="" className="p-[12px] w-16 "></Image>
            </div>
            <div className="m-4 h-16 w-20 rounded-full bg-gray-900 flex justify-center items-center border dark:border-white border-black hover:scale-110 transition-all">
              <Image src={TailWind} alt="" className="p-[12px] w-16 "></Image>
            </div>
            <div className="m-4 h-16 w-20 rounded-full bg-gray-900 flex justify-center items-center border dark:border-white border-black hover:scale-110 transition-all">
              <Image src={Docker} alt="" className="p-[12px] w-16 "></Image>
            </div>
            <div className="m-4 h-16 w-20 rounded-full bg-gray-900 flex justify-center items-center border dark:border-white border-black hover:scale-110 transition-all">
              <Image src={HT_ML} alt="" className="p-[12px] w-16 "></Image>
            </div>
          </div>
        </div>
        <div className="text-2xl font-bold dark:text-white text-black -mb-24 mt-40">
          Projects.
        </div>
        <div className="mt-14 grid justify-center space-x-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          <Card project="skinmatch" />
          <Card project="NCHS Bus App" />
          <Card project="Physics" />
        </div>

        <div className=" bottom-0 w-screen">
          <FooterSocial />
        </div>
      </div>
    </>
  );
}
