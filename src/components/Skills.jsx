import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import { SiTailwindcss, SiMongodb, SiExpress, SiCplusplus, SiNextdotjs, SiTypescript, SiPostgresql, SiSupabase, SiVercel, SiMysql } from "react-icons/si";
import { GrMysql } from "react-icons/gr"

const techStack = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black dark:text-white"/> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-900" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-400" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "MySQL", icon: <GrMysql className="text-gray-900" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-700" /> },
  { name: "Supabase", icon: <SiSupabase className="text-green-500" /> },
  { name: "Vercel", icon: <SiVercel className="text-black dark:text-white" /> },
  
];

export default function ToolsAndTech() {
  return (
    <section id="tech" className="py-20  dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold mb-12"
        >
          Tools & Technologies
        </motion.h2>

        {/*<motion.div
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center"
          initial={{ opacity: 0 , x: -20}}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0 }}
        >
          {techStack.map((tech, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className="flex flex-col items-center space-y-2"
            >
              <div className="text-5xl transition-transform duration-300">{tech.icon}</div>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</p>
            </motion.div>
          ))}
        </motion.div> */}

        <motion.div
  className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 justify-items-center"
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
  transition={{ duration: 1.0 }}
>
  {techStack.map((tech, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, x: 50 }} 
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.1 }}
      className="flex flex-col items-center space-y-2"
    >
      <div className="text-5xl transition-transform duration-300">{tech.icon}</div>
      <p className="text-sm font-medium text-gray-700 dark:text-gray-300">{tech.name}</p>
    </motion.div>
  ))}
</motion.div>

      </div>
    </section>
  );
}
