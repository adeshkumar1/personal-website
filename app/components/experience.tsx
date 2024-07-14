import React, { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import useIntersectionObserver from "./useIntersectionObserver";
import UIUC from "../../public/UIUC Logo.jpg";
import Geni from "../../public/Geni Zone Dark Logo.svg";
import Image from "next/image";

const Experience: React.FC = () => {
  const [isIntersecting, gridRef] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div ref={gridRef} className="md:scale-90 lg:scale-90 scale-[85%]">
      <VerticalTimeline
        animate={false}
        className="vertical-timeline--red"
        layout="2-columns"
        lineColor="gray"
      >
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(200, 200, 200, 1)" }}
          contentArrowStyle={{
            borderRight: "7px solid rgb(255, 255, 255, 1)",
          }}
          icon={
            <Image
              src={Geni}
              alt=""
              className="rounded-full p-2 bg-black"
            ></Image>
          }
          style={{
            gap: "20px", // Adds spacing between children
            opacity: 0,
            transform: "translateY(20px)",
            animation: isIntersecting
              ? "fadeIn 1s ease-in-out forwards"
              : "none",
          }}
        >
          <h3 className="vertical-timeline-element-title text-black">Geni</h3>
          <p className="text-black">
            Working at an education startup to integrate with google classroom
            and put generative AI tools in the hands of teachers and students
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(200, 200, 200, 1)" }}
          contentArrowStyle={{
            borderRight: "7px solid rgb(255, 255, 255, 1)",
          }}
          icon={
            <Image
              src={UIUC}
              alt=""
              className=" rounded-full :bg-black bg-white"
            ></Image>
          }
          style={{
            gap: "20px", // Adds spacing between children
            opacity: 0,
            transform: "translateY(20px)",
            animation: isIntersecting
              ? "fadeIn 1s ease-in-out forwards 0.5s"
              : "none",
          }}
        >
          <h3 className="vertical-timeline-element-title text-black">
            Course Assistant
          </h3>
          <p className=" text-black">
            Supporting Computer Science students in C++ fundamentals and Object
            Oriented Programming
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(200, 200, 200, 1)" }}
          contentArrowStyle={{
            borderRight: "7px solid rgb(255, 255, 255, 1)",
          }}
          visible
          icon={<Image src={UIUC} alt="" className=" rounded-full"></Image>}
          style={{
            gap: "20px", // Adds spacing between children
            opacity: 0,
            transform: "translateY(20px)",
            animation: isIntersecting
              ? "fadeIn 1s ease-in-out forwards 1s"
              : "none",
          }}
        >
          <h3 className="vertical-timeline-element-title text-black">UIUC</h3>
          <p className="text-black">
            Started studying Computer Science at UIUC. Relevant Courses: Data
            Structures, Discrete Structures, Prob &amp; Stat, Linear Algebra
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
