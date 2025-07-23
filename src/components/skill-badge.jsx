"use client"
import { motion } from "framer-motion"
import { GlassmorphicCard } from "./glassmorphic-card"

export function SkillBadge({ name, icon }) {
  return (
    <motion.div
      className="flex flex-col items-center text-center p-4"
      whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
    >
      <GlassmorphicCard className="p-4 flex flex-col items-center justify-center w-28 h-28">
        <div className="mb-2">{icon}</div>
        <span className="text-sm font-medium text-white">{name}</span>
      </GlassmorphicCard>
    </motion.div>
  )
}
