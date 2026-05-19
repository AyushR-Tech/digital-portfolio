import { useEffect, useState } from "react";

const STORAGE_KEY = "portfolio-theme";

export default function useTheme() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    setTheme(saved === "light" ? "light" : "dark");
  }, []);

  useEffect(() => {
    const body = document.body;
    if (theme === "light") {
      body.classList.add("light");
    } else {
      body.classList.remove("light");
    }
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = () => setTheme((curr) => (curr === "dark" ? "light" : "dark"));

  return { theme, toggleTheme };
}
