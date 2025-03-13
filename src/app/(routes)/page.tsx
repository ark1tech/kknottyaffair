import Image from "next/image";
import monogram from "@p/images/monogram.png";
import Video from "@/components/VideoBackground";
import Story from "@/components/sections/Story";

export default function Home() {
  return (
    <>
      <header className="h-[10svh] items-center justify-center">
        <h3 className="font-title-cursive font-[900]">King and Kim</h3>
        <Image
          src={monogram}
          alt="King and Kim monogram"
          className="h-auto w-[50px]"
        />
      </header>
      <main className="h-[90svh]">
        <div className="relative inset-0 z-0 h-full">
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
