import Video from "@/components/VideoBackground";

import Story from "@/sections/Story";
import Message from "@/sections/Message";
import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
import Info from "@/sections/Info";
import Program from "@/sections/Program";

import Image from "next/image";
import banner_story from "@p/images/photoshoot/banner_story.webp";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Kim & King's Wedding",
  description: "Pre-wedding Gallery of Kim & King",
};

export default function Home() {
  return (
    <>
      <main className="min-h-[100svh]">
        <div className="flex-col-bot relative h-[100svh]">
          <Video />
          <Hero />
        </div>
        <div className="container flex flex-col gap-[4rem]">
          <Intro />
          <Info />
          <Program />
        </div>
        <div className="h-[30dvh] sm:h-[50dvh] md:h-[70dvh]">
          <Image
            src={banner_story}
            placeholder="blur"
            alt="Banner Wedding story"
            sizes="100vw"
            className="object-[20%_63%] h-full w-full object-cover"
          />
        </div>
        <div className="container flex flex-col gap-[4rem]">
          <Story />
        </div>
      </main>
      <main className="border-t border-[#d8d8d895] bg-white">
        <div className="container">
          <Message />
        </div>
      </main>
    </>
  );
}
