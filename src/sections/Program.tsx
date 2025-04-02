import Title from "@/components/text/Title";
import Image from "next/image";
import leaves_arch from "@p/images/leaves-arch.svg";
import music_bg from "@p/backgrounds/music_bg.svg";
import rings_bg from "@p/backgrounds/rings_bg.svg";
import toast_bg from "@p/backgrounds/toast_bg.svg";
import cake_bg from "@p/backgrounds/cake_bg.svg";

const programSchedule = [
  {
    time: "2:00 PM",
    event: "Prelude",
    description: "Musical arrangements as guests are seated",
  },
  {
    time: "2:30 PM",
    event: "Ceremony",
    description:
      "Exchange of vows and rings at St. Nicholas of Tolentine Parish",
  },
  {
    time: "4:00 PM",
    event: "Recessional",
    description: "The newlyweds' first walk as husband and wife",
  },
  {
    time: "5:30 PM",
    event: "Reception",
    description: "Welcome to the celebration venue",
  },
  {
    time: "5:45 PM",
    event: "Entrance",
    description: "Grand entrance of the newlyweds and wedding party",
  },
  {
    time: "6:00 PM",
    event: "Toast & Speeches",
    description: "Heartfelt messages from family and friends",
  },
  {
    time: "6:30 PM",
    event: "Cake Cutting",
    description: "The couple's first shared sweet moment",
  },
  {
    time: "6:45 PM",
    event: "Bouquet and Garter Toss",
    description:
      "Traditional wedding customs for the single ladies and gentlemen",
  },
  {
    time: "7:15 PM",
    event: "Dinner",
    description: "Elegant dining experience with loved ones",
  },
  {
    time: "8:00 PM",
    event: "Party & First Dance",
    description: "Celebration begins with the couple's first dance",
  },
];

export default function Program() {
  return (
    <>
      <div className="readable-container relative flex flex-col gap-[3rem]">
        <Image
          src={leaves_arch}
          alt="King and Kim monogram"
          className="mb-[-6rem] h-full w-full object-cover sm:mb-[-8rem]"
        />
        <Title className="text-center">The Wedding Program</Title>
        <div className="flex-col-center w-full gap-[1.25rem]">
          {programSchedule.map((item, index) => (
            <div
              key={index}
              className={`program-item flex w-full flex-row items-start gap-[2rem] ${
                index === 0
                  ? "music-anchor"
                  : index === 2
                    ? "rings-anchor"
                    : index === 5
                      ? "toast-anchor"
                      : index === 8
                        ? "cake-anchor"
                        : ""
              }`}
            >
              <h4 className="w-[30%] text-right font-serif font-[200]">
                {item.time}
              </h4>
              <div className="flex w-[70%] flex-col">
                <h4 className="font-title-sans font-[550]">{item.event}</h4>
                <p className="leading-tight text-balance text-text-primary/50 italic">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <Image
          src={music_bg}
          sizes="5vw"
          alt="background"
          priority
          className="bg-decoration music-decoration"
        />
        <Image
          src={rings_bg}
          sizes="5vw"
          alt="background"
          priority
          className="bg-decoration rings-decoration"
        />
        <Image
          src={toast_bg}
          sizes="5vw"
          alt="background"
          priority
          className="bg-decoration toast-decoration"
        />
        <Image
          src={cake_bg}
          sizes="5vw"
          alt="background"
          priority
          className="bg-decoration cake-decoration"
        />
      </div>
    </>
  );
}
