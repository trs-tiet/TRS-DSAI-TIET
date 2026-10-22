import type { Metadata } from "next";
import VideoBackground from "@/components/VideoBackground";
import VideoDisclaimer from "@/components/VideoDisclaimer";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import {
  goldSponsors,
  silverSponsors,
  bronzeSponsors,
  technicalPartners,
  type Sponsor,
} from "@/data/sponsors";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Sponsors — ${site.eventName}`,
};

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  const cardBody = (
    <div className="bg-surface border border-line h-full flex flex-col items-center text-center p-7 sm:p-8 hover:shadow-md transition-shadow group w-full">
      <div className="h-16 w-full flex items-center justify-center mb-5">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={sponsor.logo}
          alt={`${sponsor.name} logo`}
          className="max-h-12 w-auto max-w-[180px] object-contain"
        />
      </div>
      <h3 className="font-display font-semibold text-[17.5px] text-fg mb-1.5">
        {sponsor.name}
      </h3>
      <p className="text-[13px] text-steel leading-relaxed">{sponsor.focus}</p>
    </div>
  );

  if (sponsor.url) {
    return (
      <a
        href={sponsor.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block h-full cursor-pointer"
      >
        {cardBody}
      </a>
    );
  }
  return <div className="h-full">{cardBody}</div>;
}

export default function SponsorsPage() {
  return (
    <>
      <section className="relative h-[42vh] min-h-[320px] overflow-hidden text-white flex items-end">
        <VideoBackground src="/videos/sponsors.mp4" />
        <VideoDisclaimer />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/45 to-ink/60" />
        <div className="relative z-10 wrap pb-12">
          <p className="text-[14px] text-white/70 mb-3">Supporting the workshop</p>
          <h1 className="font-display font-bold text-[36px] md:text-[52px] max-w-2xl">
            Sponsors
          </h1>
          <p className="text-white/80 max-w-lg text-[15.5px] mt-4">
            Organizations backing {site.eventName}. Interested in sponsoring? Reach out via the
            contact page.
          </p>
        </div>
      </section>

      <section className="bg-paper py-16 min-h-[40vh]">
        <div className="wrap">
          {/* 1. GOLD SPONSOR */}
          <div>
            <Reveal className="flex flex-col items-center text-center mb-8">
              <h2 className="font-display font-bold text-[24px] sm:text-[28px] uppercase tracking-wider">
                <span className="text-[#C59B27]">GOLD </span>
                <span className="text-navy dark:text-fg">SPONSOR</span>
              </h2>
              <div className="w-16 h-1 bg-[#C59B27] mt-2 rounded-full" />
            </Reveal>
            <div className="flex justify-center">
              {goldSponsors.map((s) => (
                <Reveal key={s.name} className="w-full sm:w-[280px] max-w-[280px]">
                  <SponsorCard sponsor={s} />
                </Reveal>
              ))}
            </div>
          </div>

          {/* 2. SILVER SPONSOR */}
          <div className="mt-14 pt-12 border-t border-line">
            <Reveal className="flex flex-col items-center text-center mb-8">
              <h2 className="font-display font-bold text-[24px] sm:text-[28px] uppercase tracking-wider">
                <span className="text-[#7A8B99] dark:text-[#A0AEC0]">SILVER </span>
                <span className="text-navy dark:text-fg">SPONSOR</span>
              </h2>
              <div className="w-16 h-1 bg-[#7A8B99] dark:bg-[#A0AEC0] mt-2 rounded-full" />
            </Reveal>
            <div className="flex justify-center">
              {silverSponsors.map((s) => (
                <Reveal key={s.name} className="w-full sm:w-[280px] max-w-[280px]">
                  <SponsorCard sponsor={s} />
                </Reveal>
              ))}
            </div>
          </div>

          {/* 3. BRONZE SPONSORS */}
          <div className="mt-14 pt-12 border-t border-line">
            <Reveal className="flex flex-col items-center text-center mb-8">
              <h2 className="font-display font-bold text-[24px] sm:text-[28px] uppercase tracking-wider">
                <span className="text-[#A35D29] dark:text-[#C87D48]">BRONZE </span>
                <span className="text-navy dark:text-fg">SPONSORS</span>
              </h2>
              <div className="w-16 h-1 bg-[#A35D29] dark:bg-[#C87D48] mt-2 rounded-full" />
            </Reveal>
            <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
              {bronzeSponsors.map((s, i) => (
                <Reveal key={s.name} delay={i * 0.04} className="w-full sm:w-[270px] max-w-[280px]">
                  <SponsorCard sponsor={s} />
                </Reveal>
              ))}
            </div>
          </div>

          {/* 4. TECHNICAL PARTNERS */}
          <div className="mt-14 pt-12 border-t border-line">
            <Reveal className="flex flex-col items-center text-center mb-8">
              <h2 className="font-display font-bold text-[24px] sm:text-[28px] uppercase tracking-wider">
                <span className="text-[#7E22CE] dark:text-[#A855F7]">TECHNICAL </span>
                <span className="text-navy dark:text-fg">PARTNERS</span>
              </h2>
              <div className="w-16 h-1 bg-[#7E22CE] dark:bg-[#A855F7] mt-2 rounded-full" />
            </Reveal>
            <div className="flex flex-wrap justify-center gap-6 max-w-4xl mx-auto">
              {technicalPartners.map((s, i) => (
                <Reveal key={s.name} delay={i * 0.04} className="w-full sm:w-[270px] max-w-[280px]">
                  <SponsorCard sponsor={s} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection heading="Interested in sponsoring TRS-DSAI 2026?" />
    </>
  );
}
