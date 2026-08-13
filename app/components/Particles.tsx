"use client";

import { useEffect, useMemo, useState } from "react";
import { useTheme } from "next-themes";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // Import the slim version of tsparticles

/**
 * Animated constellation background.
 *
 * The particle color is derived from the active theme and baked straight into
 * the options. This replaces a `themes: [...]` config that was switched by
 * `loadTheme()` from click listeners bound to the toggle's #light-icon /
 * #dark-icon elements — that never actually applied (the engine kept reporting
 * the base options), so the dots stayed white in light mode and were invisible
 * against the white background.
 */
const Part = () => {
  const [ready, setReady] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);
  const { resolvedTheme } = useTheme();
  const isLight = resolvedTheme === "light";

  // Runs once per application lifetime.
  useEffect(() => {
    let cancelled = false;

    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => {
      if (!cancelled) setReady(true);
    });

    return () => {
      cancelled = true;
    };
  }, []);

  // Skip the animation entirely for visitors who asked for reduced motion.
  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(query.matches);

    const onChange = (event: MediaQueryListEvent) =>
      setReduceMotion(event.matches);
    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  const options: ISourceOptions = useMemo(() => {
    const color = isLight ? "#000000" : "#ffffff";

    return {
      /*
       * Performance budget for a decorative background. This canvas is
       * full-viewport and fixed, sitting under a mask-image, so every frame
       * costs a full-surface repaint plus a re-blend of the mask.
       *
       * 60fps rather than 120: halves that work, and the dots drift slowly
       * enough that the difference isn't perceptible.
       */
      fpsLimit: 60,
      /*
       * detectRetina: false keeps the backing store at CSS pixels. With it on,
       * a 1512x950 viewport at DPR 2 allocated 3024x1900 — 5.7M pixels cleared
       * and redrawn every frame, a 4x cost for slightly crisper 1-5px dots.
       */
      detectRetina: false,
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
          value: color,
        },
        links: {
          color,
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
    };
  }, [isLight]);

  if (!ready || reduceMotion) return null;

  // Keyed on the theme so the engine re-initialises with the new colors.
  // Theme changes are rare and user-initiated, so remounting is cheap.
  return (
    <Particles
      id="tsparticles"
      key={isLight ? "light" : "dark"}
      options={options}
    />
  );
};

export default Part;
