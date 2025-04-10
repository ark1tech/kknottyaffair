"use client";

import { useRef, useEffect, useState } from "react";
import { useBrowser } from "@/hooks/use-browser";
import BlurIn from "@/components/BlurIn";
import VideoSpinner from "@/components/Loader";
import { Play, Volume2, VolumeX } from "lucide-react";

export default function Video() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const { isSafari, browserInfo } = useBrowser();
  const [isMuted, setIsMuted] = useState(true);
  const [isBuffering, setIsBuffering] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(false);
  const [showUnmuteTooltip, setShowUnmuteTooltip] = useState(true);
  const [debugLogs, setDebugLogs] = useState<string[]>([]);

  // Define specific types for the different kinds of debug data
  type VideoStateData = {
    muted?: boolean;
    volume?: number;
    currentTime?: number;
    duration?: number;
    readyState?: number;
  };

  type ErrorData = {
    error: string;
  };

  type BrowserData = {
    browser?: string;
    isSafari?: boolean;
  };

  // Union type for all possible debug data types
  type DebugData =
    | VideoStateData
    | ErrorData
    | BrowserData
    | Record<string, unknown>;

  const logToUI = (message: string, data?: DebugData) => {
    const logMessage = data ? `${message} ${JSON.stringify(data)}` : message;
    console.log(logMessage);
    setDebugLogs((prev) => [...prev.slice(-9), logMessage]);
  };

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
      logToUI("🔊 Mute toggled:", {
        muted: newMutedState,
        volume: videoRef.current.volume,
      });

      if (!newMutedState) {
        videoRef.current.volume = 0.05;
        logToUI("🔊 Volume set to:", { volume: videoRef.current.volume });
      }
    }
  };

  const handlePlayVideo = () => {
    const videoElement = videoRef.current;
    if (videoElement) {
      videoElement.play().catch((error) => {
        logToUI("❌ Error playing video:", { error: error.message });
      });
      videoElement.muted = false;
      fadeInAudio(videoElement);
      setIsMuted(false);
      setShowPlayButton(false);
      // setUserHasInteracted(true); // Mark that user has interacted
    }
  };

  useEffect(() => {
    const videoElement = videoRef.current;

    if (videoElement) {
      // Event listeners for buffering states
      const handleWaiting = () => {
        logToUI("🎥 Video is buffering/waiting...");
      };

      const handlePlaying = () => {
        logToUI("🎥 Video started playing", {
          muted: videoElement.muted,
          volume: videoElement.volume,
          currentTime: videoElement.currentTime,
        });
        setIsBuffering(false);
        setShowPlayButton(false);
        // setUserHasInteracted(true);
      };

      const handleCanPlayThrough = () => {
        logToUI("🎥 Video can play through without buffering");
        setIsBuffering(false);
        setShowPlayButton(true);
      };

      const handleLoadedData = () => {
        logToUI("🎥 Video data loaded", {
          duration: videoElement.duration,
          readyState: videoElement.readyState,
        });
        setIsBuffering(false);
        setShowPlayButton(true);
      };

      const handlePaused = () => {
        logToUI("🎥 Video paused", { currentTime: videoElement.currentTime });
        setIsBuffering(false);
        setShowPlayButton(true);
      };

      // Add event listeners
      videoElement.addEventListener("waiting", handleWaiting);
      videoElement.addEventListener("playing", handlePlaying);
      videoElement.addEventListener("canplaythrough", handleCanPlayThrough);
      videoElement.addEventListener("loadeddata", handleLoadedData);
      videoElement.addEventListener("pause", handlePaused);

      if (browserInfo.name) {
        logToUI("🌐 Browser info:", { browser: browserInfo.name, isSafari });
        if (!isSafari) {
          logToUI("🎥 Attempting to play video...");
          videoElement.play().catch((error) => {
            logToUI("❌ Error playing video:", { error: error.message });
          });
          videoElement.muted = true;
        } else if (isSafari) {
          logToUI("🌐 Safari detected, showing play button");
          videoElement.muted = true;
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
        videoElement.removeEventListener("pause", handlePaused);
      };
    }
  }, [isSafari, browserInfo, logToUI]);

  return (
    <>
      <div className="absolute inset-0 z-0 h-full w-full overflow-hidden">
        <div className="relative h-full w-full">
          {isBuffering && !showPlayButton && <VideoSpinner />}

          {isSafari && showPlayButton && (
            <button
              onClick={handlePlayVideo}
              className="absolute top-1/2 left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer rounded-full bg-[#0000005a] p-6 text-white opacity-50 transition-all duration-300 hover:scale-105 hover:bg-[#000000ac]"
              aria-label="Play video"
            >
              <Play size={32} strokeWidth={1.5} />
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
          <div className="animate-audio-bounce absolute -top-10 right-0 rounded bg-[#36363674] px-3 py-1.5 text-xs whitespace-nowrap">
            <p className="text-shadow-md text-sm text-white">
              Click to control audio
            </p>
            <div className="absolute top-full right-5 border-4 border-transparent border-t-[#36363674]"></div>
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
      <div className="fixed bottom-5 left-5 z-50 max-h-[300px] max-w-[400px] overflow-y-auto rounded-md bg-black/70 p-3 font-mono text-xs text-white">
        <div className="mb-1 font-bold">Debug Info:</div>
        {debugLogs.map((log, index) => (
          <div key={index} className="mb-1 border-b border-white/10 pb-1">
            {log}
          </div>
        ))}
      </div>
    </>
  );
}
