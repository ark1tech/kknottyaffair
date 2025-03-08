"use client";

import { useState, useEffect } from "react";

export default function LoadingScreen({ onLoaded }: { onLoaded: () => void }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading process (e.g., fetching data, preloading images)
    const loadContent = async () => {
      // Simulate a delay for loading
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setIsLoading(false);
    };

    loadContent();
  }, []);

  if (isLoading) {
    return (
      <div className="flex h-screen items-center justify-center">
        <div>
          <p>Loading...</p>
          <button onClick={onLoaded}>Continue</button>
        </div>
      </div>
    );
  }

  return null;
}
