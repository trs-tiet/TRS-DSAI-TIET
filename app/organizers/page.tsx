import type { Metadata } from "next";
import VideoBackground from "@/components/VideoBackground";
import Reveal from "@/components/Reveal";
import OrganizerCard from "@/components/OrganizerCard";
import CTASection from "@/components/CTASection";
import { organizers } from "@/data/organizers";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Organizers — ${site.eventName}`,
};

export default function OrganizersPage() {
  return (
    <>
      <section className="relative h-[42vh] min-h-[320px] overflow-hidden text-white flex items-end">
        <VideoBackground src="/videos/organizers.mp4" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/55 to-ink/35" />
        <div className="relative z-10 w-full px-6 md:px-10 pb-12">
          <p className="text-[14px] text-white/70 mb-3">Behind the workshop</p>
          <h1 className="font-display font-bold text-[36px] md:text-[52px] max-w-2xl mb-4">
            Organizers
          </h1>
          <p className="text-white/85 max-w-lg text-[15.5px]">
            The {site.organizer}, with {site.partners.join(" and ")}, organize and run this
            workshop end to end.
          </p>
        </div>
      </section>

      <section className="bg-surface py-20">
        <div className="wrap">
          <Reveal>
            <h2 className="font-display font-semibold text-[22px] mb-2">Organizing committee</h2>
            <p className="text-steel text-[14px] mb-8">Click a card for a fuller bio.</p>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {organizers.map((o, i) => (
              <Reveal key={o.name} delay={i * 0.06} className="h-full">
                <OrganizerCard organizer={o} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Questions for the organizing team?" />
    </>
  );
}
