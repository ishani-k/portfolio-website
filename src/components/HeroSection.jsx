import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  const [theme, setTheme] = useState("light");

  // Optional: detect system theme
  useEffect(() => {
    const darkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    setTheme(darkMode ? "dark" : "light");
  }, []);

  const isDark = theme === "dark";

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-10 overflow-hidden"
    >
      {/* Animated background elements for light mode */}
      {!isDark && (
        <div className="absolute inset-0 -z-5">
          <motion.div
            className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full blur-3xl opacity-30"
            animate={{ x: [0, 30, 0], y: [0, -30, 0] }}
            transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
          />
          <motion.div
            className="absolute bottom-1/3 right-1/3 w-72 h-72 rounded-full bg-peach-100 blur-3xl opacity-30"
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
          <motion.h1
            className="text-3xl md:text-4xl lg:text-[45px] text-gray-900 font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Hi, I'm Ishani. A full stack developer.
          </motion.h1>

          <motion.p
            className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            I specialize in developing robust web applications with a focus on functionality and performance.
            From frontend interfaces to backend logic, I love turning ideas into seamless digital experiences.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="flex justify-center gap-5">
              <a href="#contact">
              <Button
                size="lg"
                className="rounded-full px-8 hover:bg-gray-500 dark:bg-blue-600 dark:hover:bg-blue-700"
              >
                Let's Connect
              </Button>
            </a>
            <a href="https://drive.google.com/file/d/1y2WDkc83fTQeViahD96p5vtL47UfGdxT/view" target="_blank" rel="noopener noreferrer">
              <Button
                size="lg"
                className="rounded-full px-8 hover:bg-gray-500 "
              >
                View Resume
              </Button>
            </a>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {/*<motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-peach-400 dark:border-gray-600 flex justify-center pt-2">
          <motion.div
            className="w-1 h-2 bg-peach-400 dark:bg-gray-600 rounded-full"
            animate={{ y: [0, 4, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </div>
      </motion.div>*/}
<motion.div
      className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-peach-400"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
    >
      <ChevronDown className="w-6 h-6" />
    </motion.div>


    </section>
  );
}