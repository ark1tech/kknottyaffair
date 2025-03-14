import Video from "@/components/VideoBackground";
import Story from "@/sections/Story";
import Message from "@/sections/Message";
import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
import Info from "@/sections/Info";
import Nav from "@/components/Nav";
// import Header from "@/components/sections/Header";

import Image from "next/image";
import banner_one from "@p/images/photoshoot/banner_one.webp";
import banner_one_mobile from "@p/images/photoshoot/banner_one_mobile.jpg";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="min-h-[100svh]">
        <div className="flex-col-center relative h-[100svh]">
          <Video />
          <Hero />
        </div>
        <div className="container flex flex-col gap-[4rem]">
          <Intro />
          <Info />
          <div className=""></div>
        </div>
        <div className="h-[60svh]">
          <Image
            src={banner_one}
            alt="King and Kim monogram"
            className="hidden h-full w-full object-cover object-top sm:flex"
          />
          <Image
            src={banner_one_mobile}
            alt="King and Kim monogram"
            className="flex h-full w-full object-cover object-top sm:hidden"
          />
        </div>
        <div className="container flex flex-col gap-[4rem]">
          <Story />
        </div>
        <Message />
      </main>
    </>
  );
}
