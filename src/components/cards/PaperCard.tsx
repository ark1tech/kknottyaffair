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
        "relative bg-[#f4f1d8] shadow-sm before:absolute before:inset-0 before:bg-[url('/images/paper-texture.jpg')] before:bg-cover before:opacity-100 before:mix-blend-overlay before:content-['']",
        className
      )}
      style={{
        boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
        WebkitBoxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
        MozBoxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1)",
      }}
    >
      {children}
    </div>
  );
}
