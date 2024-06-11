"use client";

import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
   type Container,
   type ISourceOptions,
   MoveDirection,
   OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // Import the slim version of tsparticles

const Part = () => {
   const [init, setInit] = useState(false);

   // Run only once per application lifetime
   useEffect(() => {
      initParticlesEngine(async (engine) => {
         // Initialize the tsParticles instance (engine), adding custom shapes or presets
         await loadSlim(engine); // Load the slim version of the particles engine
      }).then(() => {
         setInit(true);
      });
   }, []);

   const particlesLoaded = async (container?: Container): Promise<void> => {
      console.log("rednered");
   };

   const options: ISourceOptions = useMemo(
      () => ({
         fullScreen: {
            enable: true,
            zIndex: -1, // Set the zIndex to a lower value
         },
         background: {
            color: {
               z: -1,
               value: "#36454F",
               opacity: 0.5,
            },
         },
         fpsLimit: 240,
         interactivity: {
            events: {
               onClick: {
                  enable: true,
                  mode: "push",
               },
               onHover: {
                  enable: true,
                  mode: "repulse",
               },
            },
            modes: {
               push: {
                  quantity: 4,
               },
               repulse: {
                  distance: 200,
                  duration: 0.4,
               },
            },
         },
         particles: {
            color: {
               value: "#ffffff",
            },
            links: {
               color: "#ffffff",
               distance: 150,
               enable: true,
               opacity: 0.5,
               width: 1,
            },
            move: {
               direction: MoveDirection.none,
               enable: true,
               outModes: {
                  default: OutMode.out,
               },
               random: false,
               speed: 6,
               straight: false,
            },
            number: {
               density: {
                  enable: true,
               },
               value: 80,
            },
            opacity: {
               value: 0.5,
            },
            shape: {
               type: "circle",
            },
            size: {
               value: { min: 1, max: 5 },
            },
         },
         detectRetina: true,
      }),
      []
   );

   if (init) {
      return (
         <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded}
            options={options}
         />
      );
   }

   return <></>;
};

export default Part;
