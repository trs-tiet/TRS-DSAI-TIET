import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { organizers } from "@/data/organizers";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Organizers — ${site.eventName}`,
};

function initialsOf(name: string) {
  return name
    .replace(/^(Prof\.|Dr\.|Mr\.|Ms\.)\s*/i, "")
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("");
}

export default function OrganizersPage() {
  return (
    <>
      <section className="bg-ink text-white py-20">
        <div className="wrap">
          <p className="text-[14px] text-white/60 mb-3">Behind the workshop</p>
          <h1 className="font-display font-bold text-[36px] md:text-[52px] max-w-2xl mb-4">
            Organizers
          </h1>
          <p className="text-white/70 max-w-lg text-[15.5px]">
            The {site.organizer}, with {site.partners.join(" and ")}, organize and run this
            workshop end to end.
          </p>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="wrap">
          <Reveal>
            <h2 className="font-display font-semibold text-[22px] mb-8">Organizing committee</h2>
          </Reveal>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-px bg-line">
            {organizers.map((o, i) => (
              <Reveal key={o.name} delay={i * 0.06}>
                <div className="bg-white p-8 h-full flex flex-col items-start gap-4">
                  <div className="h-14 w-14 rounded-full bg-navy text-white flex items-center justify-center font-display font-semibold text-[15px]">
                    {initialsOf(o.name)}
                  </div>
                  <div>
                    <div className="text-[17px] font-semibold font-display">{o.name}</div>
                    <div className="text-[14px] text-steel mt-1">{o.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="text-[13.5px] text-steel mt-10 max-w-lg">
            Full organizing committee list coming soon.
          </p>
        </div>
      </section>

      <CTASection heading="Questions for the organizing team?" />
    </>
  );
}
