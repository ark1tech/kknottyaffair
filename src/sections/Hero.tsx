// import Image from "next/image";
// import monogram from "@p/images/monogram.png";
// import { ChevronDown } from "lucide-react";
import FadeIn from "@/components/FadeIn";

export default function Hero() {
  return (
    <div className="flex-col-center hero-style relative z-10 mt-[2.5svh] h-fit w-fit gap-[1.25rem] pb-[4rem]">
      <FadeIn>
        <h1 className="hero-heading magic-text z-10 pt-[1.8rem] pb-[1rem] font-title-cursive font-[500]">
          King & Kim
        </h1>
      </FadeIn>
      <FadeIn delay={0.1}>
        <h4 className="mt-[-0.5rem] font-title-sans font-[500]">
          Saturday &bull; June 21, 2025 &bull; 2:00 PM
        </h4>
      </FadeIn>
      <FadeIn delay={0.2}>
        <div className="flex-row-center flex gap-[1rem]">
          <h5 className="link-underline font-serif">RSVP</h5>
          <h5 className="link-underline font-serif">Watch the Video</h5>
        </div>
      </FadeIn>
      {/* <div className="flex-col-center pt-[3rem] pb-[1.5rem]">
        <p className="font-serif font-[200] text-footnote">More Details</p>
        <ChevronDown size={20} strokeWidth={1.25} />
      </div> */}
    </div>
  );
}
