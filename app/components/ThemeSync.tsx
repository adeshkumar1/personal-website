"use client";

import { useMantineColorScheme } from "@mantine/core";
import { useTheme } from "next-themes";
import { useEffect } from "react";

/**
 * Keeps Mantine's color scheme in step with next-themes.
 *
 * Mantine components (the footer icon buttons) read their own scheme rather than
 * the `dark` class, so without this they stay locked to dark while the rest of
 * the page switches to light.
 */
export function ThemeSync() {
  const { resolvedTheme } = useTheme();
  const { setColorScheme } = useMantineColorScheme();

  useEffect(() => {
    if (resolvedTheme === "light" || resolvedTheme === "dark") {
      setColorScheme(resolvedTheme);
    }
  }, [resolvedTheme, setColorScheme]);

  return null;
}
