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

    let name = "Unknown";
    let version = "Unknown";
    let isSafariBrowser = false;

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
    } else if (userAgent.includes("Safari")) {
      // Only set as Safari if none of the above browsers were detected
      name = "Safari";
      version = userAgent.match(/Version\/([0-9.]+)/)?.[1] || "Unknown";
      isSafariBrowser = true;
    }

    setIsSafari(isSafariBrowser);
    setBrowserInfo({ name, version });
  }, []);

  return { isSafari, browserInfo };
}
