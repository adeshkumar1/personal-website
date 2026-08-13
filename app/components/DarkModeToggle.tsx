"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

/**
 * Sun / moon theme toggle.
 *
 * Which icon shows is driven by the `dark` class through Tailwind variants, not
 * React state, so the first paint is correct and there's nothing to
 * hydrate-mismatch. The button carries the positioning and an explicit 30x30
 * box: the two icons are overlaid inside it, so there is a real hit area to
 * click and focus. (Previously the icons were positioned individually and the
 * click handler sat on each <svg>, leaving no focusable control.)
 */
const DarkModeToggle = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = resolvedTheme === "dark";
  // Before mount the resolved theme is unknown, so stay neutral rather than
  // announcing the wrong direction.
  const label = mounted
    ? `Switch to ${isDark ? "light" : "dark"} mode`
    : "Toggle color theme";

  return (
    <button
      type="button"
      id="DarkModeToggle"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={label}
      title={label}
      className="absolute -left-8 h-[30px] w-[30px]"
    >
      <svg
        width="30"
        height="30"
        id="light-icon"
        aria-hidden="true"
        className="scale-0 dark:scale-100 transition-transform absolute inset-0"
      >
        <circle cx="15" cy="15" r="6" fill="currentColor" />

        <line
          id="ray"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          x1="15"
          y1="1"
          x2="15"
          y2="4"
        ></line>

        <use href="#ray" transform="rotate(45 15 15)" />
        <use href="#ray" transform="rotate(90 15 15)" />
        <use href="#ray" transform="rotate(135 15 15)" />
        <use href="#ray" transform="rotate(180 15 15)" />
        <use href="#ray" transform="rotate(225 15 15)" />
        <use href="#ray" transform="rotate(270 15 15)" />
        <use href="#ray" transform="rotate(315 15 15)" />
      </svg>

      <svg
        width="30"
        height="30"
        id="dark-icon"
        aria-hidden="true"
        className="scale-100 dark:scale-0 transition-all absolute inset-0"
      >
        <path
          fill="black"
          d="
          M 23, 5
          A 12 12 0 1 0 23, 25
          A 12 12 0 0 1 23, 5"
        />
      </svg>
    </button>
  );
};

export default DarkModeToggle;
