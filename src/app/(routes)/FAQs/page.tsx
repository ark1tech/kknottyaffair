import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/Accordion";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "FAQs | Kim & King's Wedding",
  description: "FAQs of Kim & King's Wedding",
};

export default function FAQs() {
  const faqs = [
    {
      question: "How do I RSVP?",
      answer: `
      You can find the RSVP button in the website, or by simply clicking 
        <a class="font-[500] hover:underline hover:underline-offset-2 text-primary-light brightness-95 mr-[-0.1rem]" 
        href="https://kknottyaffair.anrsvp.com/#home"
        target="_blank"
        rel="noopener noreferrer">
          here
        </a>. Please RSVP by filling out the form with your name.
      `,
    },
    {
      question: "When is the RSVP deadline?",
      answer: `RSVP by <span class="bold-text">May 15, 2025</span>, to ensure we can accommodate everyone.`,
    },
    {
      question: "Can I bring a plus-one?",
      answer: `Due to space limits, <span class="bold-text">only named guests on the invitation are allowed</span>. We appreciate your understanding.`,
    },
    {
      question: "Are children invited?",
      answer: `While we adore children, we request an <span class="bold-text">adult-only</span> celebration, except for those specifically invited from our immediate family.`,
    },
    {
      question: "Can I take pictures or videos during the wedding?",
      answer: `
        <span class="flex flex-col gap-paragraph">
          <span class="flex flex-col gap-[0.5rem]">
            <span class="bold-text">Ceremony</span> 
            <span>
              While we love the idea of you capturing every moment of our wedding, we kindly ask that you <span class="underline underline-offset-2 font-[500]">refrain</span> from taking pictures or videos during the ceremony. We've hired a professional photographer to ensure every special moment is beautifully captured, allowing you to sit back, relax, and fully enjoy the serenity of the ceremony with us. 
            </span>
          </span>
          <span class="flex flex-col gap-[0.5rem]">
            <span class="bold-text">Reception</span> 
            We warmly invite you to capture your special moments during our wedding reception. To make it easy for you to share your photos and perspectives, we will provide a unique QR code at the event for a disposable camera app. Simply scan the code to upload your cherished photos and share your point of view with us. We can't wait to see the celebration through your eyes!
          </span>
        </span>
      `,
    },
    {
      question: "How do I get there?",
      answer: `
      <span class="flex flex-col gap-paragraph">
        <span>
          <span class="bold-text">By Car</span>
          <ul class="list-disc pl-7">
            <li>2 hrs 50 mins from Manila via NLEx, SCTEx, CLLEx</li>
            <li>2 hrs 48 mins from Baguio via TPLEX, CLLEx</li>
            <li>1 hr 12 mins from Clark via SCTEX, CLLEx</li>
          </ul>
        </span>
        <span>
          <span class="bold-text">By Flight</span>
          <ul class="list-disc pl-7">
            <li>Fly into Clark International Airport for minimal traffic.</li>
          </ul>
        </span>
      </span>
      `,
    },
    {
      question: "Where can I stay?",
      answer: `
        <span class="flex flex-col gap-paragraph">
          <span>These are our recommended accommodations, each offering comfort and convenience for your stay</span>
          <ul class="list-disc pl-7">
            <li><a href="https://maps.app.goo.gl/Wt5Cn76iguGLDigU6" target="_blank" rel="noopener noreferrer" class="faq-link">Microtel by Wyndham</a></li>
            <li><a href="https://maps.app.goo.gl/Gc6dGmKG3UxE4R1n9" target="_blank" rel="noopener noreferrer" class="faq-link">The Quarters By Rosey</a></li>
            <li><a href="https://maps.app.goo.gl/aH5GQMikbRUgFFph7" target="_blank" rel="noopener noreferrer" class="faq-link">Harvest Hotel</a></li>
            <li><a href="https://maps.app.goo.gl/5HqtkL9VomX8ETm2A" target="_blank" rel="noopener noreferrer" class="faq-link">Amada Plaza</a></li>
            <li><a href="https://www.airbnb.com/s/Cabanatuan-City--Nueva-Ecija--Philippines/homes" target="_blank" rel="noopener noreferrer" class="faq-link">Airbnb</a></li>
          </ul>
        </span>
      `,
    },
    {
      question: "How do I get around?",
      answer: `We recommend bringing your own car due to the lack of taxis in Cabanatuan City, but if you are not able to find parking spaces, <span class="bold-text">tricycles</span> are also a viable choice.`,
    },
  ];

  return (
    <main className="mt-[8dvh] min-h-[90dvh] w-full md:mt-[10dvh]">
      <div className="container">
        <div className="mt-[-1rem] mb-[1.5rem] flex h-full w-full flex-col gap-[1rem] saturate-200 md:mt-[-1rem] md:mb-[2.5rem]">
          <h1 className="hero-heading-smaller deboss magic-text z-10 w-full pt-[1.8rem] pb-[3rem] text-center font-title-cursive font-[500] brightness-85 contrast-[120%]">
            Frequently Asked Questions
          </h1>
          <h3 className="deboss mt-[-2.5rem] text-center font-serif font-[400] text-primary/80 italic">
            Kindly read through the information for a smooth attendance
          </h3>
        </div>
        <div className="readable-container bg-background-light shadow-sm">
          <Accordion
            type="single"
            collapsible
            className="relative w-full p-[2rem]"
          >
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>
                  <span dangerouslySetInnerHTML={{ __html: faq.answer }} />
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </main>
  );
}
