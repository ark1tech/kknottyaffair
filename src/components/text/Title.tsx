import { cn } from "@/lib/utils";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function Title({ children, className = "" }: TitleProps) {
  return (
    <h1
      className={cn(
        "deboss font-title-cursive font-[800] text-primary-light",
        className
      )}
    >
      {children}
    </h1>
  );
}
