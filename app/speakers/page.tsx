import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import SpeakerCard from "@/components/SpeakerCard";
import CTASection from "@/components/CTASection";
import { academicSpeakers, industrySpeakers } from "@/data/speakers";
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
            Invited academic researchers and industry practitioners joining across both days.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="wrap">
          <Reveal>
            <h2 className="font-display font-semibold text-[22px] mb-2">Academic speakers</h2>
            <p className="text-steel text-[14px] mb-8">Click a name for a fuller bio.</p>
          </Reveal>
          <div className="border-t border-line mb-20">
            {academicSpeakers.map((sp) => (
              <SpeakerCard key={sp.name} speaker={sp} />
            ))}
          </div>

          <Reveal>
            <h2 className="font-display font-semibold text-[22px] mb-2">Industrial speakers</h2>
            <p className="text-steel text-[14px] mb-8">Click a name for a fuller bio.</p>
          </Reveal>
          <div className="border-t border-line">
            {industrySpeakers.map((sp) => (
              <SpeakerCard key={sp.name} speaker={sp} />
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Want to hear from this line-up in person?" />
    </>
  );
}
