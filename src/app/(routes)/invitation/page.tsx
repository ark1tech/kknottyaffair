import type { Metadata } from "next";
import INVITATIONS from "@/constants/invitation";
import ImageModal from "@/components/ImageModal";
import Image from "next/image";
import leaf_bg from "@p/backgrounds/leaf_bg_3.svg";
import leaf_bg_mobile from "@p/backgrounds/leaf_bg_mobile.svg";

export const metadata: Metadata = {
  title: "Invitation | Kim & King's Wedding",
  description: "Invitation of Kim & King's Wedding",
};

export default function Invitation() {
  return (
    <>
      <div className="absolute z-0 w-full overflow-x-hidden">
        <Image
          src={leaf_bg}
          sizes="100vh"
          alt="background"
          priority
          className="show-md-up w-full"
        />
        <Image
          src={leaf_bg_mobile}
          sizes="100vh"
          priority
          alt="background"
          className="show-md-down w-full"
        />
      </div>
      <main className="relative pt-[8dvh] min-h-[90dvh] w-full md:pt-[10dvh]">
        <div className="container">
          <div className="mt-[-1.5rem] mb-[1.5rem] flex h-full w-full flex-col gap-[1.25rem] saturate-200 md:mt-[-2rem] md:mb-[2.5rem]">
            <h1 className="hero-heading deboss magic-text font-[500 z-10 w-full pt-[2rem] pb-[1.5rem] text-center font-title-cursive brightness-85 contrast-[120%]">
              Invitation
            </h1>
            <h3 className="deboss mt-[-2rem] text-center font-serif font-[400] text-primary/80 italic">
              Join Us On Our Special Day
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {INVITATIONS.slice(0, 4).map((image, index) => {
              return (
                <div key={index} className="relative">
                  <ImageModal src={image} alt={`Invitation ${index + 1}`}>
                    <Image
                      src={image}
                      alt={`Invitation ${index + 1} Modal`}
                      priority
                      placeholder="blur"
                      className={`image-grid max-h-[60dvh] object-contain drop-shadow-[5px_5px_10px_rgba(0,0,0,0.25)] md:max-h-full`}
                    />
                  </ImageModal>
                </div>
              );
            })}
          </div>
          <div className="relative mt-[1rem] overflow-hidden">
            <ImageModal src={INVITATIONS[4]} alt={`Invitation 5`}>
              <Image
                src={INVITATIONS[4]}
                alt={`Invitation 5 Modal`}
                priority
                className={`image-grid object-contain drop-shadow-[5px_5px_10px_rgba(0,0,0,0.25)]`}
              />
            </ImageModal>
          </div>
        </div>
      </main>
    </>
  );
}
