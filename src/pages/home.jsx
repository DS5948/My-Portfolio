import { FaCss3Alt, FaHtml5, FaJava, FaNodeJs, FaReact, FaPython } from "react-icons/fa";
import {
  SiApachekafka,
  SiExpress,
  SiLeetcode,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiReactquery,
  SiSocketdotio,
  SiHibernate,
  SiFastapi,
  SiSqlite,
  SiRedis,
  SiPandas,
} from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import {
  ArrowRight,
  BookOpenCheck,
  Braces,
  Brain,
  Bug,
  Code,
  Database,
  GitBranch,
  Github,
  Key,
  Layers3,
  Leaf,
  Linkedin,
  Mail,
  Network,
  Package,
  Phone,
  Send,
  Server,
  Trophy,
} from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/project-card";
import { SkillBadge } from "@/components/skill-badge";
import { Timeline } from "@/components/timeline";
import { ContactForm } from "@/components/contact-form";
import { CreativeHero } from "@/components/creative-hero";
import { FloatingNav } from "@/components/floating-nav";
import { MouseFollower } from "@/components/mouse-follower";
import { ScrollProgress } from "@/components/scroll-progress";
import { SectionHeading } from "@/components/section-heading";
import { GlassmorphicCard } from "@/components/glassmorphic-card";
import { AchievementsTimeline } from "@/components/achievements-timeline";
import { SkillCategory } from "@/components/skill-category";

