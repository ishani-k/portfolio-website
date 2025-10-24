import { motion } from "framer-motion";
import { Button } from "./ui/button";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaJava,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiMongodb,
  SiExpress,
  SiCplusplus,
  SiNextdotjs,
  SiTypescript,
  SiPostgresql,
  SiSupabase,
  SiVercel,
  SiC,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";

const techStack = [
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-500" /> },
  { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "C++", icon: <SiCplusplus className="text-blue-400" /> },
  { name: "Java", icon: <FaJava className="text-blue-400" /> },
  { name: "React", icon: <FaReact className="text-sky-400" /> },
  { name: "Next.js", icon: <SiNextdotjs className="text-black" /> },
  { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "Express", icon: <SiExpress className="text-gray-900" /> },
  { name: "MongoDB", icon: <SiMongodb className="text-green-600" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-600" /> },
  { name: "MySQL", icon: <GrMysql className="text-gray-900" /> },
  { name: "PostgreSQL", icon: <SiPostgresql className="text-sky-700" /> },
  { name: "Supabase", icon: <SiSupabase className="text-green-500" /> },
  { name: "Vercel", icon: <SiVercel className="text-black" /> },
];

// Split techStack into two halves
const half = Math.ceil(techStack.length / 2);
const firstHalf = techStack.slice(0, half);
const secondHalf = techStack.slice(half);

export default function ToolsAndTech() {
  return (
    <section id="tech" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl sm:text-3xl md:text-4xl zalando-sans-expanded font-extrabold bg-gradient-to-tr from-[#0f2027] via-[#25414b] to-[#385c6b] bg-clip-text text-transparent tracking-wide mb-12 text-center"
        >
          Tools & Technologies
        </motion.h2>

        {/* Marquee strips with fade edges */}
        <div className="relative overflow-hidden">
          {/* Gradient overlays */}
          <div className="pointer-events-none absolute top-0 left-0 h-full w-16 bg-gradient-to-r from-white"></div>
          <div className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-white"></div>

          {/* First strip: left to right */}
          <div className="flex animate-marquee gap-6 whitespace-nowrap hover:pause-marquee">
            {firstHalf.concat(firstHalf).map((tech, index) => (
              <Button
                key={`top-${index}`}
                variant="outline"
                className=" items-center gap-2 px-4 py-2 text-sm md:text-base inline-flex"
              >
                <span className="text-lg">{tech.icon}</span>
                {tech.name}
              </Button>
            ))}
          </div>

          {/* Second strip: right to left */}
          <div className="flex animate-marquee-reverse gap-6 whitespace-nowrap mt-4 hover:pause-marquee">
            {secondHalf.concat(secondHalf).map((tech, index) => (
              <Button
                key={`bottom-${index}`}
                variant="outline"
                className="items-center gap-2 px-4 py-2 text-sm md:text-base inline-flex"
              >
                <span className="text-lg">{tech.icon}</span>
                {tech.name}
              </Button>
            ))}
          </div>
        </div>
      </div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
        .animate-marquee {
          display: inline-flex;
          animation: marquee 20s linear infinite; /* slower & smoother */
        }
        .animate-marquee-reverse {
          display: inline-flex;
          animation: marquee-reverse 20s linear infinite; /* slower & smoother */
        }
        .hover\\:pause-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
}
