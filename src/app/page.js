"use client";

import React, { useState, useEffect } from "react";
import { Github, Linkedin, Mail, Sun, Moon, ExternalLink } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiBootstrap,
} from "react-icons/si";
import ReactCountryFlag from "react-country-flag";
import Image from "next/image";

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const skills = [
    { name: "React", Icon: SiReact, color: "text-cyan-400" },
    { name: "Next.js", Icon: SiNextdotjs, color: "text-black dark:text-white" },
    { name: "TypeScript", Icon: SiTypescript, color: "text-blue-600" },
    { name: "JavaScript", Icon: SiJavascript, color: "text-yellow-400" },
    { name: "Tailwind CSS", Icon: SiTailwindcss, color: "text-cyan-500" },
    { name: "HTML5", Icon: SiHtml5, color: "text-orange-600" },
    { name: "CSS3", Icon: SiCss3, color: "text-blue-500" },
    { name: "Bootstrap", Icon: SiBootstrap, color: "text-purple-600" },
  ];

  const projects = [
    {
      title: "Job Tracker",
      description:
        "A clean Kanban app to track job applications with drag-and-drop, filters, and persistent storage.",
      image: "/projects/job-tracker-landing.png",
      tech: ["Next.js", "TypeScript", "Tailwind", "dnd-kit"],
      demo: "https://jobtracker-six-zeta.vercel.app/",
      github: "https://github.com/alifrb/jobtracker",
    },
    {
      title: "CoinVista",
      description:
        "A crypto market dashboard with global stats, market cap trend chart, and coin listings (CoinGecko API).",
      image: "/projects/coinvista.png",
      tech: ["Next.js", "TypeScript", "Tailwind", "Recharts"],
      demo: "https://coinvista-ecru.vercel.app/",
      github: "https://github.com/alifrb/coinvista",
    },
  ];

  return (
    <div className={`${darkMode ? "dark" : ""} transition-colors duration-300`}>
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 text-slate-900 dark:text-slate-100">
        {/* Navigation */}
        <nav
          className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
            scrolled
              ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-lg shadow-lg"
              : "bg-transparent"
          }`}
        >
          <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
              &lt; Ali.dev /&gt;
            </h1>
            <div className="flex items-center gap-6">
              <a
                href="#projects"
                className="hover:text-emerald-500 transition hidden sm:block"
              >
                Projects
              </a>
              <a
                href="#skills"
                className="hover:text-emerald-500 transition hidden sm:block"
              >
                Skills
              </a>
              <a
                href="#certificates"
                className="hover:text-emerald-500 transition hidden sm:block"
              >
                Certifications
              </a>
              <a
                href="#contact"
                className="hover:text-emerald-500 transition hidden sm:block"
              >
                Contact
              </a>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg bg-slate-200 dark:bg-slate-700 hover:scale-110 transition"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 pt-20">
          <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fadeIn">
              <div className="inline-flex flex-col gap-y-1 px-4 py-2 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-600 dark:text-emerald-400 text-sm font-medium text-left">
                <span className="flex items-center gap-2">
                  Available for work across Canada
                  <ReactCountryFlag
                    countryCode="CA"
                    svg
                    title="Canada"
                    style={{ width: "1.2rem", height: "1.2rem" }}
                    aria-label="Canada flag"
                  />
                </span>
                <span className="flex items-center gap-2">
                  <span>Based in Montreal, Quebec</span>
                  <Image
                    src="./Quebec-Flag.svg"
                    alt="Québec flag"
                    title="Québec"
                    width={18}
                    height={18}
                    className="rounded-sm"
                  />
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                Hi, I'm{" "}
                <span className="bg-gradient-to-r from-emerald-500 to-teal-500 bg-clip-text text-transparent">
                  Ali Farahbakhsh
                </span>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400">
                Front-End Developer specializing in React & TypeScript
              </p>
              <p className="text-lg text-slate-600 dark:text-slate-400">
                I build fast, accessible, and visually stunning web applications
                that solve real problems.
              </p>
              <div className="flex gap-4 flex-wrap">
                <a
                  href="#projects"
                  className="px-6 py-3 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg font-medium hover:shadow-lg hover:scale-105 transition"
                >
                  View Projects
                </a>
                <a
                  href="#contact"
                  className="px-6 py-3 border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 rounded-lg font-medium hover:bg-emerald-500 hover:text-white transition"
                >
                  Get in Touch
                </a>
              </div>
              <div className="flex gap-4 pt-4">
                <a
                  href="https://github.com/alifrb"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-200 dark:bg-slate-700 rounded-lg hover:scale-110 transition"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ali-farahbakhshdarabi-a7a77b202/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-slate-200 dark:bg-slate-700 rounded-lg hover:scale-110 transition"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:ali.frh92@gmail.com"
                  className="p-3 bg-slate-200 dark:bg-slate-700 rounded-lg hover:scale-110 transition"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            <div
              className="flex justify-center animate-fadeIn"
              style={{ animationDelay: "0.2s" }}
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
                <img
                  src="/me.png"
                  alt="Ali Farahbakhsh"
                  className="relative w-92 h-92 object-cover rounded-full border-4 border-white dark:border-slate-700 shadow-2xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="bg-white/50 dark:bg-slate-800/50 backdrop-blur-lg rounded-3xl p-8 md:p-12 border border-slate-200 dark:border-slate-700 shadow-xl">
              <div className="grid md:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <h2 className="text-3xl font-bold mb-6">About Me</h2>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    I'm a passionate Front-End Developer based in{" "}
                    <strong className="text-emerald-600 dark:text-emerald-400">
                      Montreal, Canada
                    </strong>
                    . I love creating web experiences that are not only
                    beautiful but also fast and accessible.
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    With expertise in React and TypeScript, I focus on building
                    scalable applications with clean, maintainable code. I'm
                    always learning and staying up-to-date with the latest web
                    technologies.
                  </p>
                  <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                    Bilingual (English/French) and available for full-time
                    opportunities in the Montreal tech scene.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 rounded-2xl p-6 border border-emerald-500/20">
                    <div className="text-4xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                      3+
                    </div>
                    <div className="text-slate-600 dark:text-slate-400">
                      Years Experience
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl p-6 border border-blue-500/20">
                    <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
                      20+
                    </div>
                    <div className="text-slate-600 dark:text-slate-400">
                      Projects Done
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-2xl p-6 border border-purple-500/20">
                    <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
                      10+
                    </div>
                    <div className="text-slate-600 dark:text-slate-400">
                      Technologies
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-2xl p-6 border border-orange-500/20">
                    <div className="text-4xl font-bold text-orange-600 dark:text-orange-400 mb-2">
                      100%
                    </div>
                    <div className="text-slate-600 dark:text-slate-400">
                      Commitment
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section
          id="skills"
          className="py-20 px-6 bg-slate-100/50 dark:bg-slate-900/50"
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Skills & Technologies
            </h2>
            <p className="text-center text-slate-600 dark:text-slate-400 mb-12">
              Tools I use to bring ideas to life
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {skills.map((skill, i) => (
                <div
                  key={i}
                  className="bg-white dark:bg-slate-800 rounded-2xl p-6 flex flex-col items-center justify-center hover:scale-105 transition shadow-lg border border-slate-200 dark:border-slate-700"
                  style={{ animationDelay: `${i * 0.1}s` }}
                >
                  <skill.Icon className={`text-6xl mb-4 ${skill.color}`} />
                  <h3 className="font-semibold text-lg text-center">
                    {skill.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Featured Projects
            </h2>
            <p className="text-center text-slate-600 dark:text-slate-400 mb-12">
              Some of my recent work
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {projects.map((project, i) => (
                <div
                  key={i}
                  className="group bg-white dark:bg-slate-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200 dark:border-slate-700"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-56 object-cover group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition"></div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, j) => (
                        <span
                          key={j}
                          className="px-3 py-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-sm border border-emerald-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-lg hover:shadow-lg transition"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </a>
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 border border-slate-300 dark:border-slate-600 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 transition"
                      >
                        <Github size={18} />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certificates" className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-4">
              Certifications
            </h2>
            <p className="text-center text-slate-600 dark:text-slate-400 mb-12">
              Continuous learning and professional development
            </p>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                      Agile Software Development
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                      LinkedIn Learning • 2024
                    </p>
                    <a
                      href="https://www.linkedin.com/learning/certificates/abf3101c6e60f2dc90a0a82c53f9261836c2eebb6ce99d9984e682a588e5a2fc"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:underline text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 border border-slate-200 dark:border-slate-700 shadow-lg hover:shadow-xl transition">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">
                      TypeScript Essential Training
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 text-sm mb-3">
                      LinkedIn Learning • 2024
                    </p>
                    <a
                      href="https://www.linkedin.com/learning/certificates/336c3307caf333dcfd1f5802551ecd5aaa73f922ec0cc3e24f11cf3312c5d72b"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 hover:underline text-sm font-medium"
                    >
                      <ExternalLink size={16} />
                      View Certificate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="py-20 px-6 bg-slate-100/50 dark:bg-slate-900/50"
        >
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-4">Let's Work Together</h2>
            <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
              Open to new opportunities across Canada. Let's build something
              amazing!
            </p>
            <div className="flex justify-center gap-6 flex-wrap">
              <a
                href="mailto:ali.frh92@gmail.com"
                className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-emerald-500 to-teal-500 text-white rounded-xl font-medium hover:shadow-xl hover:scale-105 transition"
              >
                <Mail size={24} />
                ali.frh92@gmail.com
              </a>
              <a
                href="https://www.linkedin.com/in/ali-farahbakhshdarabi-a7a77b202/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 px-8 py-4 bg-white dark:bg-slate-800 border-2 border-emerald-500 text-emerald-600 dark:text-emerald-400 rounded-xl font-medium hover:shadow-xl hover:scale-105 transition"
              >
                <Linkedin size={24} />
                LinkedIn
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 px-6 border-t border-slate-200 dark:border-slate-700">
          <div className="max-w-6xl mx-auto text-center text-slate-600 dark:text-slate-400">
            <p>© 2025 Ali Farahbakhshdarabi. Built with React & Tailwind CSS</p>
          </div>
        </footer>

        <style>{`
          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fadeIn {
            animation: fadeIn 0.8s ease-out forwards;
          }
        `}</style>
      </div>
    </div>
  );
}
