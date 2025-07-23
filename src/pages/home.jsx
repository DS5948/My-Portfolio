import { Link } from "react-router-dom";
import { FaReact, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiWebrtc, SiCodemirror, SiReactquery, SiShadcnui, SiExpress, SiMongodb, SiMysql, SiSocketdotio } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { IoLogoJavascript } from "react-icons/io5";
import {
  ArrowRight,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  Triangle,
  Code,
  Type,
  Palette,
  Wind,
  Redo,
  RefreshCw,
  Layout,
  FormInput,
  Leaf,
  Server,
  Database,
  Network,
  Bot,
  Zap,
  Flame,
  Key,
  Lock,
  GitBranch,
  Container,
  MessageSquare,
  Send,
  Bug,
  Cloud,
  Move,
  Shield,
  Video,
  Radio,
  Share2,
  Camera,
  Cpu,
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

export default function Home() {

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <MouseFollower />
      <ScrollProgress />
      <FloatingNav />

      {/* CreativeHero as a fixed, full-page background */}
      <CreativeHero className="fixed inset-0 z-0 pointer-events-none" />

      {/* All other content wrapped in a relative z-10 div */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="container relative z-10 flex flex-col items-center justify-center text-center">
            <div className="space-y-6">
              <motion.div // Animation for the badge
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="inline-block">
                  <div className="relative px-3 py-1 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-4 mt-4">
                    <span className="relative z-10">
                      Aspiring Software Engineer & Creative Developer
                    </span>
                    <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 animate-pulse"></span>
                  </div>
                </div>
              </motion.div>

              <motion.h1 // Animation for the main heading
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

              <motion.p // Animation for the description
                className="text-xl text-zinc-400 max-w-[700px] mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Aspiring SDE with MERN stack skills, experienced in real-time
                apps, REST APIs, and scalable systems. Solved 600+ DSA problems.
                Seeking SDE internships to apply backend and systems expertise.
              </motion.p>

              <motion.div // Animation for the buttons
                className="flex flex-wrap gap-4 pt-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
              >
                <a href="#projects">
                <Button className="relative overflow-hidden group bg-gradient-to-r from-blue-500 to-cyan-500 border-0">
                  <span className="relative z-10 flex items-center">
                    View Projects{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                </Button>
                </a>
                <a href="#contact">
                <Button
                  variant="outline"
                  className="border-zinc-700 text-blue-500 hover:text-blue-700 hover:border-zinc-500 bg-transparent"
                >
                  Contact Me
                </Button>
                </a>
              </motion.div>

              <motion.div // Animation for the social links
                className="flex gap-4 pt-4 justify-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.0 }}
              >
                <Link
                  href="https://github.com/dheeraj5948"
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
                </Link>
                <Link
                  href="https://www.linkedin.com/in/DS5948"
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
                </Link>
                <Link href="mailto:dheeraj.20223084@mnnit.ac.in">
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                  >
                    <Mail className="h-5 w-5" />
                    <span className="sr-only">Email</span>
                  </Button>
                </Link>
              </motion.div>
            </div>
          </div>

          <motion.div // Animation for the scroll indicator
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.2 }}
          >
            <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
              <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
            </div>
          </motion.div>
        </section>

        {/* About Section */}
        <section id="about" className="py-32 relative">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          </div>

          <div className="container relative z-10">
            <SectionHeading
              title="About Me"
              subtitle="My background and journey"
            />

            <div className="grid grid-cols-1 md:grid-cols-1 gap-12 items-center mt-16">
              <div className="space-y-6 w-full">
                <GlassmorphicCard>
                  <p className="text-lg text-zinc-300">
                    I'm an aspiring Software Development Engineer skilled in
                    full stack web development (MERN) with experience in
                    real-time applications, RESTful APIs, and scalable system
                    architectures. I have solved 600+ DSA problems across
                    various platforms.
                  </p>
                  <p className="text-lg text-zinc-300 mt-4">
                    My academic journey at Motilal Nehru National Institute of
                    Technology Allahabad has provided me with a strong
                    foundation in Computer Science and Engineering. I am
                    actively seeking SDE internships and roles to apply my
                    backend and systems knowledge.
                  </p>
                  <p className="text-lg text-zinc-300 mt-4">
                    Beyond coding, I enjoy exploring new technologies,
                    contributing to open-source projects, and staying updated
                    with the latest industry trends. I am passionate about
                    crafting exceptional digital experiences with code and
                    creativity.
                  </p>

                  <div className="grid grid-cols-2 gap-4 mt-8">
                    <div className="space-y-1">
                      <div className="text-sm text-zinc-500">Name</div>
                      <div className="font-medium">Dheeraj Sharma</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-zinc-500">Email</div>
                      <div className="font-medium">
                        dheerajsharma5948@gmail.com
                      </div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-zinc-500">Location</div>
                      <div className="font-medium">Prayagraj, India</div>
                    </div>
                    <div className="space-y-1">
                      <div className="text-sm text-zinc-500">Availability</div>
                      <div className="font-medium text-green-500">
                        Open to opportunities
                      </div>
                    </div>
                  </div>

                  <div className="mt-8">
                    <a href="/resume.pdf" download >
                    <Button className="bg-zinc-800 hover:bg-zinc-700 text-white">
                      Download Resume
                    </Button>
                    </a>
                  </div>
                </GlassmorphicCard>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-32 relative">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          </div>

          <div className="container relative z-10">
            <SectionHeading
              title="My Skills"
              subtitle="Technologies I work with"
            />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <SkillCategory title="Frontend">
                <SkillBadge
                  name="React"
                  icon={<FaReact className="h-8 w-8 text-blue-400" />}
                />
                <SkillBadge
                  name="JavaScript"
                  icon={<IoLogoJavascript className="h-8 w-8 text-yellow-400" />}
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
                  icon={<RiTailwindCssFill className="h-8 w-8 text-teal-400" />}
                />
                <SkillBadge
                  name="ShadCN/UI"
                  icon={<SiShadcnui className="h-8 w-8 text-white" />}
                />
                <SkillBadge
                  name="React Query"
                  icon={<SiReactquery className="h-8 w-8 text-teal-400" />}
                />
                <SkillBadge
                  name="CodeMirror"
                  icon={<SiCodemirror className="h-8 w-8 text-white" />}
                />
                <SkillBadge
                  name="WebRTC"
                  icon={<SiWebrtc className="h-8 w-8 text-white" />}
                />
              </SkillCategory>

              <SkillCategory title="Backend">
                <SkillBadge
                  name="Node.js"
                  icon={<FaNodeJs className="h-8 w-8 text-green-400" />}
                />
                <SkillBadge
                  name="Express.js"
                  icon={<SiExpress className="h-8 w-8 text-white" />}
                />
                <SkillBadge
                  name="MongoDB"
                  icon={<SiMongodb className="h-8 w-8 text-green-500" />}
                />
                <SkillBadge
                  name="MySQL"
                  icon={<SiMysql  className="h-8 w-8 text-white" />}
                />
                <SkillBadge
                  name="REST APIs"
                  icon={<Code className="h-8 w-8 text-blue-400" />}
                />
                <SkillBadge
                  name="Socket.IO"
                  icon={<SiSocketdotio  className="h-8 w-8 text-white" />}
                />
                <SkillBadge
                  name="JWT Auth"
                  icon={<Key className="h-8 w-8 text-yellow-400" />}
                />
              </SkillCategory>

              <SkillCategory title="Tools">
                <SkillBadge
                  name="Git"
                  icon={<GitBranch className="h-8 w-8 text-orange-400" />}
                />
                <SkillBadge
                  name="GitHub"
                  icon={<Github className="h-8 w-8 text-white" />}
                />
                <SkillBadge
                  name="Postman"
                  icon={<Send className="h-8 w-8 text-orange-400" />}
                />
                <SkillBadge
                  name="VS Code"
                  icon={<Code className="h-8 w-8 text-blue-400" />}
                />
                <SkillBadge
                  name="Cloudinary"
                  icon={<Cloud className="h-8 w-8 text-teal-400" />}
                />
                <SkillBadge
                  name="OpenCV"
                  icon={<Camera className="h-8 w-8 text-green-400" />}
                />
                <SkillBadge
                  name="Arduino"
                  icon={<Cpu className="h-8 w-8 text-cyan-400" />}
                />
                <SkillBadge
                  name="Vercel"
                  icon={<Triangle className="h-8 w-8 text-white" />}
                />
              </SkillCategory>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-32 relative">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          </div>

          <div className="container relative z-10">
            <SectionHeading
              title="Featured Projects"
              subtitle="Some of my recent work"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              <ProjectCard
                title="Collaborative Code Editor - CodeForge"
                description="Built a real-time collaborative code editor with Socket.IO (live sync), WebRTC (voice chat), JWT auth, and CodeMirror-based UI."
                tags={[
                  "MERN Stack",
                  "Socket.IO",
                  "WebRTC",
                  "JWT",
                  "CodeMirror",
                  "ShadCN",
                  "Tailwind CSS",
                  "React Query",
                ]}
                image="/project1.png"
                demoUrl="https://codeforge-blue.vercel.app/"
                repoUrl="https://github.com/DS5948/Codeforge"
              />
              <ProjectCard
                title="Official Website for IMMUNOCON 2025"
                description="Developed the official MERN stack website for IMMUNOCON 2025 (MNNIT, Allahabad) with user registration, JWT-based authentication, React Query for state management, and a responsive UI using Tailwind CSS."
                tags={["MERN Stack", "JWT", "React Query", "Tailwind CSS"]}
                image="/project2.png"
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
                image="/project3.png"
                demoUrl="https://twitter-clone-olive-five.vercel.app"
                repoUrl="https://github.com/DS5948/Twitter-Clone"
              />
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-32 relative">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          </div>

          <div className="container relative z-10">
            <SectionHeading
              title="Work & Education"
              subtitle="My professional and academic journey"
            />

            <div className="mt-16">
              <Timeline />
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-32 relative">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          </div>

          <div className="container relative z-10">
            <SectionHeading
              title="Achievements"
              subtitle="Hackathons & Competitions"
            />

            <div className="mt-16">
              <AchievementsTimeline />
            </div>
          </div>
        </section>

        {/* Profiles Section */}
        <section id="profiles" className="py-32 relative">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          </div>

          <div className="container relative z-10">
            <SectionHeading
              title="My Profiles"
              subtitle="Connect with me online"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
              <GlassmorphicCard>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">GitHub</h3>
                    <p className="text-zinc-400">
                      My open-source contributions and projects.
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    to="https://github.com/DS5948/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-cyan-500 hover:to-blue-500 border-0"
                    >
                      Visit Profile <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </GlassmorphicCard>

              <GlassmorphicCard>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-6 w-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">LinkedIn</h3>
                    <p className="text-zinc-400">
                      My professional network and experience.
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    to="https://www.linkedin.com/in/dheeraj5948"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-cyan-500 hover:to-blue-500 border-0"
                    >
                      Visit Profile <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </GlassmorphicCard>

              <GlassmorphicCard>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    {/* LeetCode icon - using a generic icon as Lucide doesn't have a specific one */}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6 text-blue-400"
                    >
                      <path d="M16 18h.01" />
                      <path d="M10 18h.01" />
                      <path d="M13 18h.01" />
                      <path d="M19 6H5a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2Z" />
                      <path d="M10 3v3" />
                      <path d="M14 3v3" />
                      <path d="M17 3v3" />
                      <path d="M7 3v3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">LeetCode</h3>
                    <p className="text-zinc-400">
                      My data structures and algorithms problem-solving.
                    </p>
                  </div>
                </div>
                <div className="mt-6">
                  <Link
                    to="https://leetcode.com/Dheeraj_Sharma1/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button
                      size="sm"
                      className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-cyan-500 hover:to-blue-500 border-0"
                    >
                      Visit Profile <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 relative">
          <div className="absolute inset-0 z-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
            <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          </div>

          <div className="container relative z-10">
            <SectionHeading
              title="Get In Touch"
              subtitle="Let's work together"
            />

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
              >
              <GlassmorphicCard>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                      <Mail className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-zinc-500">Email</div>
                      <div className="font-medium">
                        dheerajsharma5948@gmail.com
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                      <Linkedin className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-zinc-500">LinkedIn</div>
                      <div className="font-medium">linkedin.com/in/dheeraj5948</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                      <Github className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-sm text-zinc-500">GitHub</div>
                      <div className="font-medium">github.com/DS5948</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-zinc-800">
                  <h4 className="text-lg font-medium mb-4">Current Status</h4>
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                    <span>Available for SDE internships and roles</span>
                  </div>
                </div>
              </GlassmorphicCard>
</motion.div>
<motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true, amount: 0.5 }}
              >
              <ContactForm />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-zinc-800 py-12">
          <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <Link href="/" className="font-bold text-xl">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-600">
                  Dheeraj
                </span>
                <span className="text-white">Sharma</span>
              </Link>
              <p className="text-sm text-zinc-500 mt-2">
                © {new Date().getFullYear()} Dheeraj Sharma. All rights
                reserved.
              </p>
            </div>
            <div className="flex gap-4">
              <Link
                to="https://github.com/DS5948/"
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
              </Link>
              <Link
                to="https://www.linkedin.com/in/dheeraj5948/"
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
              </Link>
              <Link to="mailto:dheerajsharma5948@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
