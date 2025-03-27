"use client";

import Image from "next/image";
import Link from "next/link";
import monogram from "@p/images/monogram_cropped.png";

import { cn } from "@/lib/utils";

import { useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);

  const navItems = [
    { label: "Home", href: "/", style: "" },
    { label: "Program", href: "#", style: "" },
    { label: "FAQs", href: "/FAQs", style: "" },
    { label: "Gallery", href: "/gallery", style: "" },
    {
      label: "RSVP",
      href: "#",
      style: "font-[500] text-primary-light brightness-70",
    },
  ] as const;

  const pathname = usePathname();

  useLayoutEffect(() => {
    if (pathname !== "/") {
      setShouldShow(true);
      return;
    }
    const handleScroll = () => {
      setShouldShow(window.scrollY > window.innerHeight * 0.05);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 right-0 left-0 z-50 bg-[#f4f1d8] shadow-xl transition-transform duration-300",
          shouldShow ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div
          className={cn(
            "nav-container flex h-[8dvh] flex-row items-center justify-between py-4 md:h-[10dvh]",
            "before:absolute before:inset-0 before:bg-[url('/images/paper-texture.jpg')] before:bg-repeat before:opacity-100 before:mix-blend-overlay before:content-['']"
          )}
        >
          <div className="flex flex-row items-center gap-[0.5rem]">
            <Image
              src={monogram}
              alt="King and Kim monogram"
              className="relative h-auto w-[40px]"
            />
            <h4 className="deboss w-full font-title-cursive font-[900] text-primary-light">
              King and Kim
            </h4>
          </div>
          <div className="deboss hidden grow flex-row items-center justify-end gap-6 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={cn(
                  `nav-text transition-all duration-100 hover:font-[500] hover:text-primary ${item.style}`,
                  pathname === item.href ? "underline underline-offset-3" : ""
                )}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex justify-end md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="deboss nav-text transition-all duration-100 hover:font-[500] hover:text-primary"
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
        aria-labelledby="menu-heading"
      >
        <div className="flex flex-col items-end gap-6 px-[1.5rem] pt-6 padding:px-[0rem]">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="nav-text text-primary/60 transition-all duration-100 hover:font-[500] hover:text-primary/70"
          >
            Close
          </button>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                `nav-text transition-all duration-100 hover:font-[500] hover:text-primary ${item.style}`,
                pathname === item.href ? "underline underline-offset-2" : ""
              )}
            >
              {item.label}
            </Link>
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
