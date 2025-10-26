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
    <section id="projects" className="py-20 section-gradient-2 px-6 sm:px-8 md:px-10">
      <div className="container mx-auto">
        <motion.div
          className="max-w-6xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-4xl zalando-sans-expanded font-extrabold bg-gradient-to-tr from-[#0f2027] via-[#25414b] to-[#385c6b] bg-clip-text text-transparent tracking-wide mb-10 sm:mb-12 text-center">
            Proof of Work
          </h2>

          <div className="space-y-10 sm:space-y-12">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                className="bg-gray-200 rounded-xl flex flex-col md:flex-row overflow-hidden shadow-md"
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
                <div className="p-4 sm:p-6 md:w-1/2">
                  <h3 className="text-lg sm:text-xl md:text-2xl lg:text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                  <p className="text-sm sm:text-base md:text-lg lg:text-base text-gray-700 mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack Buttons */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.map((tech, i) => (
                      <Button
                        key={i}
                        variant="outline"
                        className="flex items-center gap-2 cursor-default border-gray-400 rounded-lg bg-gray-100 hover:bg-gray-700 hover:text-slate-100 text-gray-800 px-2 py-1 sm:px-3 sm:py-1.5 md:px-4 md:py-2 lg:px-3 lg:py-1.5"
                      >
                        <span className="text-sm sm:text-base md:text-lg lg:text-base">{tech.icon}</span>
                        <span className="text-xs sm:text-sm md:text-base lg:text-sm">{tech.name}</span>
                      </Button>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex flex-wrap justify-center gap-3">
                    <Button className="bg-gray-900 hover:bg-gray-700 text-xs sm:text-sm md:text-base lg:text-sm px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 lg:py-1.5">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <ExternalLink className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
                        View Project
                      </a>
                    </Button>

                    <Button
                      variant="outline"
                      className="border-gray-300 hover:bg-gray-100 text-xs sm:text-sm md:text-base lg:text-sm px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 lg:py-1.5"
                    >
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github className="mr-2 h-3 w-3 sm:h-4 sm:w-4" />
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
