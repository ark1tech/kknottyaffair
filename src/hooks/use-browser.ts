"use client";

import { useState, useEffect } from "react";

export function useBrowser() {
  const [isSafari, setIsSafari] = useState(false);
  const [browserInfo, setBrowserInfo] = useState<{
    name: string | null;
    version: string | null;
  }>({ name: null, version: null });

  useEffect(() => {
    const userAgent = window.navigator.userAgent;

    // Safari detection
    // Safari includes "Safari" in UA but Chrome also includes it, so we need to check for "Chrome" too
    const isSafariBrowser =
      userAgent.includes("Safari") &&
      !userAgent.includes("Chrome") &&
      !userAgent.includes("Chromium");

    setIsSafari(isSafariBrowser);

    // Get browser name and version (simplified)
    let name = "Unknown";
    let version = "Unknown";

    if (userAgent.indexOf("Firefox") > -1) {
      name = "Firefox";
      version = userAgent.match(/Firefox\/([0-9.]+)/)?.[1] || "Unknown";
    } else if (
      userAgent.indexOf("Edge") > -1 ||
      userAgent.indexOf("Edg/") > -1
    ) {
      name = "Edge";
      version =
        userAgent.match(/Edge\/([0-9.]+)/)?.[1] ||
        userAgent.match(/Edg\/([0-9.]+)/)?.[1] ||
        "Unknown";
    } else if (userAgent.indexOf("Chrome") > -1) {
      name = "Chrome";
      version = userAgent.match(/Chrome\/([0-9.]+)/)?.[1] || "Unknown";
    } else if (isSafariBrowser) {
      name = "Safari";
      version = userAgent.match(/Version\/([0-9.]+)/)?.[1] || "Unknown";
    }

    setBrowserInfo({ name, version });
  }, []);

  return { isSafari, browserInfo };
}
