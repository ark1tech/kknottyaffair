import { cn } from "@/lib/utils";

interface BlobProps {
  color: string;
  className?: string;
  blob: string;
}

export default function Blob({ blob, color, className = "" }: BlobProps) {

  return (
    <div className={cn("relative h-full w-full opacity-85", className)}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={blob} fill={color} />
      </svg>
    </div>
  );
}
