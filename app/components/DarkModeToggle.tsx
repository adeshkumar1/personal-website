// components/DarkModeToggle.tsx
import { useEffect, useState } from "react";

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const classList = document.documentElement.classList;
    isDarkMode ? classList.add("dark") : classList.remove("dark");
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    localStorage.setItem("theme", isDarkMode ? "dark" : "light");
  };

  return (
    <button onClick={toggleDarkMode} className="p-2">
      {isDarkMode ? (
        <svg width="30" height="30" id="light-icon">
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
      ) : (
        <svg width="30" height="30" id="dark-icon">
          <path
            fill="black"
            d="
          M 23, 5
          A 12 12 0 1 0 23, 25
          A 12 12 0 0 1 23, 5"
          />
        </svg>
      )}
    </button>
  );
};

export default DarkModeToggle;
