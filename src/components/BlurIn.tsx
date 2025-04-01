"use client";
import { motion } from "framer-motion";
import { CSSProperties } from "react";

interface BlurInProps {
  children?: React.ReactNode;
  delay?: number;
  className?: string;
  style?: CSSProperties;
}

const BlurIn = ({
  children,
  delay = 0,
  className = "",
  style = {},
}: BlurInProps) => (
  <motion.div
    className={className}
    style={style}
    initial={{ opacity: 0, filter: "blur(5px)", y: 10, scale: 1.2 }}
    animate={{ opacity: 1, filter: "blur(0px)", y: 0, scale: 1 }}
    transition={{ duration: 0.8, delay }}
  >
    {children}
  </motion.div>
);

export default BlurIn;
