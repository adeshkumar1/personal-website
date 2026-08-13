import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";
import { ThemeProvider } from "./components/ThemeProvider";
import { ThemeSync } from "./components/ThemeSync";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adesh Kumar",
  description: "Computer Science @ UIUC — portfolio, experience, and projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    // suppressHydrationWarning: next-themes and Mantine both set attributes on
    // <html> before paint, so the server markup differs by design.
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider>
          <MantineProvider defaultColorScheme="dark">
            <ThemeSync />
            {children}
          </MantineProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
