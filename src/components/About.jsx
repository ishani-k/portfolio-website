import { motion } from "framer-motion";
import profileImage from "../assets/ishani.jpg";

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
    <section id="about" className="py-16 sm:py-20 px-4 sm:px-6">
      <div className="container mx-auto">
        <motion.div
          className="max-w-5xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-12 text-center">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative w-64 sm:w-80 md:w-96 aspect-square max-w-md mx-auto overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all">
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
              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 text-justify">
                I build full stack web applications end-to-end, designing efficient backend systems while also specializing in creating seamless, interactive frontend experiences. I focus on writing clean, maintainable code that ensures every application is reliable, performant, and thoughtfully engineered.
              </p>

              <p className="text-base sm:text-lg text-gray-700 dark:text-gray-300 text-justify">
                Alongside development, I have a strong foundation in Data Structures and Algorithms, which allows me to approach problems methodically, optimize performance, and design efficient solutions. I enjoy tackling complex challenges and continuously refining my skills to deliver projects that are both functional and impactful.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
