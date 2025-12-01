import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "GBRAINS UTME/PUME CBT App — Gorilla Brains Lecture House",
    period: "April 2025 (UTME) & September 2025 (PUME)",
    location: "Edo State, Nigeria",
    tech: ["React.js", "PHP", "MySQL"],
    details: [
      "Developed a high-performance CBT application that automatically generates user IDs based on selected subjects for over 3,000 students.",
      "Optimized the system to run smoothly on low-spec laptops and support 200+ concurrent users per session.",
      "Implemented a distributed setup using five local PCs as synchronized servers, ensuring balanced connections and preventing downtime during peak usage."
    ],
    videos: [
      "https://drive.google.com/file/d/XXXXXXXXX/view?usp=sharing"
    ]
  },
  {
    title: "Learn Krest — E-learning Platform (Contract Project for Ex–UNIBEN Consultancy Director)",
    period: "December 2024 - February 2025",
    location: "Edo State, Nigeria",
    tech: ["React.js", "PHP", "MySQL"],
    details: [
      "Built an online study platform that allows students to access and study educational materials through a digital library — offering both free and paid access.",
      "Developed dual platforms for students and administrators: students can read, watch lessons, and take CBT tests; admins can upload PDFs, videos, and quizzes.",
      "Streamlined content delivery, testing, and performance tracking, enhancing accessibility for hundreds of students."
    ],
    videos: [
      "https://drive.google.com/file/d/YYYYYYYYY/view?usp=sharing"
    ]
  },
  {
    title: "ChatByX — Personal Project (Cross-Platform Chat Application)",
    period: "September 2025",
    location: "Edo State, Nigeria",
    tech: ["React Native (Expo)", "Laravel"],
    details: [
      "Built a real-time chat platform leveraging Laravel stream responses for live messaging.",
      "Ensured seamless sync between user devices and server databases with a custom socket-like implementation.",
      "Added contact management to detect mutual saved contacts automatically.",
      "Currently developing a ‘Stories’ module for expiring media (24-hour lifespan).",
      "Focused on scalability, secure data flow, and smooth real-time performance."
    ],
    videos: [
      "https://drive.google.com/file/d/ZZZZZZZZZ/view?usp=sharing"
    ]
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 bg-black/30 border-t border-green-900/20">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-green-300 mb-10 text-center">Top Projects</h2>

        <div className="space-y-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="bg-white/5 p-6 md:p-8 rounded-2xl border border-green-900/30 hover:border-green-700/40 transition shadow-lg shadow-green-900/10"
            >
              <h3 className="text-xl font-semibold text-white">{project.title}</h3>
              <p className="text-sm text-gray-400 mt-1">
                {project.period} | {project.location}
              </p>

              <ul className="list-disc list-inside text-gray-300 mt-4 space-y-2 text-sm leading-relaxed">
                {project.details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mt-4">
                {project.tech.map((t, j) => (
                  <span
                    key={j}
                    className="text-xs bg-green-800/40 px-3 py-1 rounded-full border border-green-800 text-green-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {project.videos.length > 0 && (
                <div className="mt-6 space-y-2">
                  <p className="text-sm text-gray-400">🎥 Watch Project Demo:</p>
                  <ul className="list-disc list-inside text-green-400 text-sm space-y-1">
                    {project.videos.map((link, k) => (
                      <li key={k}>
                        <a
                          href={link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:underline"
                        >
                          Google Drive Video {k + 1}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
