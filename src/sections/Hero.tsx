// import Image from "next/image";
// import monogram from "@p/images/monogram.png";

export default function Hero() {
  return (
    <div className="flex-col-center hero-style relative z-10 mt-[2.5svh] h-fit w-fit gap-[1.5rem]">
      <h1 className="hero-heading font-title-cursive font-[500]">
        King and Kim
      </h1>
      <h1 className="hero-subheading font-cursive font-[700]">
        Bound by Love, Sealed for Life
      </h1>
      <h4 className="mt-[4rem] font-title-sans font-[500]">
        &mdash; Saturday, 21 June 2025, 2:00 PM &mdash;
      </h4>
      <div className="flex-row-center flex gap-[1rem]">
        <h5 className="link-underline font-serif">RSVP</h5>
        <h5 className="link-underline font-serif">Watch the Video</h5>
      </div>
    </div>
  );
}
