import { cn } from "@/lib/utils";

interface PaperCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function PaperCard({
  children,
  className = "",
}: PaperCardProps) {
  return (
    <div
      className={cn(
        "relative bg-[#f4f1d8] shadow-sm before:absolute before:inset-0 before:bg-[url('/images/paper-texture.jpg')] before:bg-repeat before:opacity-100 before:mix-blend-overlay before:content-['']",
        className
      )}
    >
      {children}
    </div>
  );
}
