"use client";

import Image from "next/image";
import monogram from "@p/images/monogram.png";

import { useEffect, useState } from "react";

export default function Nav() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show nav after scrolling past 100vh (adjust this value as needed)
      const shouldShow = window.scrollY > window.innerHeight * 0.75;
      setIsVisible(shouldShow);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    // Implement cn lib or something if it's better?
    <nav
      className={`fixed top-0 right-0 left-0 z-50 bg-background shadow-xl transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="nav-container flex flex-row items-center justify-between p-4">
        <div className="flex flex-row items-center gap-[0.5rem]">
          <Image
            src={monogram}
            alt="King and Kim monogram"
            className="h-auto w-[50px]"
          />
          <h4 className="w-full font-title-cursive font-[900]">King and Kim</h4>
        </div>
        <div className="flex grow flex-row items-center justify-end gap-6">
          <a href="#" className="nav-text">
            Home
          </a>
          <a href="#" className="nav-text">
            Program
          </a>
          <a href="#" className="nav-text">
            FAQs
          </a>
          <a href="#" className="nav-text">
            Guides
          </a>
          <a href="#" className="nav-text">
            Gallery
          </a>
          <a href="#" className="nav-text">
            Watch
          </a>
          <a href="#" className="nav-text">
            RSVP
          </a>
        </div>
      </div>
    </nav>
  );
}
