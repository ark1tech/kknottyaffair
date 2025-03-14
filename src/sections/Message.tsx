export default function Message() {
  return (
    <div className="bg-white py-[4rem] border-t-text-primary/20 border-t">
      <div className="gap-title readable-container flex flex-col">
        <h3 className="font-title-sans text-primary-light">
          Dear Family and Friends,
        </h3>
        <div className="gap-paragraph flex flex-col">
          <p>
            We are overjoyed to share this special moment in our lives with you.
            Our journey together has been filled with love, laughter, and
            countless cherished memories, and we are thrilled to have you join
            us as we embark on this new chapter.
          </p>
          <p>
            As we prepare to say, &ldquo;I do,&rdquo; we look forward to
            celebrating with you and creating even more beautiful memories
            together. Thank you for being a part of our lives and for sharing in
            our happiness.
          </p>
          <p>With love and gratitude, </p>
          <h3 className="w-full font-title-cursive font-[900] text-primary-light">
            King and Kim
          </h3>
        </div>
      </div>
    </div>
  );
}
