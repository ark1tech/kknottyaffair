import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoSpinnerProps {
  className?: string;
}

export default function VideoSpinner({ className }: VideoSpinnerProps) {
  return (
    <div
      className={cn(
        "absolute inset-0 z-10 flex items-center justify-center bg-black/40",
        className
      )}
    >
      <div className="animate-spin">
        <Loader2 className="h-12 w-12 text-white" strokeWidth={1.5} />
      </div>
    </div>
  );
}
