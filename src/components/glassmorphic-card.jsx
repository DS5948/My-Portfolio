"use client"
import { motion } from "framer-motion"
import { cn } from "../lib/utils"

export function GlassmorphicCard({ children, className }) {
  return (
    <motion.div
      className={cn("bg-white/5 backdrop-blur-lg rounded-xl border border-white/10 shadow-lg p-8", className)}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  )
}
