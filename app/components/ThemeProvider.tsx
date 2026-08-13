"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import type { ReactNode } from "react";

/**
 * Owns the `dark` class on <html>, which every `dark:` variant and the
 * particles background key off. Replaces the old ForceDarkMode component, which
 * re-added `dark` on every mount and so silently undid the toggle.
 *
 * System preference is intentionally not used: the design is built around the
 * dark palette, so dark stays the default until the visitor chooses otherwise.
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem={false}
      disableTransitionOnChange
    >
      {children}
    </NextThemesProvider>
  );
}
