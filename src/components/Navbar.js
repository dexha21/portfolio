import React, { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const NAV = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("hero");

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  useEffect(() => {
    const onScroll = () => {
      const scrollPos = window.scrollY + window.innerHeight / 3;
      for (const n of NAV) {
        const s = document.getElementById(n.id);
        if (!s) continue;
        const top = s.offsetTop;
        const bottom = top + s.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
          setActive(n.id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const goto = (id) => {
    setOpen(false);
    document
      .getElementById(id)
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50">
      {/* Scroll progress bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-[3px] origin-left bg-green-500 z-50"
      />

      <nav className="container mx-auto bg-black/60 backdrop-blur-md border border-green-900/40 rounded-2xl mx-4 p-4 flex items-center justify-between shadow-lg shadow-green-900/30">
        <div className="flex items-center gap-3">
          <span className="text-green-400 font-bold text-lg select-none">
            My Portfolio
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => goto(n.id)}
              className={`text-sm font-medium transition ${
                active === n.id
                  ? "text-green-400 drop-shadow-[0_0_6px_#00ff9966]"
                  : "text-gray-300 hover:text-green-300"
              }`}
            >
              {n.label}
            </button>
          ))}
          <a
            href="https://wa.me/2349038692680"
            className="ml-2 inline-block px-4 py-1 rounded-md text-sm bg-green-700 hover:bg-green-600 transition"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen((v) => !v)}
            className="p-2 rounded-md bg-green-900/40"
          >
            <svg
              className="w-6 h-6 text-green-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden container mx-auto mx-4 mt-2 bg-black/70 backdrop-blur-md rounded-2xl p-4 border border-green-900/40 shadow-lg">
          <div className="flex flex-col gap-3">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => goto(n.id)}
                className="text-left text-gray-200 py-2 hover:text-green-300 transition"
              >
                {n.label}
              </button>
            ))}
            <a
              href="https://wa.me/2349038692680"
              className="py-2 text-left text-green-300"
            >
              Hire Me
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
