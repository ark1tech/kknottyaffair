import Video from "@/components/VideoBackground";
import Story from "@/sections/Story";
import Message from "@/sections/Message";
import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
import Info from "@/sections/Info";
import Program from "@/sections/Program";

import Image from "next/image";
import banner_story from "@p/images/photoshoot/banner_story.webp";
import side_leaf_1 from "@p/backgrounds/side_leaf_1.svg";
import side_leaf_2 from "@p/backgrounds/side_leaf_2.svg";

// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Kim & King's Wedding",
//   description: "Pre-wedding Gallery of Kim & King",
// };

export default function Home() {

  return (
    <>
      <main className="relative min-h-[100svh]">
        <div className="flex-col-bot relative h-[100svh]">
          <Video />
          <Hero />
        </div>
      </main>
      <main className="relative">
        <div className="side-leaf-container">
          <Image
            src={side_leaf_1}
            sizes="30vw"
            alt="background"
            // priority
            className="side-leaf-image"
          />
          <Image
            src={side_leaf_2}
            sizes="30vw"
            alt="background"
            // priority
            className="side-leaf-image"
          />
        </div>
        <div className="relative container flex flex-col gap-[4rem]">
          <Intro />
          <Info />
        </div>
      </main>
      <main className="relative mt-[-4rem]" style={{ overflow: "hidden" }}>
        <div className="relative container flex flex-col gap-[4rem]">
          <Program />
        </div>
      </main>
      <main>
        <div className="banner-container">
          <Image
            src={banner_story}
            placeholder="blur"
            alt="Banner Wedding story"
            sizes="100vw"
            className="banner-image fade-from-top"
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
