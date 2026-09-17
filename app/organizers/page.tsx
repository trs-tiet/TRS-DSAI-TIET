import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { organizers } from "@/data/organizers";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Organizers — ${site.eventName}`,
};

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

      <section className="bg-surface py-20">
        <div className="wrap">
          <Reveal>
            <h2 className="font-display font-semibold text-[22px] mb-8">Organizing committee</h2>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {organizers.map((o, i) => (
              <Reveal key={o.name} delay={i * 0.06}>
                <div className="bg-surface border border-line flex flex-col">
                  <div className="relative w-full aspect-square bg-paper">
                    {o.photo && (
                      <Image src={o.photo} alt={o.name} fill sizes="250px" className="object-cover" />
                    )}
                  </div>
                  <div className="p-5">
                    <div className="text-[16px] font-semibold font-display mb-1">{o.name}</div>
                    <div className="text-[13px] text-steel">{o.role}</div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Questions for the organizing team?" />
    </>
  );
}
