import { cn } from "@/lib/utils";

export default function Info() {
  const locationCards = [
    {
      type: "Wedding",
      location:
        "St. Nicholas of Tolentine Parish Cathedral, Cabanatuan City, Nueva Ecija, Philippines",
      zIndex: "z-10",
      scale: "scale-90 hover:scale-95",
      rotation: "rotate-[-3deg] md:rotate-[-5deg]",
    },
    {
      type: "Reception",
      location:
        "The Gardens, Lakewood Subdivision, Cabanatuan City, Nueva Ecija, Philippines",
      zIndex: "z-20",
      scale: "hover:scale-105",
      rotation: "rotate-[2deg] md:rotate-[4deg]",
    },
    {
      type: "Wedding",
      location:
        "St. Nicholas of Tolentine Parish Cathedral, Cabanatuan City, Nueva Ecija, Philippines",
      zIndex: "z-10",
      scale: "scale-85 hover:scale-90",
      rotation: "rotate-[-1deg] md:rotate-[-2deg]",
    },
  ];

  return (
    <div className="flex flex-col gap-[1.5rem] md:flex-row">
      {locationCards.map((card, index) => (
        <div
          key={index}
          className={cn(
            "gap-title flex w-full flex-col rounded-sm border border-text-secondary-light/50 bg-background-light p-[2.5rem] shadow-[0px_0px_10px_rgba(0,0,0,0.06)] transition duration-200"
          )}
        >
          <h3 className="font-title-sans text-primary-light">{card.type}</h3>
          <p>{card.location}</p>
        </div>
      ))}
    </div>
  );
}
