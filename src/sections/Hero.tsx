
import FadeIn from "@/components/FadeIn";

export default function Hero() {
  return (
    <>
      <div className="flex-col-center hero-style relative z-10 mt-[2.5svh] h-fit w-fit gap-[1.25rem] pb-[4rem]">
        <FadeIn>
          <h1 className="deboss hero-heading magic-text z-10 pt-[1.8rem] pb-[1rem] font-title-cursive font-[500]">
            King & Kim
          </h1>
        </FadeIn>
        <FadeIn delay={0.1}>
          <h4 className="mt-[-0.5rem] font-title-sans font-[500]">
            Saturday &bull; June 21, 2025 &bull; 2:00 PM
          </h4>
        </FadeIn>
        <FadeIn delay={0.2}>
          <div className="flex-row-center flex scale-90 gap-[1rem]">
            <p className="link-underline font-serif">RSVP</p>
            <p className="link-underline font-serif">Watch the Video</p>
          </div>
        </FadeIn>
      </div>
      <div className="w-full h-full absolute">
        
      </div>
    </>
  );
}
