import Title from "@/components/text/Title";
import Image from "next/image";
import leaves_arch from "@p/images/leaves-arch.svg";

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
    <div className="readable-container mt-[2rem] flex flex-col gap-[3rem]">
      <Image
        src={leaves_arch}
        alt="King and Kim monogram"
        className="h-full w-full object-cover sm:mb-[-8rem] mb-[-6rem]"
      />
      <Title className="text-center">The Wedding Program</Title>
      <div className="flex-col-center w-full gap-[1.25rem]">
        {programSchedule.map((item, index) => (
          <div
            key={index}
            className="flex w-full flex-row items-start gap-[2rem]"
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
    </div>
  );
}
