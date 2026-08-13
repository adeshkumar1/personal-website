import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import Image, { type StaticImageData } from "next/image";
import useIntersectionObserver from "./useIntersectionObserver";
import Amazon from "../../public/amazon-logo.jpg";
import Datadog from "../../public/datadog-logo.png";
import Geni from "../../public/Geni Zone Dark Logo.svg";
import Quant from "../../public/quantlogo.jpeg";
import Stripe from "../../public/stripe-logo.svg";
import UIUC from "../../public/UIUC Logo.jpg";

type Entry = {
  org: string;
  /** Omitted for the education entry, which has no date range. */
  period?: string;
  detail: string;
  logo: StaticImageData;
  logoClassName: string;
};

/** Newest first — this is the render order down the timeline. */
const entries: Entry[] = [
  {
    org: "Stripe",
    period: "Summer 2026",
    detail: "Authorization Infrastructure",
    logo: Stripe,
    logoClassName: "rounded-full",
  },
  {
    org: "Datadog",
    period: "Winter 2026",
    detail: "APM - Integrations & Data Modeling",
    logo: Datadog,
    logoClassName: "rounded-full bg-white",
  },
  {
    org: "Amazon",
    period: "Summer 2025",
    detail: "Vision Assisted Package Retrieval",
    logo: Amazon,
    logoClassName: "rounded-full bg-white",
  },
  {
    org: "Quant at Illinois",
    period: "Fall 2024 - Present",
    detail: "Member",
    logo: Quant,
    logoClassName: "rounded-full bg-white scale-110",
  },
  {
    org: "Teaching Assistant",
    period: "Summer 2024 - Present",
    detail: "CS 128 - Intro to Computer Science II",
    logo: UIUC,
    logoClassName: "rounded-full",
  },
  {
    org: "Geni",
    period: "Summer 2024",
    detail:
      "Developing educational software to personalize education for all students",
    logo: Geni,
    logoClassName: "rounded-full bg-black p-2",
  },
  {
    org: "UIUC",
    detail:
      "Started studying Computer Science at UIUC. Relevant Courses: Data Structures, Discrete Structures, Prob & Stat, Linear Algebra",
    logo: UIUC,
    logoClassName: "rounded-full",
  },
];

const CONTENT_BACKGROUND = "rgb(200 200 200)";

/*
 * Reveal timing. The stagger used to be 0.5s per card, so with seven entries the
 * last one didn't finish appearing until ~4s after "Learn more" was clicked —
 * long after the scroll itself settled at ~0.7s. That read as the page being
 * slow. These values keep the cascade visible but finish it in ~1.2s.
 */
const REVEAL_DURATION = 0.7;
const STAGGER_STEP = 0.09;

const Experience: React.FC = () => {
  const [isIntersecting, gridRef] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <div ref={gridRef}>
      <VerticalTimeline
        animate={false}
        className="vertical-timeline--red"
        layout="2-columns"
        lineColor="gray"
      >
        {entries.map((entry, index) => (
          <VerticalTimelineElement
            key={`${entry.org}-${entry.period ?? "education"}`}
            contentStyle={{ background: CONTENT_BACKGROUND }}
            contentArrowStyle={{
              borderRight: `7px solid ${CONTENT_BACKGROUND}`,
            }}
            icon={
              <Image src={entry.logo} alt="" className={entry.logoClassName} />
            }
            style={{
              gap: "20px",
              opacity: 0,
              transform: "translateY(20px)",
              animation: isIntersecting
                ? `fadeIn ${REVEAL_DURATION}s ease-in-out forwards ${
                    index * STAGGER_STEP
                  }s`
                : "none",
            }}
          >
            {/* The card sits on a fixed light background in both themes, so the
                text stays black rather than following the color scheme.
                The period stays an <h2> because the timeline stylesheet sizes
                it at 1.25rem via `.vertical-timeline-element-content h2`, which
                out-specifies a utility class. */}
            <h3 className="text-black">{entry.org}</h3>
            {entry.period ? <h2 className="text-black">{entry.period}</h2> : null}
            <p className="text-black">{entry.detail}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
