import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button"; 
import prospr from "../assets/prospr.png"
import snipify from "../assets/snipify.png"

const projects = [
  {
    title: "Prospr",
    description:"An AI-powered expense tracker that scans receipts to auto-capture transactions, tracks monthly budgets, and provides detailed spending insights. It sends alerts when users near budget limits and offers a transaction sheet to view, edit, or manage recurring expenses efficiently.",
    image: prospr,
    liveLink: "",
    githubLink: "",
    techStack: [],
  },
  {
    title: "Snipify",
    description:
      "An AI-powered tool that automatically removes image backgrounds with precision and speed. Users can upload images, get clean transparent outputs instantly, and manage usage through a credit-based system — with options to purchase additional credits as needed.",
    image: snipify,
    liveLink: "",
    githubLink: "",
    techStack: [],
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

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-peach-100 dark:bg-gray-800 rounded-full text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

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
