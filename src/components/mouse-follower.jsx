"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function MouseFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHoveringLink, setIsHoveringLink] = useState(false);
  const [isHoveringButton, setIsHoveringButton] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateMousePosition);

    const handleMouseEnter = (e) => {
      const target = e.target;
      if (target.tagName === "A" || target.closest("a")) {
        setIsHoveringLink(true);
      }
      if (target.tagName === "BUTTON" || target.closest("button")) {
        setIsHoveringButton(true);
      }
    };

    const handleMouseLeave = (e) => {
      const target = e.target;
      if (target.tagName === "A" || target.closest("a")) {
        setIsHoveringLink(false);
      }
      if (target.tagName === "BUTTON" || target.closest("button")) {
        setIsHoveringButton(false);
      }
    };

    document.addEventListener("mouseover", handleMouseEnter);
    document.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseover", handleMouseEnter);
      document.removeEventListener("mouseout", handleMouseLeave);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      backgroundColor: "rgba(100, 150, 255, 0.3)",
      width: 32,
      height: 32,
      mixBlendMode: "difference",
    },
    link: {
      x: mousePosition.x - 24,
      y: mousePosition.y - 24,
      backgroundColor: "rgba(100, 200, 255, 0.5)",
      width: 48,
      height: 48,
      mixBlendMode: "difference",
    },
    button: {
      x: mousePosition.x - 32,
      y: mousePosition.y - 32,
      backgroundColor: "rgba(100, 255, 200, 0.6)",
      width: 64,
      height: 64,
      mixBlendMode: "difference",
    },
  };

  const cursorVariant = isHoveringButton
    ? "button"
    : isHoveringLink
    ? "link"
    : "default";

  return (
    <motion.div
      className="fixed left-0 top-0 z-[9999] pointer-events-none rounded-full"
      variants={variants}
      animate={cursorVariant}
      transition={{ type: "tween", ease: "backOut", duration: 0.1 }}
    />
  );
}
