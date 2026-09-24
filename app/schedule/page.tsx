import type { Metadata } from "next";
import Image from "next/image";
import VideoBackground from "@/components/VideoBackground";
import VideoDisclaimer from "@/components/VideoDisclaimer";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { scheduleDays } from "@/data/schedule";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Schedule — ${site.eventName}`,
};

export default function SchedulePage() {
  return (
    <>
      <section className="relative h-[42vh] min-h-[320px] overflow-hidden text-white flex items-end">
        <VideoBackground src="/videos/schedule.mp4" />
        <VideoDisclaimer />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/45 to-ink/60" />
        <div className="relative z-10 wrap pb-12">
          <p className="text-[14px] text-white/70 mb-3">Programme</p>
          <h1 className="font-display font-bold text-[36px] md:text-[52px] max-w-2xl">
            Two days, two focuses
          </h1>
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="wrap flex flex-col gap-px bg-line">
          {scheduleDays.map((day, i) => (
            <Reveal key={day.dayLabel} delay={i * 0.1}>
              <div className="bg-surface p-8 md:p-12">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-8">
                  <div>
                    <div className="font-display text-[15px] text-crimson font-semibold mb-3">
                      {day.dayLabel} — {day.date}
                    </div>
                    <h2 className="text-[26px] md:text-[30px] font-semibold max-w-md">
                      {day.theme}
                    </h2>
                  </div>
                </div>

                <div className="border-t border-line pt-6">
                  {day.image ? (
                    <div className="relative w-full">
                      <Image
                        src={day.image}
                        alt={`${day.dayLabel} schedule`}
                        width={1600}
                        height={900}
                        className="w-full h-auto"
                      />
                    </div>
                  ) : (
                    <p className="text-[14.5px] text-steel">
                      Detailed session-by-session timing to be announced soon.
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
}
