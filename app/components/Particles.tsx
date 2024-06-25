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

let themeableContainer: Container | undefined;

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

    document.getElementById("light-icon")!.addEventListener("click", (e) => {
      themeableContainer!.loadTheme("light");
    });
    document.getElementById("dark-icon")!.addEventListener("click", (e) => {
      themeableContainer!.loadTheme("dark");
    });
  }, []);

  const particlesLoaded = async (container?: Container): Promise<void> => {
    themeableContainer = container;
    themeableContainer!.canvas.initBackground();
    console.log(themeableContainer!.actualOptions);
  };

  const options: ISourceOptions = useMemo(
    () => ({
      themes: [
        {
          name: "dark",
          default: {
            value: true,
            mode: "dark",
          },
          options: {
            background: {
              color: "#000000",
            },
            particles: {
              color: {
                value: "#ffffff",
              },
              links: {
                color: "#ffffff",
                distance: 150,
                enable: true,
                opacity: 1,
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
                value: 65,
              },
              opacity: {
                value: 1,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
          },
        },
        {
          name: "light",
          default: {
            value: true,
            mode: "light",
          },
          options: {
            background: {
              color: "#D3D3D3",
            },
            particles: {
              color: {
                value: "#000000",
              },
              links: {
                color: "#000000",
                distance: 150,
                enable: true,
                opacity: 1,
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
                value: 65,
              },
              opacity: {
                value: 1,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
          },
        },
      ],
      fpsLimit: 240,
      interactivity: {
        events: {
          onClick: {
            enable: false,
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
          value: 40,
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
    [],
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
