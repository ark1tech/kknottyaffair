import ImageModal from "@/components/ImageModal";
import Image, { StaticImageData } from "next/image";

interface GalleryProps {
  images: StaticImageData[];
  rows: number;
  classMap?: Record<number, string>;
}

export default function ImageGrid({
  images,
  rows,
  classMap = {},
}: GalleryProps) {
  const mainImage = images[0];
  const sideImages = images.slice(1, rows * 2 + 1);

  return (
    <div className="mb-[1rem] grid w-full gap-4 md:grid-cols-1">
      <ImageModal
        src={mainImage}
        alt="Featured wedding photograph"
        className="relative h-[400px] w-full overflow-hidden sm:h-[750px]"
      >
        <Image
          src={mainImage}
          alt="Featured wedding photograph"
          fill
          sizes="100vh"
          priority
          placeholder="blur"
          className={`image-grid object-cover ${classMap[0] || ""}`}
        />
      </ImageModal>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {sideImages.map((image, index) => {
          return (
            <div key={index}>
              <ImageModal
                src={image}
                alt={`Wedding photograph ${index + 1} in the gallery collection`}
                className="relative h-[400px] overflow-hidden sm:h-[750px]"
              >
                <Image
                  src={image}
                  alt={`Wedding photograph ${index + 1} in the gallery collection`}
                  fill
                  sizes="100vh"
                  priority
                  placeholder="blur"
                  className={`image-grid object-cover ${classMap[index + 1] || ""}`}
                />
              </ImageModal>
            </div>
          );
        })}
      </div>
    </div>
  );
}
