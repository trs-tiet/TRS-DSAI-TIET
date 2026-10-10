import type { Metadata } from "next";
import VideoBackground from "@/components/VideoBackground";
import VideoDisclaimer from "@/components/VideoDisclaimer";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import ScheduleGrid from "@/components/ScheduleGrid";
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
            Two days, four focuses
          </h1>
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="wrap">
          <Reveal>
            <ScheduleGrid />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}
