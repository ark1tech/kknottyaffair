"use client";

import { useRef, useEffect, useState } from "react";
import { useBrowser } from "@/hooks/use-browser";
import BlurIn from "@/components/BlurIn";
// import { useVideoStore } from "@/store/video-store";
import VideoSpinner from "@/components/Loader";
import { Volume2, VolumeX, Play } from "lucide-react";

export default function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  // const shouldPlay = useVideoStore((state) => state.shouldPlay);
  const { isSafari, browserInfo } = useBrowser();
  const [isMuted, setIsMuted] = useState(false);
  const [isBuffering, setIsBuffering] = useState(true);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [showUnmuteTooltip, setShowUnmuteTooltip] = useState(true);

  const fadeInAudio = (videoElement: HTMLVideoElement) => {
    let volume = 0;
    videoElement.volume = volume;
    const fadeInterval = setInterval(() => {
      if (volume < 0.05) {
        volume += 0.02;
        videoElement.volume = Math.min(volume, 1);
      } else {
        clearInterval(fadeInterval);
      }
    }, 300);
  };

  const handleMuteToggle = () => {
    if (videoRef.current) {
      const newMutedState = !videoRef.current.muted;
      videoRef.current.muted = newMutedState;
      setIsMuted(newMutedState);
      setShowUnmuteTooltip(false); // Hide tooltip when button is clicked
      console.log("🔊 Mute toggled:", {
        muted: newMutedState,
        volume: videoRef.current.volume,
      });

      if (!newMutedState) {
        videoRef.current.volume = 0.05;
        console.log("🔊 Volume set to:", videoRef.current.volume);
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
      const handleWaiting = () => {
        console.log("🎥 Video is buffering/waiting...");
        setIsBuffering(true);
      };

      const handlePlaying = () => {
        console.log("🎥 Video started playing", {
          muted: videoElement.muted,
          volume: videoElement.volume,
          currentTime: videoElement.currentTime,
        });
        setIsBuffering(false);
      };

      const handleCanPlayThrough = () => {
        console.log("🎥 Video can play through without buffering");
        setIsBuffering(false);
      };

      const handleLoadedData = () => {
        console.log("🎥 Video data loaded", {
          duration: videoElement.duration,
          readyState: videoElement.readyState,
        });
        setIsBuffering(false);
      };

      // Add event listeners
      videoElement.addEventListener("waiting", handleWaiting);
      videoElement.addEventListener("playing", handlePlaying);
      videoElement.addEventListener("canplaythrough", handleCanPlayThrough);
      videoElement.addEventListener("loadeddata", handleLoadedData);
      // Add pause event listener
      videoElement.addEventListener("pause", () => {
        console.log("🎥 Video paused", {
          currentTime: videoElement.currentTime,
        });
      });

      if (browserInfo.name) {
        console.log("🌐 Browser info:", {
          browser: browserInfo.name,
          isSafari,
        });
        if (!isSafari) {
          console.log("🎥 Attempting to play video...");
          videoElement.play().catch((error) => {
            console.error("❌ Error playing video:", error);
          });
          videoElement.muted = true;
          setIsMuted(true);
          // setShowUnmuteTooltip(true); 
        } else if (isSafari) {
          console.log("🌐 Safari detected, showing play button");
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
        videoElement.removeEventListener("pause", () => {});
      };
    }
  }, [isSafari, browserInfo]);

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
            preload="metadata"
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

      <div className="fixed right-5 bottom-5 z-50">
        {showUnmuteTooltip && (
          <div className="absolute -top-10 right-0 rounded bg-[#7777772e] px-3 py-1.5 text-xs whitespace-nowrap animate-arrow-bounce">
            <p className="text-sm text-[#e8e8e8]">Click to control audio</p>
            <div className="absolute top-full right-5 border-4 border-transparent border-t-[#3f3f3f2e]"></div>
          </div>
        )}
        <button
          onClick={handleMuteToggle}
          className="hover:shadow-glow flex cursor-pointer items-center gap-2 rounded border border-white/10 bg-black/50 p-2 text-white transition-shadow duration-200"
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
      </div>
    </>
  );
}
