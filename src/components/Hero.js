import React from "react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-br from-green-900/30 via-black to-green-950/20"
        animate={{ backgroundPosition: ["0% 0%", "100% 100%", "0% 0%"] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        style={{
          backgroundSize: "400% 400%",
          zIndex: 0,
        }}
      />

      {/* Floating particles */}
      <motion.div
        className="absolute w-[500px] h-[500px] bg-green-500/10 rounded-full blur-3xl"
        animate={{ x: [0, 100, -100, 0], y: [0, 50, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[400px] h-[400px] bg-green-400/10 rounded-full blur-3xl"
        animate={{ x: [100, -100, 100], y: [-50, 50, -50] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl sm:text-6xl md:text-7xl font-extrabold text-green-300 drop-shadow-[0_0_10px_#00ff9966]"
        >
          Destiny Uyi Akugbe
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="mt-6 text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
        >
          Software Engineer — Full-Stack Developer specialized in{" "}
          <strong className="text-green-400">Laravel</strong> and{" "}
          <strong className="text-green-400">React Native</strong>.  
          I build secure, scalable apps and reliable REST APIs with performance in mind.
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 rounded-md text-sm font-semibold bg-green-700 hover:bg-green-600 shadow-md shadow-green-800/30 transition"
          >
            View Projects
          </a>
          <a
            href="#contact"
            className="px-6 py-3 rounded-md text-sm border border-green-700 text-green-300 hover:bg-green-900/30 transition"
          >
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
