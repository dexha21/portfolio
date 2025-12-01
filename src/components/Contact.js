import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Linkedin, Github } from "lucide-react";

const contactDetails = [
  {
    icon: <Mail className="w-5 h-5 text-green-400" />,
    label: "Email",
    value: "akugbed2@gmail.com",
    link: "mailto:akugbed2@gmail.com",
  },
  {
    icon: <Phone className="w-5 h-5 text-green-400" />,
    label: "Phone",
    value: "+234 903 869 2680",
    link: "https://wa.me/2349038692680",
  },
  {
    icon: <MapPin className="w-5 h-5 text-green-400" />,
    label: "Based",
    value: "Edo State, Nigeria",
  },
  {
    icon: <Linkedin className="w-5 h-5 text-green-400" />,
    label: "LinkedIn",
    value: "Destiny Akugbe",
    link: "http://www.linkedin.com/in/destiny-akugbe-bb7607349",
  },
  {
    icon: <Github className="w-5 h-5 text-green-400" />,
    label: "GitHub",
    value: "github.com/dexha21",
    link: "https://github.com/dexha21",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-28 bg-black/40 border-t border-green-900/20"
    >
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-green-300 mb-6">Contact</h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
        >
          I’m always open to collaborations, freelance projects, or technical
          discussions. Let’s connect — I’d love to hear from you!
        </motion.p>

        {/* Contact info cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {contactDetails.map((item, i) => (
            <motion.a
              key={i}
              href={item.link || "#"}
              target={item.link ? "_blank" : undefined}
              rel="noreferrer"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className={`group flex flex-col items-center justify-center p-5 rounded-xl bg-white/5 border border-green-900/30 hover:border-green-700/50 hover:bg-green-900/20 ${
                item.link ? "cursor-pointer" : "cursor-default"
              }`}
            >
              <div className="mb-2">{item.icon}</div>
              <div className="text-sm text-gray-400">{item.label}</div>
              <div className="text-green-200 font-medium group-hover:text-green-300">
                {item.value}
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
