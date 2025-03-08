// import Image from "next/image";
import { Video } from "@/components/VideoBackground";

export default function Home() {
  return (
    <>
      <div className="absolute inset-0 z-0 overflow-hidden">
        <Video />
      </div>
      <div className="relative z-10 flex h-full w-full flex-col">
        <div className="relative flex h-[100svh] w-full flex-col items-center justify-center text-[var(--color-text-primary)]">
          <h2 className="font-title-serif">The Wedding Of</h2>
          <h1 className="font-title-sans">King & Kim</h1>
        </div>
        <div className="h-[100svh]">
          <h1>Hello</h1>
        </div>
      </div>
    </>
  );
}
