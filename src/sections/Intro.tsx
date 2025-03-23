import FadeIn from "@/components/FadeIn";

export default function Intro() {
  return (
    <div className="gap-paragraph readable-container flex flex-col">
      <FadeIn>
        <p>
          When our eyes meet, the world slows down. With every smile, every
          glance, and every touch, we find ourselves falling&mdash;over and over
          again.
        </p>
      </FadeIn>
      <FadeIn>
        <p>
          This is our love story, one that will last a lifetime. From this day
          forward, we promise to hold on, to dance through every season, and to
          stand by each other&mdash;until our hands are wrinkled and our hearts
          are still beating as one.
        </p>
      </FadeIn>
      <FadeIn>
        <p>Join us as we begin forever.</p>
      </FadeIn>
    </div>
  );
}
