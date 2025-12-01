import React from "react";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="py-28">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold text-green-300 mb-4">About Me</h2>
          <p className="text-gray-300 leading-relaxed max-w-3xl">
            I’m a passionate <strong className="text-green-400">Full-Stack Developer</strong> with deep expertise in{" "}
            <strong className="text-green-400">Laravel</strong> and{" "}
            <strong className="text-green-400">React Native</strong>.  
            I love building secure, efficient applications — from robust REST APIs to mobile-first user experiences.
            I focus on clean architecture, authentication, offline-first data handling, and encryption.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
