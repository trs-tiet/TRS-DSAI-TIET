"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { faqs } from "@/data/faq";
import RegistrationFeeTable from "./RegistrationFeeTable";

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="border-t border-line">
      {faqs.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <div key={item.question} className="border-b border-line">
            <button
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex justify-between items-center gap-6 py-6 text-left"
            >
              <span className="text-[16.5px] font-medium font-display">{item.question}</span>
              <span
                className={`text-crimson text-[22px] leading-none transition-transform duration-200 shrink-0 ${
                  isOpen ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <p className="text-[14.5px] text-steel pb-6 max-w-xl">{item.answer}</p>
                  {item.feeTable && (
                    <div className="pb-8 max-w-3xl">
                      <RegistrationFeeTable />
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
