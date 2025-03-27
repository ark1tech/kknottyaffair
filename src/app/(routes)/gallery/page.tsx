import ImageGrid from "@/components/ImageGrid";
import Link from "next/link";

export default function Gallery() {
  const images = Array.from(
    { length: 52 },
    (_, i) => `/images/gallery/gallery_${i + 1}.webp`
  );

  const getImageGroup = (startIndex: number, endIndex: number) => {
    return images.slice(startIndex, endIndex);
  };

  return (
    <main className="mt-[8dvh] min-h-[90dvh] w-full md:mt-[10dvh]">
      <div className="container">
        <div className="mt-[-1.5rem] mb-[1.5rem] flex h-full w-full flex-col gap-[1.25rem] saturate-150 md:mt-[-2rem] md:mb-[2.5rem]">
          <h1 className="hero-heading deboss magic-text z-10 w-full pt-[1.8rem] pb-[3rem] text-center font-title-cursive font-[500]">
            Pre-wedding Gallery
          </h1>
          <h3 className="deboss mt-[-2rem] text-center font-serif font-[400] text-primary/80 italic">
            Through the Lens of Love
          </h3>
          <span className="flex-col-center opacity-50 mt-[-0.25rem]">
            <Link className="link-underline" href="/gallery/video">
              Watch the pre-wedding video 
            </Link>
          </span>
        </div>
        <ImageGrid
          images={getImageGroup(0, 7)}
          rows={3}
          classMap={{
            0: "object-[90%]",
            5: "object-[60%]",
            6: "object-[60%]",
          }}
        />
        <ImageGrid
          images={getImageGroup(7, 10)}
          rows={1}
          classMap={{
            0: "object-[70%]",
            1: "object-[20%]",
            2: "sm:object-[5%] md:object-[0%] object-[10%]",
          }}
        />
        <ImageGrid
          images={getImageGroup(10, 15)}
          rows={2}
          classMap={{
            1: "object-[30%]",
            2: "object-[30%]",
            3: "object-[25%]",
          }}
        />
        <ImageGrid
          images={getImageGroup(15, 20)}
          rows={2}
          classMap={{
            2: "object-[20%]",
          }}
        />
        <ImageGrid
          images={getImageGroup(20, 27)}
          rows={3}
          classMap={{
            3: "object-[20%]",
          }}
        />
        <ImageGrid images={getImageGroup(27, 30)} rows={1} />
        <ImageGrid
          images={getImageGroup(30, 33)}
          rows={1}
          classMap={{
            0: "object-[40%_85%]",
          }}
        />
        <ImageGrid images={getImageGroup(33, 42)} rows={4} classMap={{}} />
        <ImageGrid
          images={getImageGroup(42, 47)}
          rows={2}
          classMap={{
            0: "object-[80%]",
            2: "object-right",
            3: "object-right",
          }}
        />
        <ImageGrid
          images={getImageGroup(47, 52)}
          rows={2}
          classMap={{
            1: "object-[60%]",
          }}
        />
      </div>
    </main>
  );
}
