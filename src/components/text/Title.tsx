import { cn } from "@/lib/utils";

interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

export default function Title({ children, className = "" }: TitleProps) {
  return (
    <h1
      className={cn("deboss font-title-cursive text-primary-light font-[800]", className)}
    >
      {children}
    </h1>
  );
}
