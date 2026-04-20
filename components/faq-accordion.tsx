"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

type FaqAccordionProps = {
  faqs: readonly {
    question: string;
    answer: string;
  }[];
};

export function FaqAccordion({ faqs }: FaqAccordionProps) {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;
        const panelId = `faq-panel-${index}`;
        const buttonId = `faq-trigger-${index}`;

        return (
          <div
            key={faq.question}
            className="overflow-hidden rounded-[24px] border border-brand-olive/10 bg-white/76 shadow-[0_18px_40px_-30px_rgba(35,50,44,0.28)]"
          >
            <button
              id={buttonId}
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left md:px-6"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() => setOpenIndex(isOpen ? -1 : index)}
            >
              <span className="pr-6 text-lg font-semibold leading-7 text-brand-ink">
                {faq.question}
              </span>
              <span
                className={cn(
                  "flex h-10 w-10 flex-none items-center justify-center rounded-full border border-brand-olive/10 bg-brand-cream text-brand-olive",
                  isOpen && "rotate-180",
                )}
              >
                <ChevronDown className="h-5 w-5" aria-hidden="true" />
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
              )}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-6 text-sm leading-7 text-brand-ink/72 md:px-6">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
