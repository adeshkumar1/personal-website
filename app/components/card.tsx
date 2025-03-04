"use client";

import { IconBrandGithub } from "@tabler/icons-react";

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
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl  dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-[300px] h-[300px] flex flex-col justify-between">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {project !== "Physics" ? project : project + " engine"}
        </CardItem>
        <CardItem>
          <Image
            src={
              project === "skinmatch"
                ? skinmatch
                : project === "Bus App"
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
            project !== "Bus App"
              ? `https://github.com/adeshkumar1/${project}`
              : "https://github.com/NCHS-SE22-23/busApp"
          }
          className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
        >
          <div className="flex justify-center">
            <IconBrandGithub style={{ width: 18, height: 18 }} stroke={1.5} />
            &nbsp;
            <div className="">link</div>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default ThreeDCardDemo;
