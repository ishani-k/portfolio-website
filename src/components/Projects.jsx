import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button"; 
import prospr from "../assets/prospr.png";
import snipify from "../assets/snipify.png";

// Import tech icons
import { FaReact, FaJs, FaPython, FaNodeJs, FaClipboard, FaRegChartBar } from "react-icons/fa";
import { SiTailwindcss, SiOpenai, SiPostgresql, SiNextdotjs, SiGooglegemini, SiSupabase, SiPrisma, SiMongodb, SiExpress, SiJavascript, SiShadcnui, SiClerk, SiRazorpay } from "react-icons/si";

const projects = [
  {
    title: "Prospr",
    description:
      "An AI-powered expense tracker that scans receipts to auto-capture transactions, tracks monthly budgets, and provides detailed spending insights. It sends alerts when users near budget limits and offers a transaction sheet to view, edit, or manage recurring expenses efficiently.",
    image: prospr,
    liveLink: "https://prospr-fintracker.vercel.app/",
    githubLink: "https://github.com/ishani-k/Prospr",
    techStack: [
      { name: "NextJS", icon: <SiNextdotjs /> },
      { name: "Shadcn UI", icon: <SiShadcnui /> },
      { name: "TailwindCSS", icon: <SiTailwindcss /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "PrismaORM", icon: <SiPrisma /> },
      { name: "Supabase", icon: <SiSupabase /> },
      { name: "Clerk Auth", icon: <SiClerk /> },
      { name: "Gemini API", icon: <SiGooglegemini/> },
    ],
  },
  {
    title: "Snipify",
    description:
      "An AI-powered tool that automatically removes image backgrounds with precision and speed. Users can upload images, get clean transparent outputs instantly, and manage usage through a credit-based system, with options to purchase additional credits as needed.",
    image: snipify,
    liveLink: "https://snipify-frontend.onrender.com/",
    githubLink: "https://github.com/ishani-k/Snipify",
    techStack: [
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "React.js", icon: <FaReact /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "Clerk Auth", icon: <SiClerk /> },
      { name: "Razorpay", icon: <SiRazorpay /> },

    ],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 section-gradient-2 px-10">
      <div className="container mx-auto">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
            Projects
          </h2>

          <div className="space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-white/80 rounded-xl flex flex-col md:flex-row overflow-hidden shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                {/* Image section */}
                <div className="p-4 flex items-center justify-center bg-transparent md:w-1/2">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-contain w-full h-auto rounded-lg transition-transform duration-500 hover:scale-105 border"
                  />
                </div>

                {/* Text section */}
                <div className="p-6 md:w-1/2">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack Buttons */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, i) => (
                      <Button
                        key={i}
                        variant="outline"
                        className="flex items-center gap-2 cursor-default border-gray-400 rounded-lg dark:border-gray-700 bg-gray dark:bg-gray-800 text-gray-800 dark:text-gray-200"
                      >
                        <span className="text-lg">{tech.icon}</span>
                        <span className="text-sm">{tech.name}</span>
                      </Button>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap gap-3">
                    <Button className="bg-black hover:bg-gray-600 dark:bg-blue-600 dark:hover:bg-blue-700">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Project
                      </a>
                    </Button>

                    <Button
                      variant="outline"
                      className="border-gray-300 hover:bg-gray-100 dark:border-gray-700 dark:hover:bg-gray-800"
                    >
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="mr-2 h-4 w-4" />
                        View Code
                      </a>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
