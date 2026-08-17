"use client"
import { motion } from "framer-motion"
import { GlassmorphicCard } from "./glassmorphic-card"

export function SkillCategory({ title, children }) {
  return (
    <GlassmorphicCard className="p-6">
      <motion.h3
        className="text-2xl font-bold text-white mb-6 text-center"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">{children}</div>
    </GlassmorphicCard>
  )
}
