import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SpeakerCard from "@/components/SpeakerCard";
import CTASection from "@/components/CTASection";
import { speakers } from "@/data/speakers";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Speakers — ${site.eventName}`,
};

export default function SpeakersPage() {
  return (
    <>
      <section className="bg-ink text-white py-20">
        <div className="wrap">
          <p className="text-[14px] text-white/60 mb-3">People</p>
          <h1 className="font-display font-bold text-[36px] md:text-[52px] max-w-2xl mb-4">
            Speakers
          </h1>
          <p className="text-white/70 max-w-lg text-[15.5px]">
            Invited academic and industry speakers, in the order listed in the workshop brochure.
          </p>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="wrap">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {speakers.map((sp, i) => (
              <Reveal key={sp.name} delay={i * 0.04} className="h-full">
                <SpeakerCard speaker={sp} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Want to hear from this line-up in person?" />
    </>
  );
}
