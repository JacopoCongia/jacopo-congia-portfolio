// A hook to change the toggle the dark/light theme manually

import { useState, useEffect } from "react";

export function useTheme() {
  // Initialize state based on localStorage OR system preference
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("app-theme");
    if (savedTheme) {
      return savedTheme;
    }
    // Check system preference if no saved theme exists
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    return prefersDark ? "dark" : "light";
  });

  // Update the HTML tag and local storage whenever the theme changes
  useEffect(() => {
    // This targets the <html> tag, matching the :root CSS
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("app-theme", theme);
  }, [theme]);

  // Provide a simple toggle function for the button
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return { theme, toggleTheme };
}
