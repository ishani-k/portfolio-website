import { motion } from "framer-motion";
import { FileDown } from "lucide-react";
import { Button } from "./ui/button"; // adjust path if needed
import profileImage from "../assets/ishani.jpg"; // your image (place it in /src/assets)

const skills = [
  "C++",
  "JavaScript",
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "MySQL",
  "Frontend Development",
  "Problem Solving",
];

export default function About() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">About Me</h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-96 aspect-square max-w-md mx-auto overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all">
                <img
                  src={profileImage}
                  alt="Ishani's portrait"
                  className="object-cover w-full h-full scale-150"
                />
              </div>
            </motion.div>

            {/* Text Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 text-justify">
                I build full stack web applications end-to-end, designing efficient backend systems while also specializing in creating seamless, interactive frontend experiences. I focus on writing clean, maintainable code that ensures every application is reliable, performant, and thoughtfully engineered.
              </p>

              <p className="text-lg text-gray-700 dark:text-gray-300 text-justify">
               Alongside development, I have a strong foundation in Data Structures and Algorithms, which allows me to approach problems methodically, optimize performance, and design efficient solutions. I enjoy tackling complex challenges and continuously refining my skills to deliver projects that are both functional and impactful.
              </p>

              {/* Resume Button */}
              <Button
                variant="outline"
                className="mt-4 flex items-center border-blue-400 hover:bg-pink-100 dark:border-gray-700 dark:hover:bg-gray-800"
              >
                <a href="/resume.pdf" download="Ishani_Kundu_Resume.pdf" className="flex items-center">
                  <FileDown className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
