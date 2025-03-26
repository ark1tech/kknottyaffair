import { cn } from "@/lib/utils";

const generateBlobPath = () => {
  const points = 20;
  const radius = 40;

  const path = Array.from({ length: points }, (_, i) => {
    const angle = (Math.PI * 2 * i) / points;
    const randomRadius = radius + Math.random() * 5 - 2.5;
    const x = 50 + randomRadius * Math.cos(angle);
    const y = 50 + randomRadius * Math.sin(angle);
    return [x, y];
  });

  // Create smooth curves using quadratic Bézier commands
  const curvePath = path
    .map((point, i, arr) => {
      const nextPoint = arr[(i + 1) % arr.length];
      const midPoint = [
        (point[0] + nextPoint[0]) / 2,
        (point[1] + nextPoint[1]) / 2,
      ];
      return `${i === 0 ? `M ${point[0]},${point[1]}` : ""} Q ${point[0]},${point[1]} ${midPoint[0]},${midPoint[1]}`;
    })
    .join(" ");

  return `${curvePath} Z`;
};

interface BlobProps {
  color: string;
  className?: string;
}

export default function Blob({ color, className = "" }: BlobProps) {
  const path = generateBlobPath();

  return (
    <div className={cn("relative h-full w-full opacity-85", className)}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d={path} fill={color} />
      </svg>
    </div>
  );
}
