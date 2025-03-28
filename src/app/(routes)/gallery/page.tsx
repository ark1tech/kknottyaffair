import ImageGrid from "@/components/ImageGrid";
import Link from "next/link";
import IMAGE_GALLERY from "@/constants/gallery";
import { getImageGroup } from "@/lib/utils";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery | Kim & King's Wedding",
  description: "Pre-wedding Gallery of Kim & King",
};

export default function Gallery() {
  return (
    <main className="mt-[8dvh] min-h-[90dvh] w-full md:mt-[10dvh]">
      <div className="container">
        <div className="mt-[-1.5rem] mb-[1.5rem] flex h-full w-full flex-col gap-[1.25rem] saturate-200 md:mt-[-2rem] md:mb-[2.5rem]">
          <h1 className="hero-heading deboss magic-text z-10 w-full pt-[1.8rem] pb-[3rem] text-center font-title-cursive font-[500] brightness-85 contrast-[120%]">
            Pre-wedding Gallery
          </h1>
          <h3 className="deboss mt-[-2rem] text-center font-serif font-[400] text-primary/80 italic">
            Through the Lens of Love
          </h3>
          <span className="flex-col-center mt-[-0.25rem] opacity-50">
            <Link className="link-underline" href="/gallery/video">
              Watch the pre-wedding video
            </Link>
          </span>
        </div>
        <ImageGrid
          images={getImageGroup(0, 7, IMAGE_GALLERY)}
          rows={3}
          classMap={{
            0: "object-[90%]",
            5: "object-[60%]",
            6: "object-[60%]",
          }}
        />
        <ImageGrid
          images={getImageGroup(7, 10, IMAGE_GALLERY)}
          rows={1}
          classMap={{
            0: "object-[70%]",
            1: "object-[20%]",
            2: "sm:object-[5%] md:object-[0%] object-[10%]",
          }}
        />
        <ImageGrid
          images={getImageGroup(10, 15, IMAGE_GALLERY)}
          rows={2}
          classMap={{
            1: "object-[30%]",
            2: "object-[30%]",
            3: "object-[30%]",
            4: "object-[50%]",
          }}
        />
        <ImageGrid
          images={getImageGroup(15, 20, IMAGE_GALLERY)}
          rows={2}
          classMap={{
            1: "object-[10%]"
          }}
        />
        <ImageGrid
          images={getImageGroup(20, 27, IMAGE_GALLERY)}
          rows={2}
          classMap={{
            2: "object-[20%]",
          }}
        />
        <ImageGrid
          images={getImageGroup(27, 30, IMAGE_GALLERY)}
          rows={2}
          classMap={{
            1: "object-[40%_85%]",
          }}
        />
        <ImageGrid
          images={getImageGroup(30, 35, IMAGE_GALLERY)}
          rows={2}
          classMap={{
            2: "object-[80%]",
          }}
        />
        <ImageGrid
          images={getImageGroup(35, 40, IMAGE_GALLERY)}
          rows={2}
          classMap={{
            
          }}
        />
        <ImageGrid
          images={getImageGroup(40, 49, IMAGE_GALLERY)}
          rows={3}
          classMap={{
            0: "object-[50%_44%]",
            1: "object-[88%]",
            2: "object-[95%]",
            3: "object-[85%]",
            4: "object-[45%]",
            5: "object-[70%]",
            6: "object-[65%]",
          }}
        />
        <ImageGrid
          images={getImageGroup(47, 52, IMAGE_GALLERY)}
          rows={2}
          classMap={{
            1: "object-[60%]",
          }}
        />
      </div>
    </main>
  );
}
