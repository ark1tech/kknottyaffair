"use client";

import { useRef, useEffect } from "react";
import BlurIn from "@/components/BlurIn";

export default function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleUserInteraction = () => {
      if (videoElement) {
        videoElement.muted = false;
        fadeInAudio(videoElement);
      }
      // Remove the event listeners after unmuting
      videoElement?.removeEventListener("mouseenter", handleUserInteraction);
      videoElement?.removeEventListener("touchstart", handleUserInteraction);
    };

    const fadeInAudio = (videoElement: HTMLVideoElement) => {
      let volume = 0;
      videoElement.volume = volume;
      const fadeInterval = setInterval(() => {
        if (volume < 1) {
          volume += 0.1; // Adjust the increment for a smoother or faster fade
          videoElement.volume = Math.min(volume, 1);
        } else {
          clearInterval(fadeInterval);
        }
      }, 300); // Adjust the interval time for a smoother or faster fade
    };

    if (videoElement) {
      // Add event listeners for user interaction
      videoElement.addEventListener("mouseenter", handleUserInteraction);
      videoElement.addEventListener("touchstart", handleUserInteraction);
    }

    return () => {
      if (videoElement) {
        // Clean up the event listeners on component unmount
        videoElement.removeEventListener("mouseenter", handleUserInteraction);
        videoElement.removeEventListener("touchstart", handleUserInteraction);
      }
    };
  }, []);

  return (
    <div className="absolute inset-0 z-0 h-[100dvh] w-full">
      <div className="relative h-full w-full">
        <video
          // ref={videoRef}
          className="h-full w-full object-cover object-center brightness-[85%]"
          poster="images/photoshoot/main_bg.webp"
          preload="auto"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/videos/idk.mp4#t=15" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <BlurIn className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-80">
        </BlurIn>
      </div>
    </div>
  );
}
