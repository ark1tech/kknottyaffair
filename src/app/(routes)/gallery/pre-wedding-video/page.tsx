import Link from "next/link";
import { ChevronLeft } from "lucide-react";

export default function PreWeddingVideo() {
  return (
    <main className="mt-[8dvh] h-[92dvh] w-full md:mt-[10dvh] md:h-[90dvh]">
      <div className="flex-col-center container h-full gap-[1rem]">
        <div className="h-fit w-full">
          <Link
            href="/"
            className={`nav-text link-underline flex w-fit flex-row items-center transition-all duration-100 hover:text-primary-light`}
          >
            <ChevronLeft
              size={16}
              strokeWidth={1.5}
              className="mt-[0.1rem] ml-[-0.5rem] inline"
            />
            Go back
          </Link>
        </div>
        <iframe
          width="560"
          className="responsive-iframe"
          height="315"
          rel="0"
          src="https://www.youtube-nocookie.com/embed/6e0bvC9HSh0?si=RzTBdg85fNWiIwYB?modestbranding=1&rel=0&showinfo=0&autoplay=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </main>
  );
}
