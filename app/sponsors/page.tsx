import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { sponsors, sponsorTiers } from "@/data/sponsors";
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
            Organizations backing {site.eventName} financially or in-kind. Interested in
            sponsoring? Reach out via the contact page.
          </p>
        </div>
      </section>

      <section className="bg-paper py-24 min-h-[40vh]">
        <div className="wrap">
          {sponsors.length === 0 ? (
            <Reveal>
              <div className="border border-dashed border-line bg-white/60 py-20 text-center">
                <p className="text-steel text-[14.5px]">
                  No sponsors confirmed yet — this page is wired and ready.
                  <br />
                  Add entries (with tier, logo, and link) to{" "}
                  <code className="bg-line px-1.5 py-0.5 rounded-sm">data/sponsors.ts</code>.
                </p>
              </div>
            </Reveal>
          ) : (
            <div className="flex flex-col gap-14">
              {sponsorTiers.map((tier) => {
                const tierSponsors = sponsors.filter((s) => s.tier === tier);
                if (tierSponsors.length === 0) return null;
                return (
                  <div key={tier}>
                    <h2 className="font-display font-semibold text-[20px] mb-6">{tier} sponsors</h2>
                    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-px bg-line">
                      {tierSponsors.map((s, i) => (
                        <Reveal key={s.name} delay={i * 0.05}>
                          <a
                            href={s.url ?? "#"}
                            className="bg-white p-8 h-full flex items-center justify-center"
                          >
                            <span className="font-display font-semibold text-[16px] text-steel">
                              {s.name}
                            </span>
                          </a>
                        </Reveal>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <CTASection heading="Interested in sponsoring TRS-DSAI 2026?" />
    </>
  );
}
