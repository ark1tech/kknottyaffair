"use client";
import { useState, useEffect, memo } from "react";

interface CountdownTimerProps {
  targetDate: Date;
}

export default function CountdownTimer({ targetDate }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const timer = setInterval(() => {
      const remainingTime = calculateTimeLeft(targetDate);
      setTimeLeft(remainingTime);

      if (
        remainingTime.days === 0 &&
        remainingTime.hours === 0 &&
        remainingTime.minutes === 0 &&
        remainingTime.seconds === 0
      ) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  if (!isClient) {
    return (
      <div className="deboss flex justify-center gap-[2rem]">
        {Object.entries({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        }).map(([label, value]) => (
          <div key={label} className="flex flex-col items-center">
            <h1 className="font-serif">{value}</h1>
            <p className="text-text-secondary">{label}</p>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="deboss flex justify-center gap-[2rem]">
      {Object.entries(timeLeft).map(([label, value]) => (
        <TimeUnit key={label} value={value} label={label} />
      ))}
    </div>
  );
}

function calculateTimeLeft(targetDate: Date) {
  const difference = +targetDate - +new Date();

  if (difference <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  }

  return {
    days: Math.floor(difference / (1000 * 60 * 60 * 24)),
    hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((difference / 1000 / 60) % 60),
    seconds: Math.floor((difference / 1000) % 60),
  };
}

const TimeUnit = memo(({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <h1 className="font-serif">{value}</h1>
    <p className="text-text-secondary">{label}</p>
  </div>
));

TimeUnit.displayName = "TimeUnit";
