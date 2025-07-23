"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"

export function TypingEffect({ text, className }) {
  const [displayedText, setDisplayedText] = useState("")
  const [cursorVisible, setCursorVisible] = useState(true)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timeoutId = setTimeout(() => {
        setDisplayedText((prev) => prev + text.charAt(index))
        setIndex((prev) => prev + 1)
      }, 100) // Typing speed

      return () => clearTimeout(timeoutId)
    }
  }, [index, text])

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setCursorVisible((prev) => !prev)
    }, 500) // Cursor blink speed

    return () => clearInterval(cursorInterval)
  }, [])

  return (
    <span className={`bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-600 ${className}`}>
      {displayedText}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: cursorVisible ? 1 : 0 }}
        transition={{ duration: 0.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        className="inline-block w-1 bg-cyan-600 ml-1"
        style={{ height: "1em", verticalAlign: "middle" }}
      >
        |
      </motion.span>
    </span>
  )
}
