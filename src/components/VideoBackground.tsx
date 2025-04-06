"use client";

import { useRef, useEffect, useState } from "react";
import { useBrowser } from "@/hooks/use-browser";
import BlurIn from "@/components/BlurIn";
import { useVideoStore } from "@/store/video-store";

import { Volume2, VolumeX } from "lucide-react";

export default function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldPlay = useVideoStore((state) => state.shouldPlay);
  const { isSafari } = useBrowser();
  const [isMuted, setIsMuted] = useState(false);

  const fadeInAudio = (videoElement: HTMLVideoElement) => {
    let volume = 0;
    videoElement.volume = volume;
    const fadeInterval = setInterval(() => {
      if (volume < 0.1) {
        volume += 0.02; // Adjust the increment for a smoother or faster fade
        videoElement.volume = Math.min(volume, 1);
      } else {
        clearInterval(fadeInterval);
      }
    }, 300); // Adjust the interval time for a smoother or faster fade
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
      if (!videoRef.current.muted) {
        videoRef.current.volume = 0.05;
      }
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (shouldPlay && !isSafari) {
        videoElement.play();
        fadeInAudio(videoElement);
      } else {
        videoElement.muted = true;
        setIsMuted(true);
        videoElement.play();
      }
    }
  }, [shouldPlay, isSafari]);

  return (
    <>
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
            ref={videoRef}
            style={{
              height: "100%",
              width: "100%",
              objectFit: "cover",
              objectPosition: "center",
              filter: "brightness(85%)",
            }}
            poster="images/photoshoot/main_bg.webp"
            loop
            disablePictureInPicture
            playsInline
            muted
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
      <button
        onClick={handleMuteToggle}
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 9999,
          padding: "8px 12px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
          borderRadius: "4px",
          color: "white",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: "4px",
          boxShadow: "0 0 10px rgba(255, 255, 255, 0.1)",
          transition: "box-shadow 0.2s ease",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = "0 0 15px rgba(255, 255, 255, 0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = "0 0 10px rgba(255, 255, 255, 0.1)";
        }}
      >
        <p className="flex items-center gap-2 text-footnote text-text-primary-light">
          {isMuted ? (
            <VolumeX size={14} strokeWidth={1.75} />
          ) : (
            <Volume2 size={14} strokeWidth={1.75} />
          )}
          {isMuted ? "Unmute video" : "Mute video"}
        </p>
      </button>
    </>
  );
}
