import Video from "@/components/VideoBackground";
import Story from "@/components/sections/Story";
// import Header from "@/components/sections/Header";

export default function Home() {
  return (
    <>
      {/* <header className="h-[10svh] items-center justify-center">
        <Header/>
      </header> */}
      <main className="h-[100svh]">
        <div className="relative inset-0 z-0 h-[90svh]">
          <Video />
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
