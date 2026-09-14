import type { Metadata } from "next";
import FaqAccordion from "@/components/FaqAccordion";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `FAQ — ${site.eventName}`,
};

export default function FaqPage() {
  return (
    <section className="bg-white py-24 min-h-[60vh]">
      <div className="wrap max-w-3xl">
        <p className="text-[14px] text-steel mb-3">Good to know</p>
        <h1 className="font-display font-bold text-[36px] md:text-[48px] mb-4">
          Frequently asked questions
        </h1>
        <p className="text-steel text-[15.5px] mb-14 max-w-lg">
          Can&apos;t find what you&apos;re looking for?{" "}
          <a href={`mailto:${site.contact.email}`} className="text-ink underline">
            Email us
          </a>
          .
        </p>
        <FaqAccordion />
      </div>
    </section>
  );
}
