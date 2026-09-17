import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SpeakerCard from "@/components/SpeakerCard";
import CTASection from "@/components/CTASection";
import { academicSpeakers } from "@/data/speakers";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Academic Speakers — ${site.eventName}`,
};

export default function AcademicSpeakersPage() {
  return (
    <>
      <section className="bg-ink text-white py-20">
        <div className="wrap">
          <p className="text-[14px] text-white/60 mb-3">People · Academia</p>
          <h1 className="font-display font-bold text-[36px] md:text-[52px] max-w-2xl mb-4">
            Academic Speakers
          </h1>
          <p className="text-white/70 max-w-lg text-[15.5px]">
            Invited researchers from universities and research institutes across both days.
          </p>
        </div>
      </section>

      <section className="bg-paper py-20">
        <div className="wrap">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {academicSpeakers.map((sp, i) => (
              <Reveal key={sp.name} delay={i * 0.05}>
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
