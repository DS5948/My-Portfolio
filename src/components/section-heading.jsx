"use client"
import { motion } from "framer-motion"

export function SectionHeading({ title, subtitle }) {
  return (
    <div className="text-center mb-12">
      <motion.h2
        className="text-4xl md:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-600"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h2>
      <motion.p
        className="mt-4 text-xl text-zinc-400"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {subtitle}
      </motion.p>
    </div>
  )
}