const stats = [
  { value: "6 months", label: "Software Engineering Internship" },
  { value: "1000+", label: "DSA Problems Solved" },
  { value: "7.55", label: "B.Tech CGPA" },
  { value: "2", label: "Featured Production Projects" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />
      <CreativeHero className="fixed inset-0 z-0 pointer-events-none" />

      <div className="relative z-10">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
          <div className="container relative z-10 flex flex-col items-center justify-center text-center">
            <div className="space-y-6 max-w-5xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="inline-block">
                  <div className="relative px-4 py-1.5 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 mt-4">
                    <span className="relative z-10">
                      Software Engineer · Java · Spring Boot · React
                    </span>
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 animate-pulse" />
                  </div>
                </div>
              </motion.div>

              <motion.h1
                className="text-5xl md:text-7xl font-bold tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <span className="block">Hi, I'm</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-600">
                  Dheeraj Sharma
                </span>
              </motion.h1>

              <motion.p
                className="text-lg md:text-xl text-zinc-400 max-w-[820px] mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                B.Tech in Computer Science and Engineering from MNNIT Allahabad
                with hands-on software engineering experience at Grid Dynamics.
                I build backend and full-stack products using Java, Spring Boot,
                React, NodeJS, REST APIs, Kafka, PostgreSQL, and modern web
                technologies.
              </motion.p>

              <motion.div
                className="flex flex-wrap gap-4 pt-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <a href="#experience">
                  <Button className="relative overflow-hidden group bg-gradient-to-r from-blue-500 to-cyan-500 border-0">
                    <span className="relative z-10 flex items-center">
                      View Experience
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                    <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </Button>
                </a>
                <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="outline"
                    className="border-zinc-700 text-blue-400 hover:text-blue-300 hover:border-zinc-500 bg-transparent"
                  >
                    View Resume
                  </Button>
                </a>
              </motion.div>

              <motion.div
                className="flex gap-4 pt-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
              >
                <a
                  href="https://github.com/DS5948"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </Button>
                </a>
                <a
                  href="https://www.linkedin.com/in/dheeraj5948"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                  >
                    <Linkedin className="h-5 w-5" />
                    <span className="sr-only">LinkedIn</span>
                  </Button>
                </a>
                <a href="mailto:dheerajsharma5948@gmail.com">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </a>
              </motion.div>
            </div>
          </div>

          <motion.div
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
              <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse" />
            </div>
          </motion.div>
        </section>

        <section id="about" className="py-28 relative px-4">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
            <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
          </div>

          <div className="container relative z-10">
            <SectionHeading
              title="About Me"
              subtitle="Backend-focused, full-stack capable"
            />

            <div className="mt-16">
              <GlassmorphicCard>
                <div className="grid lg:grid-cols-[1.5fr_1fr] gap-10 items-start">
                  <div>
                    <p className="text-lg text-zinc-300 leading-relaxed">
                      I am a Computer Science and Engineering graduate from
                      MNNIT Allahabad with professional experience building
                      enterprise backend features at Grid Dynamics. During my
                      internship, I worked on TalentGrid, an AI-native workforce
                      intelligence platform, using Java, Spring Boot, React,
                      Apache Kafka, PostgreSQL, and microservices.
                    </p>
                    <p className="text-lg text-zinc-300 mt-4 leading-relaxed">
                      My work spans RESTful API design, layered backend
                      architecture, databases, real-time systems, and responsive
                      frontend development. Outside professional work, I have
                      built collaborative coding and conference platforms and
                      solved 1000+ data structures and algorithms problems
                      across LeetCode and GeeksforGeeks.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8 text-sm">
                      <div>
                        <div className="text-zinc-500">Email</div>
                        <a
                          className="font-medium hover:text-blue-400 transition-colors"
                          href="mailto:dheerajsharma5948@gmail.com"
                        >
                          dheerajsharma5948@gmail.com
                        </a>
                      </div>
                      <div>
                        <div className="text-zinc-500">Focus</div>
                        <div className="font-medium">
                          Backend & Full-Stack Engineering
                        </div>
                      </div>
                      <div>
                        <div className="text-zinc-500">Education</div>
                        <div className="font-medium">
                          B.Tech CSE, MNNIT Allahabad
                        </div>
                      </div>
                      <div>
                        <div className="text-zinc-500">Status</div>
                        <div className="font-medium text-green-400">
                          Open to Software Engineering roles
                        </div>
                      </div>
                    </div>

                    <div className="mt-8">
                      <a href="/resume.pdf" download>
                        <Button className="bg-zinc-800 hover:bg-zinc-700 text-white">
                          Download Resume
                        </Button>
                      </a>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {stats.map((stat) => (
                      <div
                        key={stat.label}
                        className="rounded-xl border border-zinc-700/60 bg-zinc-900/40 p-5 min-h-28 flex flex-col justify-center"
                      >
                        <div className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-500">
                          {stat.value}
                        </div>
                        <div className="text-sm text-zinc-400 mt-1">
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </section>

        <section id="experience" className="py-28 relative px-4">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
          </div>

          <div className="container relative z-10">
            <SectionHeading
              title="Experience & Education"
              subtitle="Professional and academic journey"
            />
            <div className="mt-16">
              <Timeline />
            </div>
          </div>
        </section>

        <section id="projects" className="py-28 relative px-4">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
          </div>

          <div className="container relative z-10">
            <SectionHeading
              title="Featured Projects"
              subtitle="Projects highlighted in my latest resume"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              <ProjectCard
                title="CodeForge – Real-time Collaborative Code Editor"
                description="Collaborative coding platform with real-time code sync, WebRTC voice chat, JWT-authenticated rooms, Judge0 code execution, code battles, and leaderboards."
                tags={[
                  "React",
                  "Node.js",
                  "Express.js",
                  "Socket.IO",
                  "WebRTC",
                  "JWT",
                  "Judge0",
                  "CodeMirror",
                  "React Query",
                ]}
                image="/codeforge.png"
                demoUrl="https://codeforge-blue.vercel.app/"
                repoUrl="https://github.com/DS5948/Codeforge"
              />

              <ProjectCard
                title="InsightPilot – AI-Powered Business Intelligence Assistant"
                description="AI-powered analytics assistant that analyzes CSV datasets, generates interactive charts, and answers natural-language questions using SQL, Pandas, LangGraph, and RAG over uploaded business documents."
                tags={[
                  "React",
                  "Python",
                  "FastAPI",
                  "Pandas",
                  "SQLite",
                  "LangGraph",
                  "Groq LLM",
                  "ChromaDB",
                  "RAG",
                ]}
                image="/insightpilot.png"
                demoUrl="https://insight-pilot-bay.vercel.app/"
                repoUrl="https://github.com/DS5948/InsightPilot"
              />

              <ProjectCard
                title="Official Website for 52nd IMMUNOCON 2025"
                description="Web platform for the 52nd International Indian Immunology Society conference at MNNIT Allahabad, covering registration, abstract submission, event information, and responsive client-side workflows."
                tags={[
                  "React",
                  "Node.js",
                  "Express.js",
                  "MongoDB",
                  "React Query",
                  "Tailwind CSS",
                  "REST APIs",
                ]}
                image="/immunocon.png"
                demoUrl="https://immunocon2025.com/"
                repoUrl="https://github.com/DS5948/Immunocon2025"
              />

              <ProjectCard
                title="Instagram-like Social Media Website"
                description="Developed a social media platform with post creation (images/videos), likes, comments, private/public profiles, real-time chat, notifications, and media storage using Cloudinary, React Query for state management, and a responsive UI with Tailwind CSS."
                tags={[
                  "MERN Stack",
                  "Cloudinary",
                  "React Query",
                  "Tailwind CSS",
                ]}
                image="/instagram.png"
                demoUrl="https://twitter-clone-olive-five.vercel.app"
                repoUrl="https://github.com/DS5948/Twitter-Clone"
              />
            </div>
          </div>
        </section>

        <section id="skills" className="py-28 relative px-4">
  <div className="absolute inset-0 z-0">
    <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
    <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
  </div>

  <div className="container relative z-10">
    <SectionHeading
      title="Technical Skills"
      subtitle="Technologies from my latest resume and professional work"
    />

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
      <SkillCategory title="Languages & Frontend">
        <SkillBadge
          name="Java"
          icon={<FaJava className="h-8 w-8 text-orange-400" />}
        />
        <SkillBadge
          name="JavaScript"
          icon={<IoLogoJavascript className="h-8 w-8 text-yellow-400" />}
        />
        <SkillBadge
          name="Python"
          icon={<FaPython className="h-8 w-8 text-yellow-400" />}
        />
        <SkillBadge
          name="React"
          icon={<FaReact className="h-8 w-8 text-blue-400" />}
        />
        <SkillBadge
          name="HTML5"
          icon={<FaHtml5 className="h-8 w-8 text-orange-500" />}
        />
        <SkillBadge
          name="CSS3"
          icon={<FaCss3Alt className="h-8 w-8 text-blue-400" />}
        />
        <SkillBadge
          name="Tailwind CSS"
          icon={<RiTailwindCssFill className="h-8 w-8 text-cyan-400" />}
        />
        <SkillBadge
          name="React Query"
          icon={<SiReactquery className="h-8 w-8 text-red-400" />}
        />
        <SkillBadge
          name="JSON"
          icon={<Braces className="h-8 w-8 text-zinc-200" />}
        />
      </SkillCategory>

      <SkillCategory title="Backend & APIs">
        <SkillBadge
          name="Spring Boot"
          icon={<Leaf className="h-8 w-8 text-green-400" />}
        />
        <SkillBadge
          name="Spring MVC"
          icon={<Layers3 className="h-8 w-8 text-green-300" />}
        />
        <SkillBadge
          name="Spring Data JPA"
          icon={<Database className="h-8 w-8 text-green-400" />}
        />
        <SkillBadge
          name="Hibernate"
          icon={<SiHibernate className="h-8 w-8 text-violet-400" />}
        />
        <SkillBadge
          name="JDBC"
          icon={<Database className="h-8 w-8 text-blue-300" />}
        />
        <SkillBadge
          name="Node.js"
          icon={<FaNodeJs className="h-8 w-8 text-green-400" />}
        />
        <SkillBadge
          name="Express.js"
          icon={<SiExpress className="h-8 w-8 text-white" />}
        />
        <SkillBadge
          name="FastAPI"
          icon={<SiFastapi className="h-8 w-8 text-teal-400" />}
        />
        <SkillBadge
          name="REST APIs"
          icon={<Server className="h-8 w-8 text-blue-400" />}
        />
        <SkillBadge
          name="Microservices"
          icon={<Network className="h-8 w-8 text-cyan-400" />}
        />
        <SkillBadge
          name="JWT"
          icon={<Key className="h-8 w-8 text-yellow-400" />}
        />
      </SkillCategory>

      <SkillCategory title="Data & Real-time Systems">
        <SkillBadge
          name="PostgreSQL"
          icon={<SiPostgresql className="h-8 w-8 text-blue-400" />}
        />
        <SkillBadge
          name="MySQL"
          icon={<SiMysql className="h-8 w-8 text-blue-300" />}
        />
        <SkillBadge
          name="MongoDB"
          icon={<SiMongodb className="h-8 w-8 text-green-500" />}
        />
        <SkillBadge
          name="SQLite"
          icon={<SiSqlite className="h-8 w-8 text-blue-300" />}
        />
        <SkillBadge
          name="Apache Kafka"
          icon={<SiApachekafka className="h-8 w-8 text-white" />}
        />
        <SkillBadge
          name="Socket.IO"
          icon={<SiSocketdotio className="h-8 w-8 text-white" />}
        />
        <SkillBadge
          name="WebSockets"
          icon={<Network className="h-8 w-8 text-cyan-400" />}
        />
        <SkillBadge
          name="ChromaDB"
          icon={<Database className="h-8 w-8 text-purple-400" />}
        />
      </SkillCategory>

      <SkillCategory title="AI, Tools & Testing">
        <SkillBadge
          name="LangGraph"
          icon={<Network className="h-8 w-8 text-purple-400" />}
        />
        <SkillBadge
          name="RAG"
          icon={<Database className="h-8 w-8 text-cyan-400" />}
        />
        <SkillBadge
          name="LLM Integration"
          icon={<Brain className="h-8 w-8 text-pink-400" />}
        />
        <SkillBadge
          name="Pandas"
          icon={<SiPandas className="h-8 w-8 text-blue-400" />}
        />
        <SkillBadge
          name="GitHub"
          icon={<Github className="h-8 w-8 text-white" />}
        />
        <SkillBadge
          name="Git"
          icon={<GitBranch className="h-8 w-8 text-orange-400" />}
        />
        <SkillBadge
          name="VS Code"
          icon={<Code className="h-8 w-8 text-blue-400" />}
        />
        <SkillBadge
          name="Postman"
          icon={<Send className="h-8 w-8 text-orange-400" />}
        />
        <SkillBadge
          name="Maven"
          icon={<Package className="h-8 w-8 text-red-400" />}
        />
        <SkillBadge
          name="JUnit"
          icon={<Bug className="h-8 w-8 text-green-400" />}
        />
      </SkillCategory>
    </div>
  </div>
</section>

        <section id="achievements" className="py-28 relative px-4">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
            <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
          </div>

          <div className="container relative z-10">
            <SectionHeading
              title="Achievements & Leadership"
              subtitle="Certifications, competitions, problem solving, and campus roles"
            />

            <div className="mt-16">
              <AchievementsTimeline />
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-12 max-w-5xl mx-auto">
              <GlassmorphicCard>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
                    <Trophy className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      Coordinator · Astro Club MNNIT
                    </h3>
                    <p className="text-zinc-400 mt-2">
                      Position of responsibility at MNNIT Allahabad.
                    </p>
                  </div>
                </div>
              </GlassmorphicCard>
              <GlassmorphicCard>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 shrink-0 rounded-full bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                    <BookOpenCheck className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">
                      Web Team · Institute Innovation Council
                    </h3>
                    <p className="text-zinc-400 mt-2">
                      Contributed as a member of the IIC web team at MNNIT.
                    </p>
                  </div>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </section>

        <section id="profiles" className="py-28 relative px-4">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
            <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
          </div>

          <div className="container relative z-10">
            <SectionHeading
              title="Profiles"
              subtitle="Code, professional experience, and problem solving"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <ProfileCard
                title="GitHub"
                description="Projects and source code."
                href="https://github.com/DS5948/"
                icon={<Github className="h-7 w-7 text-blue-400" />}
              />
              <ProfileCard
                title="LinkedIn"
                description="Professional profile and experience."
                href="https://www.linkedin.com/in/dheeraj5948"
                icon={<Linkedin className="h-7 w-7 text-blue-400" />}
              />
              <ProfileCard
                title="LeetCode"
                description="Data structures and algorithms practice."
                href="https://leetcode.com/Dheeraj_Sharma1/"
                icon={<SiLeetcode className="h-7 w-7 text-blue-400" />}
              />
            </div>
          </div>
        </section>

        <section id="contact" className="py-28 relative px-4">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
            <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10" />
          </div>

          <div className="container relative z-10">
            <SectionHeading
              title="Get In Touch"
              subtitle="Open to software engineering opportunities"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-stretch mt-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <GlassmorphicCard className="h-full">
                  <h3 className="text-2xl font-bold mb-6">
                    Contact Information
                  </h3>
                  <div className="space-y-6">
                    <ContactItem
                      icon={<Mail className="h-5 w-5 text-blue-400" />}
                      label="Email"
                      value="dheerajsharma5948@gmail.com"
                      href="mailto:dheerajsharma5948@gmail.com"
                    />
                    <ContactItem
                      icon={<Phone className="h-5 w-5 text-blue-400" />}
                      label="Phone"
                      value="+91 85179 22725"
                      href="tel:+918517922725"
                    />
                    <ContactItem
                      icon={<Linkedin className="h-5 w-5 text-blue-400" />}
                      label="LinkedIn"
                      value="linkedin.com/in/dheeraj5948"
                      href="https://www.linkedin.com/in/dheeraj5948"
                    />
                    <ContactItem
                      icon={<Github className="h-5 w-5 text-blue-400" />}
                      label="GitHub"
                      value="github.com/DS5948"
                      href="https://github.com/DS5948"
                    />
                  </div>

                  <div className="mt-8 pt-8 border-t border-zinc-800">
                    <h4 className="text-lg font-medium mb-4">Current Status</h4>
                    <div className="flex items-center gap-2 text-zinc-300">
                      <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse" />
                      <span>Open to Software Engineering roles</span>
                    </div>
                  </div>
                </GlassmorphicCard>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.15 }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>

        <footer className="border-t border-zinc-800 py-12 px-4">
          <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <a href="#" className="font-bold text-xl">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-600">
                  Dheeraj
                </span>
                <span className="text-white">Sharma</span>
              </a>
              <p className="text-sm text-zinc-500 mt-2">
                © {new Date().getFullYear()} Dheeraj Sharma. All rights
                reserved.
              </p>
            </div>
            <div className="flex gap-4">
              <SocialButton
                href="https://github.com/DS5948/"
                label="GitHub"
                icon={<Github className="h-5 w-5" />}
              />
              <SocialButton
                href="https://www.linkedin.com/in/dheeraj5948"
                label="LinkedIn"
                icon={<Linkedin className="h-5 w-5" />}
              />
              <SocialButton
                href="mailto:dheerajsharma5948@gmail.com"
                label="Email"
                icon={<Mail className="h-5 w-5" />}
              />
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

function ProfileCard({ title, description, href, icon }) {
  return (
    <GlassmorphicCard>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-full flex items-center justify-center bg-zinc-900/50">
          {icon}
        </div>
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-zinc-400">{description}</p>
        </div>
      </div>
      <div className="mt-6">
        <a href={href} target="_blank" rel="noopener noreferrer">
          <Button
            size="sm"
            className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-cyan-500 hover:to-blue-500 border-0"
          >
            Visit Profile <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
    </GlassmorphicCard>
  );
}

function ContactItem({ icon, label, value, href }) {
  const external = href.startsWith("http");
  return (
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 shrink-0 rounded-full bg-zinc-800 flex items-center justify-center">
        {icon}
      </div>
      <div className="min-w-0">
        <div className="text-sm text-zinc-500">{label}</div>
        <a
          href={href}
          target={external ? "_blank" : undefined}
          rel={external ? "noopener noreferrer" : undefined}
          className="font-medium hover:text-blue-400 transition-colors break-all"
        >
          {value}
        </a>
      </div>
    </div>
  );
}

function SocialButton({ href, label, icon }) {
  const external = href.startsWith("http");
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
    >
      <Button
        variant="ghost"
        size="icon"
        className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
      >
        {icon}
        <span className="sr-only">{label}</span>
      </Button>
    </a>
  );
}
