"use client";
import { motion } from "framer-motion";

interface BlurInProps {
  children?: React.ReactNode;
  delay?: number;
  className?: string;
}

const BlurIn = ({ children, delay = 0, className = "" }: BlurInProps) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, filter: "blur(20px)", y: 50 }}
    animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
    transition={{ duration: 1, ease: "easeIn", delay }}
  >
    {children}
  </motion.div>
);

export default BlurIn;
