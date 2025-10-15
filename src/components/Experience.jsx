import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

const experiences = [
  {
    title: "Software Developer Intern",
    company: "Veer Marathon",
    period: "July 2025 - August 2025",
    description:
      "Designed and managed PostgreSQL database with 5K+ participant entries, ensuring 100% data accuracy.",
    details: [
      "Utilized Supabase for authentication and database management, streamlining registration and tracking workflows.",
      "Optimized queries and indexing, improving DB response time by 30% and reducing redundancy.",
    ],
  },
  {
    title: "Cloud and Digital Launchpad Trainee",
    company: "PwC Acceleration Centre",
    period: "February 2024 – July 2024",
    description:
      "Ranked in the top 1% performers out of 500+ participants nationwide, recognized for technical excellence.",
    details: [
      "Completed 80+ hours of training on AWS, Azure, and GCP, building skills in cloud deployment and infrastructure.",
      "Gained hands-on experience in DevOps and automation, applying concepts to 3+ digital transformation case studies.",
    ],
    companyLink: "https://drive.google.com/file/d/1GYJFsoP2tRAzbyOCoWirMhdVo4oezhd-/view",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 section-gradient-2">
      <div className="container mx-auto px-4">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Professional Experience</h2>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                className="relative pl-8 md:pl-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <div className="md:grid md:grid-cols-12 md:gap-4">
                  {/* Timeline line */}
                  <div className="hidden md:block md:col-span-1 relative">
                    <div className="h-full w-px bg-blue-900 dark:bg-gray-700 absolute left-1/2 transform -translate-x-1/2" />
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 rounded-full bg-blue-900 dark:bg-primary border-4 border-cream dark:border-gray-900" />
                  </div>

                  {/* Mobile timeline dot */}
                  <div className="absolute left-0 top-0 md:hidden">
                    <div className="w-4 h-4 rounded-full bg-blue-900 dark:bg-primary border-4 border-cream dark:border-gray-900" />
                  </div>

                  {/* Content */}
                  <div className="md:col-span-11 bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm">
                    <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold">{exp.title}</h3>
                        <div className="flex items-center mt-1">
                          <p className="text-gray-600 dark:text-gray-300">
                            {exp.company}
                            {exp.companyLink && (
                              <a
                                href={exp.companyLink}
                                className="inline-flex items-center ml-2 text-black-600 dark:text-primary hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="h-3 w-3 ml-1" />
                              </a>
                            )}
                          </p>
                        </div>
                      </div>
                      <span className="text-sm text-gray-500 dark:text-gray-400 mt-1 md:mt-0">{exp.period}</span>
                    </div>

                    <p className="text-gray-700 dark:text-gray-300 mb-4">{exp.description}</p>

                    <ul className="space-y-2">
                      {exp.details.map((detail, idx) => (
                        <li key={idx} className="text-gray-600 dark:text-gray-400">
                          {typeof detail === "string" ? (
                            detail
                          ) : (
                            <a
                              href={detail.link}
                              className="flex items-start hover:text-black-600 dark:hover:text-primary transition-colors"
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <span className="mr-2">•</span>
                              <span className="hover:underline">{detail.title}</span>
                              <ExternalLink className="h-3 w-3 ml-1 mt-1 flex-shrink-0" />
                            </a>
                          )}
                        </li>
                      ))}
                    </ul>
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
