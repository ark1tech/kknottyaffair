export default function Info() {
  return (
    <div className="flex flex-col gap-[1.5rem] md:flex-row">
      <div className="gap-title flex w-full scale-90 rotate-[-3deg] md:rotate-[-5deg] flex-col rounded-sm border border-text-secondary-light/50 bg-background-light p-[2.5rem] shadow-[0px_0px_10px_rgba(0,0,0,0.06)]">
        <h3 className="font-title-sans text-primary-light">Wedding</h3>
        <p>
          St. Nicholas of Tolentine Parish Cathedral, Cabanatuan City, Nueva
          Ecija, Philippines
        </p>
      </div>
      <div className="gap-title flex w-full rotate-[2deg] md:rotate-[4deg] flex-col rounded-sm border border-text-secondary-light/50 bg-background-light p-[2.5rem] shadow-[0px_0px_10px_rgba(0,0,0,0.06)]">
        <h3 className="font-title-sans text-primary-light">Reception</h3>
        <p>
          The Gardens, Lakewood Subdivision, Cabanatuan City, Nueva Ecija,
          Philippines
        </p>
      </div>
      <div className="gap-title flex w-full scale-85 rotate-[-1deg] md:rotate-[-2deg] flex-col rounded-sm border border-text-secondary-light/50 bg-background-light p-[2.5rem] shadow-[0px_0px_10px_rgba(0,0,0,0.06)]">
        <h3 className="font-title-sans text-primary-light">Wedding Place</h3>
        <p>
          St. Nicholas of Tolentine Parish Cathedral, Cabanatuan City, Nueva
          Ecija, Philippines
        </p>
      </div>
    </div>
  );
}
