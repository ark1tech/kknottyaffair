import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kim & King's Wedding",
  description: "Pre-wedding Gallery of Kim & King",
};

export default function Home() {
  return (
    <>
      <main className="relative h-[100dvh] bg-[#f4f1d8] shadow-sm before:absolute before:inset-0 before:bg-[url('/images/paper-texture.jpg')] before:bg-cover before:opacity-100 before:mix-blend-overlay before:content-['']">
        <div className="deboss flex-col-center relative container h-full">
          <h1 className="deboss magic-text z-10 w-full pt-[1.8rem] pb-[3rem] text-center font-title-cursive font-[500] brightness-85 contrast-[120%] mb-[-2rem]">
            You&rsquo;re duly invited to
          </h1>
          <h1 className="hero-heading deboss magic-text z-10 w-full pt-[1.8rem] pb-[3rem] text-center font-title-cursive font-[500] brightness-85 contrast-[120%]">
            Kim & King&rsquo;s Wedding
          </h1>
          <Link
            href="/home"
            className={`nav-text transition-all duration-100 hover:text-primary-light`}
          >
            Enter Our Story
          </Link>
        </div>
      </main>
    </>
  );
}
