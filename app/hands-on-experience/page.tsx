import type { Metadata } from "next";
import Link from "next/link";
import VideoBackground from "@/components/VideoBackground";
import VideoDisclaimer from "@/components/VideoDisclaimer";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { exhibitors } from "@/data/exhibitors";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Hands-on Experience — ${site.eventName}`,
  description:
    "Three dedicated industrial hands-on masterclasses: MathWorks, Noraxon, and Labellerr AI covering MATLAB robotics simulation, surface EMG biomechanics, and computer vision data pipelines.",
};

export default function HandsOnExperiencePage() {
  return (
    <>
      {/* HERO BANNER */}
      <section className="relative h-[44vh] min-h-[340px] overflow-hidden text-white flex items-end">
        <VideoBackground src="/videos/hands-on-experience.mp4" />
        <VideoDisclaimer />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/50 to-ink/65" />
        <div className="relative z-10 wrap pb-12">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-xs text-white/90 text-[12px] font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3 border border-white/15">
            Industrial Masterclasses
          </div>
          <h1 className="font-display font-bold text-[36px] md:text-[52px] max-w-3xl leading-tight">
            Hands-on Experience
          </h1>
          <p className="text-[15px] md:text-[17px] text-white/80 max-w-2xl mt-2 font-serif italic">
            Three dedicated industrial sessions in LP-109, TIET, Patiala · October 30 – 31, 2026
          </p>
        </div>
      </section>

      {/* WORKSHOP CARDS SECTION */}
      <section className="bg-surface py-20 md:py-24">
        <div className="wrap">
          <Reveal>
            <div className="max-w-3xl mb-16">
              <h2 className="font-display font-bold text-[28px] md:text-[38px] text-navy leading-snug">
                Practical Training with Industry Leaders
              </h2>
              <p className="text-[16px] text-fg/80 leading-relaxed mt-3">
                Alongside the keynote talks and technical sessions, three premier industry partners
                conduct specialized, laboratory-grade hands-on workshops. These sessions equip participants with practical skills in model-based robotics design,
                biomechanical surface EMG sensing, and automated computer vision pipelines.
              </p>
            </div>
          </Reveal>

          {/* 3 HANDS-ON MASTERCLASS CARDS */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {exhibitors.map((ex, i) => (
              <Reveal key={ex.name} delay={i * 0.1} className="h-full">
                <div className="bg-paper border border-line rounded-xl p-7 h-full flex flex-col justify-between shadow-xs hover:shadow-md transition-all group">
                  <div>
                    {/* Header: Session Code & Day */}
                    <div className="flex items-center justify-between gap-2 pb-4 mb-5 border-b border-line">
                      <span className="inline-flex items-center gap-1.5 text-[12px] font-bold text-crimson uppercase tracking-wide bg-crimson/10 px-2.5 py-1 rounded-full">
                        {ex.sessionCode}
                      </span>
                      <span className="text-[12px] font-medium text-steel font-mono">
                        {ex.day.split("·")[0].trim()}
                      </span>
                    </div>

                    {/* Logo & Company Name */}
                    <div className="h-14 mb-4 flex items-center">
                      {ex.logo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                          src={ex.logo}
                          alt={`${ex.name} logo`}
                          className="h-9 max-w-[170px] object-contain transition-transform group-hover:scale-105"
                        />
                      ) : (
                        <div className="h-12 w-12 bg-white rounded border border-line flex items-center justify-center text-[14px] font-bold text-navy">
                          {ex.name.slice(0, 2).toUpperCase()}
                        </div>
                      )}
                    </div>

                    <h3 className="font-display font-bold text-[22px] text-navy mb-2">
                      {ex.name}
                    </h3>
                    <p className="text-[13px] font-semibold text-crimson mb-4 leading-snug">
                      {ex.focus}
                    </p>

                    {/* Instructor & Venue Badges */}
                    <div className="space-y-1.5 mb-5 text-[12.5px]">
                      <div className="flex items-center gap-2 text-navy font-medium">
                        <span className="text-steel">Instructor:</span>
                        <span>{ex.instructor}</span>
                      </div>
                      <div className="flex items-center gap-2 text-navy font-medium">
                        <span className="text-steel">Venue:</span>
                        <span className="bg-emerald-50 text-emerald-800 font-semibold px-2 py-0.5 rounded border border-emerald-200">
                          {ex.venue}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-steel">
                        <span>Timing:</span>
                        <span>{ex.timing}</span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-[14px] text-steel leading-relaxed mb-6">
                      {ex.description}
                    </p>

                    {/* Key Topics */}
                    <div className="pt-4 border-t border-line/70">
                      <p className="text-[12px] font-bold uppercase tracking-wider text-navy mb-2.5">
                        Key Hands-on Topics:
                      </p>
                      <ul className="space-y-1.5 text-[13px] text-steel">
                        {ex.keyTopics.map((topic) => (
                          <li key={topic} className="flex items-start gap-2">
                            <span className="text-crimson font-bold shrink-0 mt-0.5">✓</span>
                            <span>{topic}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Footer Link */}
                  {ex.url && (
                    <div className="pt-6 mt-6 border-t border-line flex items-center justify-between">
                      <a
                        href={ex.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[13px] font-semibold text-navy hover:text-crimson transition-colors inline-flex items-center gap-1.5"
                      >
                        Visit official website
                        <svg
                          width="13"
                          height="13"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </a>
                      <span className="text-[12px] text-steel font-mono font-medium">LP-109</span>
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>

          {/* VENUE & LOGISTICS NOTE */}
          <Reveal delay={0.35}>
            <div className="mt-16 bg-paper border border-line rounded-xl p-8 flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h4 className="font-display font-bold text-[19px] text-navy mb-1.5">
                  Participant Preparation &amp; Logistics
                </h4>
                <p className="text-[14.5px] text-steel max-w-2xl leading-relaxed">
                  All hands-on masterclasses take place in <b>Workshop Lab LP-109</b>. Participants are
                  encouraged to bring their laptops. Any required software trials, datasets, and starter code
                  will be shared at the start of each session.
                </p>
              </div>
              <Link
                href="/schedule"
                className="shrink-0 inline-flex items-center gap-2 bg-navy text-white hover:bg-navy-deep px-6 py-3 text-[14px] font-semibold rounded-md transition-colors shadow-xs"
              >
                <span>View Full Schedule</span>
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection heading="Ready to attend the hands-on masterclasses?" />
    </>
  );
}
