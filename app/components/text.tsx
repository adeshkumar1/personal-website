"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate } from "framer-motion";
import { cn } from "@/utils/cn";

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  // Split on any run of whitespace: a plain split(" ") on a string containing a
  // newline or repeated spaces yields empty entries, which rendered as empty
  // spans.
  const wordsArray = words.split(/\s+/).filter(Boolean);

  useEffect(() => {
    animate(
      "span",
      {
        opacity: 1,
      },
      {
        duration: 2,
        delay: stagger(0.156),
      },
    );
  }, [animate]);

  return (
    <div className={cn("font-bold", className)}>
      <div className="mt-4">
        {/* The page's only h1. Preflight resets heading sizes, so the utility
            classes below fully determine how this renders. */}
        <h1 className="dark:text-white text-black text-2xl leading-snug tracking-wide flex flex-wrap ">
          {/* A span rather than a div so the h1 only contains phrasing content.
              As a flex item it is blockified, so it lays out identically. */}
          <motion.span ref={scope}>
            {wordsArray.map((word, idx) => (
              <motion.span
                key={word + idx}
                className={"dark:text-white text-black opacity-0"}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.span>
        </h1>
      </div>
    </div>
  );
};
