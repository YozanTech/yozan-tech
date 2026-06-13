"use client";
import { HTMLMotionProps, motion } from "framer-motion";
import { ReactNode } from "react";

interface FadeInProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  initialX?: number;
  initialY?: number;
  className?: string;
}

export default function FadeIn({
  children,
  delay = 0,
  initialX = 0,
  initialY = 0,
  className = "",
  ...props
}: FadeInProps) {
  // If it's the header or footer, we don't want a negative margin because 
  // elements at the very top or bottom edge might never trigger it.
  return (
    <motion.div
      initial={{ opacity: 0, x: initialX, y: initialY }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "0px" }}
      transition={{ duration: 0.6, delay }}
      className={className}
      {...props}
    >
      {children}
    </motion.div>
  );
}
