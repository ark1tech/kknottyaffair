import Video from "@/components/VideoBackground";
import Story from "@/sections/Story";
import Hero from "@/sections/Hero";
import Intro from "@/sections/Intro";
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
        <div className="container">
          <Intro />
        </div>
      </main>
      <main className="min-h-[100svh]">
        <div className="container">
          <Story />
        </div>
      </main>
    </>
  );
}
