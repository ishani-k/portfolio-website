import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ChevronDown, FileUser, Send } from "lucide-react";

export default function Hero() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(darkMode ? "dark" : "light");
  }, []);

  const isDark = theme === "dark";

  // Letter-by-letter animation variants
  const sentence = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        delay: 0.2,
        staggerChildren: 0.07,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-10 overflow-hidden"
    >
      {/* Background animations (unchanged) */}
      {!isDark && (
        <div className="absolute inset-0 -z-5">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-20 bg-pink-100"
            animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full bg-yellow-50 blur-3xl opacity-20"
            animate={{ x: [0, -40, 0], y: [0, 40, 0] }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse" }}
          />
        </div>
      )}

      <div className="container mx-auto px-4 z-10">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* ✨ Frosted Glass Ribbon with Shimmer Light Ray */}
          <motion.div
            className="relative inline-flex items-center gap-2 mb-5 px-5 py-2 rounded-full border border-gray-600 backdrop-blur-md bg-white/10 dark:bg-black/20 text-sm text-gray-100 shadow-sm overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {/* Small bright neon dot */}
            <motion.span
              className="w-2 h-2 rounded-full bg-green-400 shadow-[0_0_6px_2px_rgba(34,197,94,0.9)]"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
            />
            <span className="tracking-normal text-slate-800 italic">Open to freelance & full-time opportunities</span>

            {/* Passing ray of light shimmer */}
            <motion.div
              className="absolute top-0 left-[-70%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/40 to-transparent skew-x-12"
              animate={{ left: ["-70%", "120%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* 🩶 Typing-style hero heading (one letter at a time) */}
          <motion.h1
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[39px] merriweather font-bold bg-gradient-to-t from-[#0f2027] via-[#223941] to-[#395764] bg-clip-text text-transparent tracking-wide mb-4 text-center leading-snug"
            variants={sentence}
            initial="hidden"
            animate="visible"
          >
            {/* Split text into two lines for responsiveness */}
            {"Hi, I'm Ishani.".split("").map((char, index) => (
              <motion.span key={index} variants={letter}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}

            {/* Add a line break only on small screens */}
            <span className="block sm:hidden"></span>

            <span className="hidden sm:inline">&nbsp;</span>

            {"A full stack developer.".split("").map((char, index) => (
              <motion.span key={index + 100} variants={letter}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>


          {/* Paragraph fades in fully together */}
          <motion.p
            className="text-lg md:text-xl text-gray-700 dark:text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed font-normal"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 2.5 }}
          >
            I specialize in developing robust end-to-end web applications focused on functionality,
            performance, and seamless user experience. From intuitive frontend designs to
            efficient backend logic, I turn ideas into reliable, modern digital solutions.
          </motion.p>

          {/* Buttons (unchanged) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3 }}
          >
            <div className="flex justify-center gap-5 ">
              <a href="#contact">
                <Button
                size="lg"
                className="rounded-full px-8 bg-gradient-to-tr from-[#0f2027] via-[#3d5c68] to-[#0f2027] hover:scale-105 hover:from-[#3d5c68] hover:via-[#2d434d] hover:to-[#0f2027] ease-in-out transition-all duration-300 flex items-center gap-2"
              >
                <Send className="w-4 h-4" /> Let's Connect
              </Button>
              </a>
              <a
                href="https://drive.google.com/file/d/1y2WDkc83fTQeViahD96p5vtL47UfGdxT/view"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  size="lg"
                  className="rounded-full px-8 bg-gradient-to-tr from-[#0f2027] via-[#3d5c68] to-[#0f2027] hover:scale-105 hover:from-[#3d5c68] hover:via-[#2d434d] hover:to-[#0f2027] ease-in-out transition-all duration-300 flex items-center gap-2"
                >
                  <FileUser className="w-4 h-4" /> Resume
                </Button>


              </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-700"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}
