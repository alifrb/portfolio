"use client";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-transparent z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* لوگو */}
        <div
          style={{ color: "#00a63c" }}
          className="text-2xl font-bold text-white mr-5"
        >
          &lt; Ali.dev /&gt;
        </div>

        {/* منوی دسکتاپ */}
        <nav className="hidden md:flex space-x-8 text-[var(--fg)] text-lg">
          <a href="#home" className="header_icons hover:opacity-70 transition">
            Home
          </a>
          <a href="#about" className="header_icons hover:opacity-70 transition">
            About
          </a>
          <a
            href="#portfolio"
            className="header_icons hover:opacity-70 transition"
          >
            Portfolio
          </a>
          <a
            href="#contact"
            className="header_icons hover:opacity-70 transition"
          >
            Contact
          </a>
          <ThemeToggle/>
        </nav>

        {/* منوی موبایل - آیکون همبرگر */}
        <div className="md:hidden">
          <button
            className="text-white text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* منوی موبایل بازشونده */}
      {menuOpen && (
        <div className="md:hidden bg-black/80 backdrop-blur-md absolute top-full left-0 w-full flex flex-col items-center py-6 space-y-6 text-white text-lg">
          <a href="#home" onClick={() => setMenuOpen(false)}>
            Home
          </a>
          <a href="#about" onClick={() => setMenuOpen(false)}>
            About
          </a>
          <a href="#portfolio" onClick={() => setMenuOpen(false)}>
            Portfolio
          </a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>
            Contact
          </a>
          <a
            href="#contact"
            className="px-5 py-2 border border-white/50 rounded-lg hover:bg-white/10 transition"
          >
            Hire Me
          </a>
        </div>
      )}
    </header>
  );
}
