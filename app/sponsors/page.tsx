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
            <div className="grid sm:grid-cols-2 gap-6">
              {sponsors.map((s, i) => (
                <Reveal key={s.name} delay={i * 0.05} className="h-full">
                  <div className="bg-surface border border-line h-full flex flex-col p-8">
                    <div className="h-14 flex items-center mb-6">
                      {s.logo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={s.logo} alt={`${s.name} logo`} className="h-12 w-auto max-w-[220px] object-contain" />
                      ) : (
                        <span className="font-display font-semibold text-[20px] text-steel">{s.name}</span>
                      )}
                    </div>
                    <h3 className="font-display font-semibold text-[19px] mb-2">{s.name}</h3>
                    <p className="text-[14.5px] text-steel leading-relaxed">{s.description}</p>
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
