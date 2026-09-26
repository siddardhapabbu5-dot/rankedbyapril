"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionHeading, FadeIn } from "@/components/shared/section-heading";
import { homeFaqs } from "@/lib/data/content";

export function FaqSection({
  faqs = homeFaqs,
  title = "Questions clients actually ask",
}: {
  faqs?: { question: string; answer: string }[];
  title?: string;
}) {
  return (
    <section className="section-pad">
      <div className="container-page grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-4">
          <SectionHeading eyebrow="FAQ" title={title} />
        </div>
        <FadeIn className="lg:col-span-8" delay={0.1}>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.question} value={`item-${i}`}>
                <AccordionTrigger>{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  );
}
