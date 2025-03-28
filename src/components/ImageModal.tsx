"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface ImageModalProps {
  src: string;
  alt: string;
  className?: string;
}

export default function ImageModal({ src, alt, className }: ImageModalProps) {
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
      <div onClick={openModal} className={`cursor-pointer`}>
        <Image
          src={src}
          alt={alt}
          fill
          priority
          className={`image-grid object-cover ${className}`}
        />
      </div>

      {isOpen && (
        <div className="bg-opacity-75 fixed inset-0 z-50 flex items-center justify-center bg-black/90">
          <div ref={modalRef} className="relative">
            <Image
              src={src}
              alt={alt}
              width={1000}
              height={1000}
              sizes="50vw"
              className="max-h-[80dvh] max-w-[90dvw] object-contain md:max-h-[90dvh]"
            />
          </div>
          <button
            onClick={closeModal}
            className="absolute top-0 right-0 m-[1.5rem] cursor-pointer font-serif text-white shadow-md"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}
