import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"

const experiences = [
  {
    title: "Bachelor of Technology, Computer Science and Engineering",
    company: "Motilal Nehru National Institute Of Technology Allahabad, Prayagraj",
    period: "2022 - 2026",
    description:
      "Currently pursuing a Bachelor of Technology in Computer Science and Engineering. CGPA: 7.45 (till 6th semester).",
  },
  {
    title: "Web Developer Intern",
    company: "Innovation and Incubation Hub MNNIT Foundation",
    period: "June 2024 - Aug 2024",
    description:
      "Worked as a web developer Intern at IIHMF Prayagraj. Developed the Official Website of IIHMF (www.iihmf.in).",
  },
  {
    title: "Class 12th",
    company: "SDVM Public School, Gwalior, MP",
    period: "2021",
    description: "Completed Class 12th from Central Board of Secondary Education. Percentage: 82%.",
  },
  {
    title: "Class 10th",
    company: "Vidya Niket School, Gwalior, MP",
    period: "2019",
    description: "Completed Class 10th from Central Board of Secondary Education. CGPA/Percentage: 90.6%.",
  },
]

export function Timeline() {
  const isMobile = useMobile()

  return (
    <div
      className={`space-y-12 relative ${!isMobile ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-zinc-700 before:h-full before:z-0" : ""}`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-blue-500/50">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

              <div className="relative">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <div className="text-zinc-400 mb-4">
                  {experience.company} | {experience.period}
                </div>
                <p className="text-zinc-300">{experience.description}</p>
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 z-10 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
