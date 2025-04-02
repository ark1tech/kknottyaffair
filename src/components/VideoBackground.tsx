"use client";

// import { useRef, useEffect } from "react";
// import { useBrowser } from "@/hooks/use-browser";
import BlurIn from "@/components/BlurIn";

export default function Video() {
  // const videoRef = useRef<HTMLVideoElement>(null);
  // const { isSafari } = useBrowser();

  // useEffect(() => {
  //   const videoElement = videoRef.current;

  //   const handleUserInteraction = () => {
  //     if (videoElement && !isSafari) {
  //       videoElement.muted = false;
  //       fadeInAudio(videoElement);
  //     }
  //     // Remove the event listeners after unmuting
  //     videoElement?.removeEventListener("mouseenter", handleUserInteraction);
  //     videoElement?.removeEventListener("touchstart", handleUserInteraction);
  //   };

  //   const fadeInAudio = (videoElement: HTMLVideoElement) => {
  //     let volume = 0;
  //     videoElement.volume = volume;
  //     const fadeInterval = setInterval(() => {
  //       if (volume < 1) {
  //         volume += 0.1; // Adjust the increment for a smoother or faster fade
  //         videoElement.volume = Math.min(volume, 1);
  //       } else {
  //         clearInterval(fadeInterval);
  //       }
  //     }, 300); // Adjust the interval time for a smoother or faster fade
  //   };

  //   if (videoElement) {
  //     // Add event listeners for user interaction
  //     videoElement.addEventListener("mouseenter", handleUserInteraction);
  //     videoElement.addEventListener("touchstart", handleUserInteraction);
  //   }

  //   return () => {
  //     if (videoElement) {
  //       // Clean up the event listeners on component unmount
  //       videoElement.removeEventListener("mouseenter", handleUserInteraction);
  //       videoElement.removeEventListener("touchstart", handleUserInteraction);
  //     }
  //   };
  // }, [isSafari]);

  return (
    <div
      style={{
        overflow: "hidden",
        position: "absolute",
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        zIndex: 0,
        height: "100vh",
        width: "100%",
      }}
    >
      <div
        style={{
          position: "relative",
          height: "100%",
          width: "100%",
        }}
      >
        <video
          // ref={videoRef}
          // className="h-full w-full object-cover object-center brightness-[85%]"
          style={{
            height: "100%",
            width: "100%",
            objectFit: "cover",
            objectPosition: "center",
            filter: "brightness(85%)",
          }}
          poster="images/photoshoot/main_bg.webp"
          autoPlay
          loop
          muted
          disablePictureInPicture
          playsInline
        >
          <source src="/videos/bg_video_1.webm#t=15" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        <BlurIn
          style={{
            pointerEvents: "none",
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            background:
              "linear-gradient(to bottom, transparent -10%, black 110%)",
            opacity: 0.8,
          }}
        ></BlurIn>
      </div>
    </div>
  );
}
