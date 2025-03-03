import React, { useState, useEffect } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import useIntersectionObserver from "./useIntersectionObserver";
import UIUC from "../../public/UIUC Logo.jpg";
import Quant from "../../public/quantlogo.jpeg";
import Geni from "../../public/Geni Zone Dark Logo.svg";
import Image from "next/image";

const Experience: React.FC = () => {
  const [isIntersecting, gridRef] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div ref={gridRef} className="sm:scale-80">
      <VerticalTimeline
        animate={false}
        className="vertical-timeline--red"
        layout="2-columns"
        lineColor="gray"
      >
        <VerticalTimelineElement
          className=""
          contentStyle={{ background: "rgb(200, 200, 200, 1)" }}
          contentArrowStyle={{
            borderRight: "7px solid rgb(200, 200, 200, 1)",
          }}
          icon={
            <Image
              src={Quant}
              alt=""
              className="rounded-full bg-white scale-110" 
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
          <h3 className="text-black">Quant at Illinois</h3>
          <h2 className="text-black">Fall 2024 - Present</h2>
          <p className="text-black">
            Low latency programming and developing code in C++
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className=""
          contentStyle={{ background: "rgb(200, 200, 200, 1)" }}
          contentArrowStyle={{
            borderRight: "7px solid rgb(200, 200, 200, 1)",
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
              ? "fadeIn 1s ease-in-out forwards 0.5s"
              : "none",
          }}
        >
          <h3 className="text-black">Geni</h3>
          <h2 className="text-black">Summer 2024</h2>
          <p className="text-black">
            Developing educational software to personalize education for all
            students
          </p>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(200, 200, 200, 1)" }}
          contentArrowStyle={{
            borderRight: "7px solid rgb(200, 200, 200, 1)",
          }}
          icon={<Image src={UIUC} alt="" className=" rounded-full"></Image>}
          style={{
            gap: "20px", // Adds spacing between children
            opacity: 0,
            transform: "translateY(20px)",
            animation: isIntersecting
              ? "fadeIn 1s ease-in-out forwards 1.0s"
              : "none",
          }}
        >
          <h3 className="vertical-timeline-element-title text-black">
            Undergraduate Teaching Assistant
          </h3>
          <h2 className="text-black">Summer 2024 - Present</h2>
          <p className=" text-black">
            Supporting Computer Science students in C++ fundamentals and Object
            Oriented Programming
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(200, 200, 200, 1)" }}
          contentArrowStyle={{
            borderRight: "7px solid rgb(200, 200, 200, 1)",
          }}
          visible
          icon={<Image src={UIUC} alt="" className=" rounded-full"></Image>}
          style={{
            gap: "20px", // Adds spacing between children
            opacity: 0,
            transform: "translateY(20px)",
            animation: isIntersecting
              ? "fadeIn 1s ease-in-out forwards 1.5s"
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
