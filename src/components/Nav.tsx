"use client";

import Image from "next/image";
import Link from "next/link";
import monogram_cropped from "@p/images/monogram_cropped.png";
// import monogram from "@p/images/monogram.png";

import { cn } from "@/lib/utils";

import { useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [shouldShow, setShouldShow] = useState(false);

  const navItems = [
    { label: "Home", href: "/", path: "/" },
    { label: "FAQs", href: "/FAQs", path: "/FAQs" },
    { label: "Invitation", href: "/invitation", path: "/invitation" },
    { label: "Gallery", href: "/gallery", path: "/gallery" },
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
          "nav-shadow fixed top-0 right-0 left-0 z-50 bg-[#f4f1d8] transition-transform duration-300"
        )}
        style={{
          transform: shouldShow ? "translateY(0)" : "translateY(-100%)",
          boxShadow: "0px 10px 20px #00000020",
          WebkitBoxShadow: "0px 10px 20px #00000020",
          MozBoxShadow: "0px 10px 20px #00000020",
        }}
      >
        <div
          className={cn(
            "nav-container flex h-[8dvh] flex-row items-center justify-between py-4 md:h-[10dvh]",
            "before:absolute before:inset-0 before:bg-[url('/images/paper-texture.jpg')] before:bg-repeat before:opacity-100 before:mix-blend-overlay before:content-['']"
          )}
        >
          <div className="flex flex-row items-center gap-[0.5rem]">
            <Image
              src={monogram_cropped}
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
                prefetch={item.href === "/gallery"}
                className={cn(
                  `nav-text transition-all duration-100 hover:text-primary-light`,
                  pathname.startsWith(`${item.path}/`) || pathname === item.path
                    ? "underline underline-offset-3"
                    : ""
                )}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://kknottyaffair.anrsvp.com/#home"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-text font-[600] text-primary-light brightness-70 transition-all duration-100 hover:brightness-115"
            >
              RSVP
            </a>
          </div>
          <div className="flex justify-end md:hidden">
            <button
              onClick={() => setIsMenuOpen(true)}
              className="deboss nav-text cursor-pointer transition-all duration-100 hover:font-[500] hover:text-primary"
            >
              Menu
            </button>
          </div>
        </div>
      </nav>
      <div
        className={cn(
          "fixed inset-y-0 right-0 z-60 h-[100dvh] w-[45%] transform bg-white transition-transform duration-300 ease-in-out sm:w-[40%] md:hidden"
        )}
        style={{ transform: isMenuOpen ? "translateX(0)" : "translateX(100%)" }}
        role="dialog"
        aria-modal="true"
        aria-labelledby="menu-heading"
      >
        <div className="flex flex-col items-end gap-6 px-[1.5rem] pt-6 padding:px-[0rem]">
          <button
            onClick={() => setIsMenuOpen(false)}
            className="nav-text deboss cursor-pointer text-[#454b1b7a] transition-all duration-100 hover:brightness-115"
          >
            Close
          </button>
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsMenuOpen(false)}
              className={cn(
                `nav-text transition-all duration-100 hover:text-primary-light`,
                pathname.startsWith(`${item.path}/`) || pathname === item.path
                  ? "underline underline-offset-3"
                  : ""
              )}
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://kknottyaffair.anrsvp.com/#home"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-text deboss font-[600] text-primary-light brightness-70 transition-all duration-100 hover:brightness-115"
          >
            RSVP
          </a>
        </div>
      </div>

      {isMenuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 md:hidden h-[100dvh]"
          onClick={() => setIsMenuOpen(false)}
        />
      )}
    </>
  );
}
