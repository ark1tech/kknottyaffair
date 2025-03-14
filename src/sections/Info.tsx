export default function Info() {
  return (
    <div className="flex flex-col gap-[1.5rem] md:flex-row">
      <div className="gap-title z-10 flex w-full scale-90 rotate-[-3deg] flex-col rounded-sm border border-text-secondary-light/50 bg-[#fefff7] p-[2.5rem] shadow-[0px_0px_10px_rgba(0,0,0,0.06)] transition duration-200 hover:scale-95 md:rotate-[-5deg]">
        <h3 className="font-title-sans text-primary-light">Wedding</h3>
        <p>
          St. Nicholas of Tolentine Parish Cathedral, Cabanatuan City, Nueva
          Ecija, Philippines
        </p>
        <a className="font-sans text-footnote text-secondary underline underline-offset-2">
          Show in Google Maps
        </a>
      </div>
      <div className="gap-title z-20 flex w-full rotate-[2deg] flex-col rounded-sm border border-text-secondary-light/50 bg-[#fefff7] p-[2.5rem] shadow-[0px_0px_10px_rgba(0,0,0,0.06)] transition duration-200 hover:scale-105 md:rotate-[4deg]">
        <h3 className="font-title-sans text-primary-light">Reception</h3>
        <p>
          The Gardens, Lakewood Subdivision, Cabanatuan City, Nueva Ecija,
          Philippines
        </p>
        <a className="font-sans text-footnote text-secondary underline underline-offset-2">
          Show in Google Maps
        </a>
      </div>
      <div className="gap-title z-10 flex w-full scale-85 rotate-[-1deg] flex-col rounded-sm border border-text-secondary-light/50 bg-[#fefff7] p-[2.5rem] shadow-[0px_0px_10px_rgba(0,0,0,0.06)] transition duration-200 hover:scale-90 md:rotate-[-2deg]">
        <h3 className="font-title-sans text-primary-light">Wedding</h3>
        <p>
          St. Nicholas of Tolentine Parish Cathedral, Cabanatuan City, Nueva
          Ecija, Philippines
        </p>
        <a className="font-sans text-footnote text-secondary underline underline-offset-2">
          Show in Google Maps
        </a>
      </div>
    </div>
  );
}
