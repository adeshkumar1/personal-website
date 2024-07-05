"use client";

import physics from "../../public/physics.png";
import skinmatch from "../../public/skinmatch.png";
import nchsbusap from "../../public/nchsbusapp.png";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import Link from "next/link";

const ThreeDCardDemo = ({ project }: { project: string }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-[300px] h-[300px] flex flex-col justify-between">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {project}
        </CardItem>
        <CardItem>
          <Image
            src={
              project === "skinmatch"
                ? skinmatch
                : project === "NCHS Bus App"
                  ? nchsbusap
                  : physics
            }
            alt=""
            width={300}
            height={300}
          ></Image>
        </CardItem>
        <CardItem
          translateZ={20}
          as={Link}
          target="_blank"
          href={
            project !== "NCHS Bus App"
              ? `https://github.com/adeshkumar1/${project}`
              : "https://github.com/NCHS-SE22-23/busApp"
          }
          className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
        >
          {project}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default ThreeDCardDemo;
