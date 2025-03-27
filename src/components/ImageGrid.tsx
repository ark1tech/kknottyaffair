import ImageModal from "@/components/ImageModal";

interface GalleryProps {
  images: string[];
  rows: number;
  classMap?: Record<number, string>;
}

export default function Gallery({ images, rows, classMap = {} }: GalleryProps) {
  if (images.length < rows * 2 + 1) {
    console.error("Not enough images for the specified number of rows");
    return null;
  }

  const mainImage = images[0];
  const sideImages = images.slice(1, rows * 2 + 1);

  return (
    <div className="mb-[1rem] grid w-full gap-4 md:grid-cols-1">
      <div className="relative h-[400px] w-full overflow-hidden sm:h-[750px]">
        <ImageModal
          src={mainImage}
          alt="Main"
          className={`${classMap[0] || ""}`}
        />
      </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
        {sideImages.map((image, index) => {
          const additionalClass = classMap[index + 1] || "";
          return (
            <div
              key={index}
              className="relative h-[400px] overflow-hidden sm:h-[750px]"
            >
              <ImageModal
                src={image}
                alt={`Gallery ${index + 1}`}
                className={`${additionalClass}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
