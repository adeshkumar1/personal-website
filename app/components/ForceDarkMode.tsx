"use client";
import { useEffect } from "react";

const ForceDarkMode = () => {
  useEffect(() => {
    document.documentElement.classList.add("dark");
  }, []);

  return null; // This component doesn't need to render anything
};

export default ForceDarkMode;
