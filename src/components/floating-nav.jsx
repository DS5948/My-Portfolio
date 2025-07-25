"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/button";
import { useMobile } from "@/hooks/use-mobile"; // This must be JS-compatible or rewritten

export function FloatingNav() {
  const [isVisible, setIsVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const isMobile = useMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Profiles", href: "#profiles" },
    { name: "Contact", href: "#contact" },
  ];

  const handleNavClick = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  return (
    <>
      <motion.div
        className={`fixed top-6 right-0 z-50 ${
          isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="relative px-4 py-3 rounded-full bg-zinc-800/80 backdrop-blur-md border border-zinc-700/50 shadow-lg">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur opacity-50"></div>

          {isMobile ? (
            <div className="relative flex items-center justify-between">
              <a href="/" className="font-bold text-lg">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-600">
                  Dheeraj
                </span>
                <span className="text-white">Sharma</span>
              </a>
              <Button
                variant="ghost"
                size="icon"
                className="text-zinc-400 hover:text-white hover:bg-zinc-700/50"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          ) : (
            <div className="relative flex items-center gap-1">
              <a href="/" className="font-bold text-lg mr-4">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-600">
                  Dheeraj
                </span>
                <span className="text-white">Sharma</span>
              </a>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="px-3 py-1 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                  onClick={handleNavClick}
                >
                  {item.name}
                </a>
              ))}
              <a href="/resume.pdf" download >
              <Button
                size="sm"
                className="ml-2 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-cyan-500 hover:to-blue-500 border-0"
              >
                Resume
              </Button>
              </a>
            </div>
          )}
        </div>
      </motion.div>

      {/* Mobile menu */}
      {isMobile && (
        <motion.div
          className={`fixed inset-0 z-40 bg-black/90 backdrop-blur-md ${
            isOpen ? "block" : "hidden"
          }`}
          initial={{ opacity: 0 }}
          animate={{ opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-center justify-center h-full">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-8 py-4 text-2xl font-medium text-white hover:text-blue-400 transition-colors"
                onClick={handleNavClick}
              >
                {item.name}
              </a>
            ))}
            <a href="/resume.pdf" download >
            <Button className="mt-6 bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-cyan-500 hover:to-blue-500 border-0">
              Resume
            </Button>
            </a>
          </div>
        </motion.div>
      )}
    </>
  );
}
