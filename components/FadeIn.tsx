"use client";
import { motion } from "framer-motion";
import { ReactNode } from "react";

export default function FadeIn({
  children,
  delay = 0,
  initialX = 0,
  initialY = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  initialX?: number;
  initialY?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: initialX, y: initialY }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
