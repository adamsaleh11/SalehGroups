"use client";

import { motion, Variants, MotionProps, useInView } from "framer-motion";
import { useRef, ElementType } from "react";
import { cn } from "@/lib/utils";
import React from "react";

interface FlipTextProps extends MotionProps {
  /** The duration of the animation */
  duration?: number;
  /** The delay between each character */
  delayMultiple?: number;
  /** The variants of the animation for each character */
  characterVariants?: Variants;
  /** Additional class names for the parent wrapper */
  className?: string;
  /** The HTML element or component for the text (defaults to span) */
  as?: ElementType;
  /** The children of the component */
  children: React.ReactNode;
}

const defaultCharacterVariants: Variants = {
  hidden: { rotateX: -90, opacity: 0 },
  visible: { rotateX: 0, opacity: 1 },
};

const parentVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      // Adjust staggerChildren to control how quickly each char animates in sequence
      staggerChildren: 0.05,
    },
  },
};

export function FlipText({
  children,
  duration = 0.5,
  delayMultiple = 0.08, // not strictly necessary if you use stagger above
  characterVariants,
  className,
  as: Component = "span",
  ...props
}: FlipTextProps) {
  // Framer’s motion.create(...) is not strictly required; you could just do motion.span below
  const MotionComponent = motion(Component);
  const characters = React.Children.toArray(children).join("").split("");

  // This ref + useInView will control whether the text has come into view yet
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      variants={parentVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={cn(
        // Matching the WordPullUp Tailwind classes:
        "font-display text-center text-3xl font-bold leading-[5rem] tracking-[-0.02em] drop-shadow-sm",
        className
      )}
      {...props}
    >
      {characters.map((char, i) => (
        <MotionComponent
          key={i}
          variants={characterVariants || defaultCharacterVariants}
          transition={{
            duration,
            delay: i * delayMultiple,
          }}
          // We inline-block each character so it can flip independently
          style={{ display: "inline-block" }}
          className="origin-center"
        >
          {/* Preserve whitespace by replacing empty chars with a non-breaking space */}
          {char === "" ? "\u00A0" : char}
        </MotionComponent>
      ))}
    </motion.div>
  );
}
