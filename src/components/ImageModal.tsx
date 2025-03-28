"use client";
import { useState, useEffect, useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion } from "framer-motion";

interface ImageModalProps {
  src: StaticImageData;
  alt: string;
  children: React.ReactNode;
  className?: string;
}

export default function ImageModal({
  src,
  alt,
  children,
  className = "",
}: ImageModalProps) {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    };

    const handleEscapeKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModal();
      }
    };

    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflowY = "hidden";

      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscapeKey);
    } else {
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflowY = "";
      if (scrollY) {
        window.scrollTo(0, Number.parseInt(scrollY || "0", 10) * -1);
      }
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscapeKey);
    };
  }, [isOpen]);

  return (
    <>
      <div onClick={openModal} className={`cursor-pointer ${className}`}>
        {children}
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.2 }}
          className="bg-opacity-50 fixed inset-0 z-50 flex items-center justify-center bg-black/90"
        >
          <div ref={modalRef} className="relative">
            <Image
              src={src}
              alt={alt}
              priority
              className="max-h-[80dvh] max-w-[90dvw] object-contain md:max-h-[90dvh] md:max-w-[70dvw]"
            />
          </div>
          <button
            onClick={closeModal}
            className="absolute top-0 right-0 m-[1.6rem] cursor-pointer font-serif text-white drop-shadow-lg hover:underline hover:underline-offset-2 md:right-[6rem]"
          >
            Close
          </button>
        </motion.div>
      )}
    </>
  );
}
