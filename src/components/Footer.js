import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="py-8 bg-black border-t border-green-900/30 text-center">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="text-sm text-gray-400"
      >
        © 2025 Destiny Uyi Akugbe — All rights reserved.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
        className="mt-3 text-green-400 text-xs"
      >
        Built with ❤️ using React, Tailwind, and Framer Motion.
      </motion.div>
    </footer>
  );
}
