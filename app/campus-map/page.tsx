import type { Metadata } from "next";
import VideoBackground from "@/components/VideoBackground";
import VideoDisclaimer from "@/components/VideoDisclaimer";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import CampusMapViewer from "@/components/CampusMapViewer";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Campus Map — ${site.eventName}`,
  description:
    "Interactive high-definition TIET Patiala Campus Map for TRS-DSAI 2026 delegates, showing Lecture Hall Complex (LP-108 & LP-109), Main Auditorium, Library, Dining, and Guest House.",
};

export default function CampusMapPage() {
  return (
    <>
      {/* HERO SECTION */}
      <section className="relative h-[44vh] min-h-[340px] overflow-hidden text-white flex items-end">
        <VideoBackground src="/videos/about.mp4" />
        <VideoDisclaimer />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/50 to-ink/65" />
        <div className="relative z-10 wrap pb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xs text-white/90 text-[12px] font-bold uppercase tracking-wider px-3.5 py-1 rounded-full mb-3 border border-white/15">
            Campus Navigation Guide
          </div>
          <h1 className="font-display font-bold text-[36px] md:text-[52px] max-w-3xl leading-tight">
            TIET Campus Map
          </h1>
          <p className="text-[15px] md:text-[17px] text-white/85 max-w-2xl mt-2 font-serif italic">
            Navigate between Lecture Hall Complex (LP-108 &amp; LP-109), Main Auditorium, Nava Nalanda Library, dining hubs, and guest accommodation.
          </p>
        </div>
      </section>

      {/* MAP & GUIDE SECTION */}
      <section className="bg-paper py-16 md:py-24">
        <div className="wrap">
          <Reveal>
            <CampusMapViewer />
          </Reveal>
        </div>
      </section>

      {/* CALL TO ACTION */}
      <CTASection heading="Join us on campus for two days of robotics & AI innovation" />
    </>
  );
}
