import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Back End Developer (Contract) — Kikae",
    period: "Apr 2025 – Oct 2025",
    place: "Nigeria",
    bullets: [
      "Built e-commerce backend with Laravel for payments and user management.",
      "Implemented authentication, order tracking, and admin dashboards.",
      "Reduced API vulnerabilities by ~30% and improved scalability."
    ]
  },
  {
    title: "Software Engineer — University of Benin Tutorials",
    period: "Sep 2023 – Jul 2025",
    place: "University of Benin, Ugbowo, Benin City",
    bullets: [
      "Led ICT projects improving internal digital operations.",
      "Developed CBT app and online class system.",
      "Handled authentication, payments, and real-time updates."
    ]
  },
  {
    title: "Software Developer (Contract) — University of Benin Consultancy School",
    period: "Sep 2024 – Sep 2025",
    place: "University of Benin, Ekehuan",
    bullets: [
      "Built online result checker with live grading and PDF generation.",
      "Handled 600+ students per term; optimized backend for stability.",
      "Delivered major feature updates increasing user trust and reliability."
    ]
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-28 bg-black/40 border-t border-green-900/20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-green-300 mb-10">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 p-6 rounded-2xl border border-green-900/30 hover:border-green-700/40 transition"
            >
              <div className="flex justify-between items-start flex-wrap gap-3">
                <div>
                  <h3 className="text-lg font-semibold text-white">{exp.title}</h3>
                  <p className="text-sm text-gray-400">{exp.place}</p>
                </div>
                <span className="text-sm text-gray-400">{exp.period}</span>
              </div>
              <ul className="mt-4 list-disc list-inside text-gray-300 space-y-1">
                {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
