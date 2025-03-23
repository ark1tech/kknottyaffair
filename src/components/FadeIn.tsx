"use client";
import { motion } from "motion/react";

interface AnimatedParagraphProps {
  children: React.ReactNode;
  delay?: number;
}

const FadeIn = ({ children, delay = 0 }: AnimatedParagraphProps) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -40 }}
    viewport={{ once: false }}
    transition={{ duration: 0.7, delay }}
  >
    {children}
  </motion.div>
);
export default FadeIn;
