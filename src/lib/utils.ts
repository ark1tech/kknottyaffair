import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { StaticImageData } from "next/image";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getImageGroup(
  startIndex: number,
  endIndex: number,
  staticImageArray: StaticImageData[]
) {
  return staticImageArray.slice(startIndex, endIndex);
}
