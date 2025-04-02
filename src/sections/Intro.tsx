import FadeIn from "@/components/FadeIn";
import CountdownTimer from "@/components/Countdown";
import Title from "@/components/text/Title";

export default function Intro() {
  return (
    <div className="gap-paragraph readable-container flex flex-col">
      <FadeIn delay={0.2}>
        <p>
          When our eyes meet, the world slows down. With every smile, every
          glance, and every touch, we find ourselves falling&mdash;over and over
          again.
        </p>
      </FadeIn>
      <FadeIn delay={0.25}>
        <p>
          This is our love story, one that will last a lifetime. From this day
          forward, we promise to hold on, to dance through every season, and to
          stand by each other&mdash;until our hands are wrinkled and our hearts
          are still beating as one.
        </p>
      </FadeIn>
      <FadeIn delay={0.3}>
        <p>Join us as we begin forever.</p>
      </FadeIn>

      <FadeIn delay={0.35}>
        <div className="fade-border-container mt-[3rem] mb-[1rem]">
          <div className="flex flex-col gap-[2rem] text-center">
            <Title>Counting Down To &nbsp; Our Forever</Title>
            <CountdownTimer targetDate={new Date("2025-06-21T00:00:00")} />
          </div>
        </div>
      </FadeIn>
    </div>
  );
}
