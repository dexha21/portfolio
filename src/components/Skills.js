import React from "react";
import { motion } from "framer-motion";

const skillGroups = [
  {
    title: "Languages & Frameworks",
    items: [
      "HTML", "CSS", "JavaScript", "TypeScript", "PHP", "Laravel",
      "React.js", "React Native", "Node.js"
    ],
  },
  {
    title: "Databases",
    items: ["MySQL", "IndexedDB", "SQLite"],
  },
  {
    title: "Tools & Platforms",
    items: [
      "jQuery", "Bootstrap", "Postman", "Apache", "NPM", "Git", "VS Code"
    ],
  },
  {
    title: "Others",
    items: ["Microsoft Office Suite", "CorelDRAW", "Typing Speed (46 WPM)"],
  },
  {
    title: "Soft Skills",
    items: [
      "Problem-solving", "Collaboration", "Code Optimization", "Project Management"
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 bg-black/40 border-t border-green-900/20">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-green-300 mb-14">Skills</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-center">
          {skillGroups.map((group, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 border border-green-900/30 rounded-2xl p-6 shadow-lg shadow-green-900/10 hover:border-green-700/40 transition"
            >
              <h3 className="text-lg font-semibold text-green-300 mb-4">
                {group.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-2">
                {group.items.map((item, j) => (
                  <motion.span
                    key={j}
                    whileHover={{ scale: 1.05 }}
                    className="px-3 py-1 text-sm bg-green-900/30 border border-green-800 rounded-full text-green-200"
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
