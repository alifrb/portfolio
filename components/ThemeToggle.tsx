// components/ThemeToggle.tsx
"use client";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    setMounted(true);
    try {
      const ls = localStorage.getItem("theme");
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      const initial = (ls || (mq.matches ? "dark" : "light")) as "light" | "dark";
      setTheme(initial);
    } catch {}
  }, []);

  if (!mounted) return null;

  const toggle = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    document.documentElement.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggle}
      aria-label="Toggle theme"
      className="rounded-xl border border-black/10 bg-white/70 px-3 py-1.5 text-sm shadow-sm backdrop-blur transition hover:border-black/20 dark:border-white/10 dark:bg-white/10 hover:dark:border-white/20"
    >
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  );
}
