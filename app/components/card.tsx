"use client";

import { IconBrandGithub } from "@tabler/icons-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CardBody, CardContainer, CardItem } from "./3d-card";
import type { Project } from "./Projects";

/**
 * Project tile with the tilt-on-hover effect.
 *
 * The image and link used to be resolved here from the project's name via
 * nested ternaries — including a `project !== "Physics"` branch that never ran,
 * because the name was lowercase, so the intended "physics engine" label was
 * dead code. Both now come straight from the project record.
 */
const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl  dark:bg-black dark:border-white/[0.2] border-black/[0.1] rounded-xl p-6 border w-[300px] h-[300px] flex flex-col justify-between">
        <CardItem
          translateZ="50"
          className="text-xl font-bold text-neutral-600 dark:text-white"
        >
          {project.label}
        </CardItem>
        <CardItem>
          <Image
            src={project.image}
            alt={`${project.label} screenshot`}
            width={300}
            height={300}
          />
        </CardItem>
        <CardItem
          translateZ={20}
          as={Link}
          target="_blank"
          rel="noreferrer noopener"
          href={project.href}
          className="px-4 py-2 rounded-xl bg-black dark:bg-white dark:text-black text-white text-xs font-bold"
        >
          <div className="flex justify-center">
            <IconBrandGithub style={{ width: 18, height: 18 }} stroke={1.5} />
            &nbsp;
            <div>link</div>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default ProjectCard;
