import FadeIn from "@/components/FadeIn";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Hero() {
  return (
    <>
      <div className="flex-col-center hero-style relative z-10 mt-[2.5svh] h-fit w-fit gap-[1.25rem] pb-[1.5rem]">
        <FadeIn>
          <h1 className="deboss hero-heading magic-text z-10 pt-[1.8rem] pb-[1rem] font-title-cursive font-[500]">
            King & Kim
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h4 className="deboss font-title-sans font-[500]">
            Saturday &bull; June 21, 2025 &bull; 2:00 PM
          </h4>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="flex-row-center mt-[-1rem] flex scale-90 gap-[1rem]">
            <a
              className="link-underline font-serif text-[#ffffffc1] hover:text-secondary hover:brightness-130"
              href="https://kknottyaffair.anrsvp.com/#home"
              target="_blank"
              rel="noopener noreferrer"
            >
              RSVP
            </a>
            <Link
              className="link-underline font-serif text-[#ffffffc1] hover:text-secondary hover:brightness-130"
              href="/invitation"
            >
              Invitation
            </Link>
            <Link
              className="link-underline font-serif text-[#ffffffc1] hover:text-secondary hover:brightness-130"
              href="/gallery/video"
            >
              Watch the Video
            </Link>
          </div>
          <div className="flex-col-center mt-[2rem] w-full gap-[0.5rem]">
            <p className="text-center text-footnote text-[#ffffff67]">
              Scroll down for more details
            </p>
            <ChevronDown
              size={16}
              strokeWidth={2}
              className="w-full animate-arrow-bounce text-[#ffffff67]"
            />
          </div>
        </FadeIn>
      </div>
    </>
  );
}
