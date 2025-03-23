"use client";

import Image from "next/image";
import monogram from "@p/images/monogram_cropped.png";

import { cn } from "@/lib/utils";

import { useEffect, useState } from "react";

export default function Nav() {
  const [isVisible, setIsVisible] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "#" },
    { label: "Program", href: "#" },
    { label: "FAQs", href: "#" },
    { label: "Gallery", href: "#" },
    { label: "RSVP", href: "#" },
  ] as const;

  useEffect(() => {
    const handleScroll = () => {
      const shouldShow = window.scrollY > window.innerHeight * 0.05;
      setIsVisible(shouldShow);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 right-0 left-0 z-50 bg-white shadow-xl transition-transform duration-300",
          isVisible ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="nav-container flex flex-row items-center justify-between py-4">
          <div className="flex flex-row items-center gap-[0.5rem]">
            <Image
              src={monogram}
              alt="King and Kim monogram"
              className="h-auto w-[40px]"
            />
            <h4 className="w-full font-title-cursive font-[900] text-primary">
              King and Kim
            </h4>
          </div>
          <div className="hidden grow flex-row items-center justify-end gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="nav-text transition-all duration-100 hover:font-[500] hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </div>
          <div className="flex justify-end md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="nav-text transition-all duration-100 hover:font-[500] hover:text-primary"
            >
              Menu
            </button>
          </div>
        </div>
      </nav>
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-60 h-full w-[65%] transform bg-white transition-transform duration-300 ease-in-out sm:w-[40%] md:hidden",
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex flex-col items-end gap-6 px-[1.5rem] pt-6 padding:px-[0rem]">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="nav-text transition-all duration-100 hover:font-[500] hover:text-primary"
          >
            Close
          </button>
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className="nav-text transition-all duration-100 hover:font-[500] hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 md:hidden"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}
