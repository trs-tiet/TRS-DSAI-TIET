import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { sponsors } from "@/data/sponsors";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Sponsors — ${site.eventName}`,
};

export default function SponsorsPage() {
  return (
    <>
      <section className="bg-navy-deep text-white py-20">
        <div className="wrap">
          <p className="text-[14px] text-white/60 mb-3">Supporting the workshop</p>
          <h1 className="font-display font-bold text-[36px] md:text-[52px] max-w-2xl mb-4">
            Sponsors
          </h1>
          <p className="text-white/70 max-w-lg text-[15.5px]">
            Organizations backing {site.eventName}. Interested in sponsoring? Reach out via the
            contact page.
          </p>
        </div>
      </section>

      <section className="bg-paper py-24 min-h-[40vh]">
        <div className="wrap">
          {sponsors.length === 0 ? (
            <Reveal>
              <div className="border border-dashed border-line bg-surface/60 py-20 text-center">
                <p className="text-steel text-[14.5px]">No sponsors confirmed yet — check back soon.</p>
              </div>
            </Reveal>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-line">
              {sponsors.map((s, i) => (
                <Reveal key={s.name} delay={i * 0.05}>
                  <div className="bg-surface p-9 h-full flex flex-col items-center justify-center gap-4">
                    {s.logo ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img src={s.logo} alt={`${s.name} logo`} className="h-8 w-auto" />
                    ) : (
                      <span className="font-display font-semibold text-[16px] text-steel">
                        {s.name}
                      </span>
                    )}
                  </div>
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      <CTASection heading="Interested in sponsoring TRS-DSAI 2026?" />
    </>
  );
}
