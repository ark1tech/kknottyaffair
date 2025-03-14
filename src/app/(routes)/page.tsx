import Video from "@/components/VideoBackground";
import Story from "@/sections/Story";
import Message from "@/sections/Message";
import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
import Info from "@/sections/Info";
import Nav from "@/components/Nav";
// import Header from "@/components/sections/Header";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="min-h-[100svh]">
        <div className="absolute inset-0 z-0 mt-[2.5svh] h-[95svh]">
          <Video />
        </div>
        <Hero />
        <div className="container flex flex-col gap-[4rem]">
          <Intro />
          <Info />
          <Story />
          <Message />
        </div>
      </main>
      {/* <main className="min-h-[100svh]">
        <div className="container">
        </div>
      </main> */}
    </>
  );
}
