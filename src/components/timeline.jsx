import { motion } from "framer-motion";
import { useMobile } from "@/hooks/use-mobile";

const experiences = [
  {
    title: "Software Engineering Intern",
    company: "Grid Dynamics",
    period: "Jan 2026 – Jul 2026",
    type: "Experience",
    description:
      "Worked on TalentGrid, an AI-native workforce intelligence platform, across enterprise backend and full-stack workflows.",
    bullets: [
      "Engineered features using Java, Spring Boot, React.js, Apache Kafka, PostgreSQL, and microservices.",
      "Designed RESTful APIs for Interview and Scorecard modules with Spring MVC, Spring Data JPA, DTOs, and Controller–Service–Repository layering.",
      "Collaborated across a six-team engineering organization on Talent Acquisition Engine backend microservices.",
      "Worked with Agile delivery, Maven, testing, SDLC practices, REST APIs, and distributed systems.",
    ],
  },
  {
    title: "B.Tech · Computer Science and Engineering",
    company: "Motilal Nehru National Institute of Technology Allahabad",
    period: "2022 – 2026",
    type: "Education",
    description: "CGPA: 7.55",
  },
  {
    title: "Class 12th",
    company: "SDVM Public School, Gwalior, MP",
    period: "2021",
    type: "Education",
    description: "Percentage: 82%",
  },
  {
    title: "Class 10th",
    company: "Vidya Niket School, Gwalior, MP",
    period: "2019",
    type: "Education",
    description: "Percentage: 90.6%",
  },
];

export function Timeline() {
  const isMobile = useMobile();

  return (
    <div className={`space-y-12 relative ${!isMobile ? "before:absolute before:inset-0 before:left-1/2 before:-translate-x-px before:border-l-2 before:border-zinc-700 before:h-full before:z-0" : ""}`}>
      {experiences.map((experience, index) => (
        <div key={`${experience.title}-${experience.period}`} className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}>
          <motion.div
            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-blue-500/50">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000" />
              <div className="relative">
                <div className="inline-flex mb-3 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs font-medium text-blue-300">
                  {experience.type}
                </div>
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <div className="text-zinc-400 mt-1 mb-4">{experience.company} · {experience.period}</div>
                <p className="text-zinc-300 leading-relaxed">{experience.description}</p>
                {experience.bullets && (
                  <ul className="mt-4 space-y-2 text-sm text-zinc-400 list-disc pl-5">
                    {experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                  </ul>
                )}
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 z-10 flex items-center justify-center" initial={{ scale: 0 }} whileInView={{ scale: 1 }} transition={{ duration: 0.3 }} viewport={{ once: true }}>
                <div className="w-2 h-2 rounded-full bg-white" />
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
