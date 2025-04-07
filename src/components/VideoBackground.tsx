"use client";

import { useRef, useEffect, useState } from "react";
import { useBrowser } from "@/hooks/use-browser";
import BlurIn from "@/components/BlurIn";
import { useVideoStore } from "@/store/video-store";
import VideoSpinner from "@/components/Loader";
import { Volume2, VolumeX, Play } from "lucide-react";

export default function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const shouldPlay = useVideoStore((state) => state.shouldPlay);
  const { isSafari, browserInfo } = useBrowser();
  const [isMuted, setIsMuted] = useState(false);
  const [isBuffering, setIsBuffering] = useState(true);
  const [showPlayButton, setShowPlayButton] = useState(false);

  const fadeInAudio = (videoElement: HTMLVideoElement) => {
    let volume = 0;
    videoElement.volume = volume;
    const fadeInterval = setInterval(() => {
      if (volume < 0.1) {
        volume += 0.02;
        videoElement.volume = Math.min(volume, 1);
      } else {
        clearInterval(fadeInterval);
      }
    }, 300);
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

  const handlePlayVideo = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.play().catch((error) => {
        console.error("Error playing video:", error);
      });
      videoElement.muted = false;
      setIsMuted(false);
      fadeInAudio(videoElement);
      setShowPlayButton(false);
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      // Event listeners for buffering states
      const handleWaiting = () => setIsBuffering(true);
      const handlePlaying = () => setIsBuffering(false);
      const handleCanPlayThrough = () => setIsBuffering(false);
      const handleLoadedData = () => setIsBuffering(false);

      // Add event listeners
      videoElement.addEventListener("waiting", handleWaiting);
      videoElement.addEventListener("playing", handlePlaying);
      videoElement.addEventListener("canplaythrough", handleCanPlayThrough);
      videoElement.addEventListener("loadeddata", handleLoadedData);

      if (browserInfo.name) {
        console.log(isSafari, browserInfo);
        if (shouldPlay && !isSafari) {
          console.log("meow");
          videoElement.play().catch((error) => {
            console.error("Error playing video:", error);
          });
          videoElement.muted = false;
          fadeInAudio(videoElement);
        } else if (isSafari) {
          // Show play button for Safari
          setShowPlayButton(true);
        }
      }

      // Cleanup event listeners
      return () => {
        videoElement.removeEventListener("waiting", handleWaiting);
        videoElement.removeEventListener("playing", handlePlaying);
        videoElement.removeEventListener(
          "canplaythrough",
          handleCanPlayThrough
        );
        videoElement.removeEventListener("loadeddata", handleLoadedData);
      };
    }
  }, [shouldPlay, isSafari, browserInfo]);

  return (
    <>
      <div className="absolute inset-0 z-0 h-screen w-full overflow-hidden">
        <div className="relative h-full w-full">
          {isBuffering && !showPlayButton && <VideoSpinner />}

          {showPlayButton && isSafari && (
            <button
              onClick={handlePlayVideo}
              className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform rounded-full bg-black/50 p-6 text-white transition-all duration-300 hover:scale-105 hover:bg-black/70"
              aria-label="Play video"
            >
              <Play size={32} strokeWidth={1.75} />
            </button>
          )}

          <video
            ref={videoRef}
            className="h-full w-full object-cover object-center brightness-85"
            poster="/images/photoshoot/main_bg.webp"
            loop
            disablePictureInPicture
            playsInline
            muted
            preload="auto"
          >
            <source src="/videos/bg_video_1.webm#t=15" type="video/webm" />
            <source src="/videos/bg_video_1.mp4#t=15" type="video/mp4" />
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
          />
        </div>
      </div>

      <button
        onClick={handleMuteToggle}
        className="hover:shadow-glow fixed right-5 bottom-5 z-50 flex cursor-pointer items-center gap-2 rounded border border-white/10 bg-black/50 p-2 text-white transition-shadow duration-200"
      >
        <p className="flex items-center gap-2 text-sm text-white">
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
