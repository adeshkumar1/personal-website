import Card from "./card";
import useIntersectionObserver from "./useIntersectionObserver";
import httpserver from "../../public/http-server.png";
import nchsbusapp from "../../public/nchsbusapp.png";
import physics from "../../public/physics.png";
import skinmatch from "../../public/skinmatch.png";
import type { StaticImageData } from "next/image";

export type Project = {
  /** Text shown on the card. */
  label: string;
  href: string;
  image: StaticImageData;
};

const GITHUB_USER = "adeshkumar1";
const repo = (name: string) => `https://github.com/${GITHUB_USER}/${name}`;

export const projects: Project[] = [
  { label: "skinmatch", href: repo("skinmatch"), image: skinmatch },
  {
    label: "Bus App",
    href: "https://github.com/NCHS-SE22-23/busApp",
    image: nchsbusapp,
  },
  { label: "physics engine", href: repo("physics"), image: physics },
  { label: "http-server", href: repo("http-server"), image: httpserver },
];

/* Reveal timing — see the note in experience.tsx. A 0.75s step across four
   cards took over 3s to finish; this lands in ~1.1s. */
const REVEAL_DURATION = 0.7;
const STAGGER_STEP = 0.12;

export default function Projects() {
  const [isIntersecting, gridRef] = useIntersectionObserver({ threshold: 0.1 });

  return (
    // No id here: the wrapping section in page.tsx already owns id="projects",
    // and duplicating it made the document invalid.
    <div ref={gridRef} className="mt-40 w-full">
      <div className="flex justify-center space-x-[4vw] flex-wrap">
        {projects.map((project, index) => (
          <div
            key={project.label}
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
            <Card project={project} />
          </div>
        ))}
      </div>
    </div>
  );
}
