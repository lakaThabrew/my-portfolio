import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+";

export function RandomLetterSwap({
  label,
  className,
  staggerDuration = 0.025, // default not used strictly in this custom impl, but could be adapted
  transition,
}) {
  const [isHovered, setIsHovered] = useState(false);
  const [displayText, setDisplayText] = useState(label);

  useEffect(() => {
    let timeout;
    let iteration = 0;
    const maxIterations = 15; // Total steps for the animation

    if (isHovered) {
      const scramble = () => {
        if (iteration >= maxIterations) {
          setDisplayText(label);
          return;
        }

        const newText = label
          .split("")
          .map((char, index) => {
            if (char === " ") return " ";
            // Gradually resolve characters from left to right
            const progress = iteration / maxIterations;
            const threshold = progress * label.length;

            if (index < threshold) {
              return label[index];
            }
            return CHARS[Math.floor(Math.random() * CHARS.length)];
          })
          .join("");

        setDisplayText(newText);
        iteration++;
        timeout = setTimeout(scramble, 30); // ~30ms per frame
      };

      scramble();
    } else {
      // Instantly reset when mouse leaves
      setDisplayText(label);
    }

    return () => clearTimeout(timeout);
  }, [isHovered, label]);

  return (
    <motion.span
      className={className}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      transition={transition}
    >
      {displayText}
    </motion.span>
  );
}
