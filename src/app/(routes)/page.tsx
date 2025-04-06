"use client";

import Link from "next/link";
import Image from "next/image";
import monogram from "@p/images/monogram.svg";
import side_leaf_1 from "@p/backgrounds/side_leaf_1.svg";
import side_leaf_2 from "@p/backgrounds/side_leaf_2.svg";
import { useVideoStore } from "@/store/video-store";

export default function FirstLoad() {
  return (
    <>
      <main className="relative h-[100dvh] overflow-hidden bg-[#f4f1d8] shadow-sm before:absolute before:inset-0 before:bg-[url('/images/paper-texture.jpg')] before:bg-cover before:opacity-100 before:mix-blend-overlay before:content-['']">
        <Image
          src={side_leaf_1}
          sizes="30vw"
          alt="background"
          priority
          className="absolute left-[-5rem] h-[100dvh] w-auto md:left-0"
        />
        <Image
          src={side_leaf_2}
          sizes="30vw"
          alt="background"
          priority
          className="absolute right-[-5rem] h-[100dvh] w-auto md:right-0"
        />
        <div className="deboss flex-col-center relative container h-full">
          <h1 className="deboss magic-text z-10 mb-[-2rem] w-full pt-[1.8rem] pb-[3rem] text-center font-title-cursive font-[500] brightness-85 contrast-[120%]">
            You&rsquo;re duly invited to
          </h1>
          <div className="flex h-fit w-fit">
            <Image
              src={monogram}
              alt="King and Kim monogram"
              priority
              sizes="20vh"
              className="max-h-[60dvh] w-auto"
            />
          </div>
          <div className="custom-link-style flex-col-center link-padding transition-all duration-100 hover:text-primary-light">
            <Link
              href="/home"
              onClick={() => useVideoStore.getState().setShouldPlay(true)}
              className={`nav-text text-inherit`}
            >
              Enter Our Story
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
