import type { Metadata } from "next";
import VideoBackground from "@/components/VideoBackground";
import VideoDisclaimer from "@/components/VideoDisclaimer";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import ScheduleViewer from "@/components/ScheduleViewer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Schedule — ${site.eventName}`,
  description: "Complete programme schedule for TRS-DSAI 2026, including Day 1 and Day 2 keynote talks, technical paper sessions, and industrial hands-on masterclasses.",
};

export default function SchedulePage() {
  return (
    <>
      <section className="relative h-[44vh] min-h-[340px] overflow-hidden text-white flex items-end">
        <VideoBackground src="/videos/schedule.mp4" />
        <VideoDisclaimer />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/50 to-ink/65" />
        <div className="relative z-10 wrap pb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xs text-white/90 text-[12px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 border border-white/15">
            Workshop Programme
          </div>
          <h1 className="font-display font-bold text-[36px] md:text-[52px] max-w-3xl leading-tight">
            Two days, four themes
          </h1>
          <p className="text-[15px] md:text-[17px] text-white/80 max-w-2xl mt-2 font-serif italic">
            October 30 – 31, 2026 · Thapar Institute of Engineering &amp; Technology, Patiala
          </p>
        </div>
      </section>

      <section className="bg-paper py-16 md:py-24">
        <div className="wrap">
          <Reveal>
            <ScheduleViewer />
          </Reveal>
        </div>
      </section>

      <CTASection />
    </>
  );
}

