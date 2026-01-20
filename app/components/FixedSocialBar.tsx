"use client";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail } from "lucide-react";

export default function FixedSocialBar() {
  const socials = [
    {
      href: "https://github.com/itsanla",
      label: "GitHub",
      icon: <Github className="w-5 h-5" />,
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      href: "https://www.linkedin.com/in/anlaharpanda",
      label: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      href: "mailto:anlaharpanda@gmail.com",
      label: "Email",
      icon: <Mail className="w-5 h-5" />,
      color: "hover:text-red-600 dark:hover:text-red-400",
    },
  ];

  return (
    <motion.div
      className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col gap-4"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay: 1 }}
    >
      {/* Social Icons */}
      <div className="flex flex-col gap-3 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-full p-3 shadow-lg border border-gray-200 dark:border-gray-700">
        {socials.map(({ href, label, icon, color }, index) => (
          <motion.a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            aria-label={label}
            className={`text-gray-600 dark:text-gray-400 transition-all duration-300 ${color} hover:scale-110`}
            whileHover={{ scale: 1.2, y: -2 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 1.2 + index * 0.1 }}
          >
            {icon}
          </motion.a>
        ))}
      </div>

      {/* Vertical Line */}
      <motion.div
        className="w-px h-20 bg-gradient-to-b from-gray-300 to-transparent dark:from-gray-600 mx-auto"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 0.8, delay: 1.5 }}
      />
    </motion.div>
  );
}