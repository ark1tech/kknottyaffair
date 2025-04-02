import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import FadeIn from "@/components/FadeIn";
import Blob from "@/components/Blob";
import PaperCard from "@/components/cards/PaperCard";

import Image from "next/image";
import church from "@p/backgrounds/church_bg.svg";
import leticia from "@p/backgrounds/leticia_bg.svg";

export default function Info() {
  const bgImages = [church, leticia];
  const locationCards = [
    {
      type: "The Wedding Venue",
      locationMain: "St. Nicholas of Tolentine Parish Cathedral",
      locationSecondary: "Cabanatuan City, Nueva Ecija",
      format:
        "rotate-[-1deg] md:rotate-[-2deg] translate-y-[-0.5rem] hover:rotate-[0deg] transition-transform",
      googleMapLink: "https://maps.app.goo.gl/wJ5AYjCtivtQ6mySA",
      delay: 0.2,
    },
    {
      type: "The Reception",
      locationMain: "The Gardens, Lakewood Subdivision",
      locationSecondary: "Cabanatuan City, Nueva Ecija",
      format:
        "rotate-[2deg] md:rotate-[4deg] translate-y-[1.5rem] hover:rotate-[1deg] transition-transform",
      googleMapLink: "https://maps.app.goo.gl/2jogCRRkt1mocCoN9",
      delay: 0.25,
    },
  ];

  const blobColors = [
    "#71713b",
    "#7f7f63",
    "#7d8554",
    "#aea548",
    "#606748",
    "#a1a864",
  ];

  return (
    <>
      <div className="flex flex-col justify-center gap-[0rem] md:flex-row md:gap-[2rem] lg:gap-[4rem]">
        {locationCards.map((card, index) => (
          <FadeIn key={index} delay={card.delay}>
            <PaperCard className={`overflow-hidden ${card.format}`}>
              <div
                style={{
                  position: "absolute",
                  height: "100%",
                  width: "100%",
                  opacity: 0.4,
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    right: "-5rem",
                  }}
                >
                  <Image
                    src={bgImages[index]}
                    alt="church"
                    sizes="100vh"
                    priority
                    style={{
                      height: "100%",
                      width: "100%",
                    }}
                  />
                </div>
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    height: "100%",
                    width: "100%",
                    background:
                      "linear-gradient(to bottom left, transparent 0%, white 75%)",
                  }}
                ></div>
              </div>
              <div
                className={`gap-title flex w-full flex-col px-6 py-8 md:px-10 md:py-12`}
              >
                <h2 className="deboss font-title-cursive font-[800] text-primary-light">
                  {card.type}
                </h2>
                <div className="gap-title mt-[1rem] flex flex-col">
                  <div className="flex flex-col gap-[0.25rem]">
                    <h3 className="deboss font-serif font-[400] text-balance text-[#444444]">
                      {card.locationMain}
                    </h3>
                    <p className="relative font-[400] text-[#838383]">
                      {card.locationSecondary}
                    </p>
                  </div>
                  <a
                    className="link-underline relative flex w-fit flex-row items-center font-sans text-footnote font-[500] text-[#8da184] hover:brightness-115"
                    href={card.googleMapLink}
                    target="_blank"
                  >
                    View on Google Maps{" "}
                    <ChevronRight
                      size={15}
                      strokeWidth={2.5}
                      className="mt-[0.1rem] mr-[-0.3rem]"
                    />
                  </a>
                </div>
              </div>
            </PaperCard>
          </FadeIn>
        ))}
      </div>
      <div className="flex-col-center">
        <FadeIn className="w-full md:max-w-[50%]" delay={0.25}>
          <PaperCard
            className={cn(
              "gap-title flex w-full flex-col",
              "px-6 py-8 md:px-10 md:py-12",
              "rotate-[2deg] transition-transform hover:rotate-[1deg]"
            )}
          >
            <h2 className="deboss font-title-cursive font-[800] text-primary-light">
              The Dress Code
            </h2>
            <div className="gap-title mt-[1rem] flex flex-col">
              <div className="flex flex-col gap-[0.25rem]">
                <h3 className="deboss font-serif font-[400] text-balance text-[#444444]">
                  Semi-formal Attire
                </h3>
                <p className="relative font-[400] text-[#838383]">
                  Please come in your most comfortable attire in these shades
                </p>
                <div className="mt-[1rem] flex flex-row">
                  {blobColors.map((blob, index) => (
                    <Blob key={index} color={blob} />
                  ))}
                </div>
              </div>
            </div>
          </PaperCard>
        </FadeIn>
      </div>
    </>
  );
}
