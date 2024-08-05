import Cpp from "../../public/C++ Logo.svg.png";
import Python from "../../public/Python logo.png";
import TypeScript from "../../public/Typescript logo 2020.svg.png";
import TailWind from "../../public/Tailwind CSS Logo.png";
import Git from "../../public/Git logo.png";
import ReactLogo from "../../public/React logo.png";
import MongoDB from "../../public/MongoDB Logo.png";
import Java from "../../public/Java Logo 1511x2048.png";
import NodeJS from "../../public/Node.js logo.svg";
import Docker from "../../public/Docker Logo 2013.png";
import Image from "next/image";
import "./style.css";
import useIntersectionObserver from "./useIntersectionObserver";

const images = [
   { src: Cpp, alt: "C++" },
   { src: Python, alt: "Python" },
   { src: ReactLogo, alt: "React" },
   { src: TypeScript, alt: "TypeScript" },
   { src: Git, alt: "Git" },
   { src: Java, alt: "Java" },
   { src: NodeJS, alt: "NodeJS" },
   { src: TailWind, alt: "TailWind" },
   { src: Docker, alt: "Docker" },
   { src: MongoDB, alt: "MongoDB" },
];

export default function Skills() {
   const [isIntersecting, gridRef] = useIntersectionObserver({ threshold: 0.1 });

   return (
      <div
         ref={gridRef}
         className="z-40 mt-12 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-2 justify-items-center w-[70vw]"
      >
         {images.map((image, index) => (
            <div
               key={index}
               className="m-4 h-16 w-20 rounded-3xl bg-white/5 flex justify-center items-center border-2 dark:border-white border-black"
               style={{
                  opacity: 0,
                  transform: "translateY(20px)",
                  animation: isIntersecting
                     ? `fadeIn 1s ease-in-out forwards ${index * 0.2}s`
                     : "none",
               }}
            >
               <Image src={image.src} alt={image.alt} className="p-[12px] w-16" />
            </div>
         ))}
      </div>
   );
}
