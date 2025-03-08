"use client";

import { useRef, useEffect } from "react";

export function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;

    const handleUserInteraction = () => {
      if (videoElement) {
        videoElement.muted = false;
        videoElement.play();
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
      }, 200); // Adjust the interval time for a smoother or faster fade
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
    <div className="relative h-full w-full">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent from-0% to-[#fffcf1] to-[100%]" />
      <div className="pointer-events-none absolute inset-0 backdrop-blur-sm mask-gradient" />
      <video
        ref={videoRef}
        className="h-full w-full object-cover"
        preload="auto"
        autoPlay
        loop
        muted
        playsInline
      >
        <source src="/videos/idk.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <style jsx>{`
        .mask-gradient {
          mask-image: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.5) 70%, black 100%);
          -webkit-mask-image: linear-gradient(to bottom, transparent 0%, rgba(0, 0, 0, 0.5) 70%, black 100%);
        }
      `}</style>
    </div>
  );
}
