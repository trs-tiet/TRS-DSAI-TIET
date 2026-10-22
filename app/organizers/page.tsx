import type { Metadata } from "next";
import VideoBackground from "@/components/VideoBackground";
import Reveal from "@/components/Reveal";
import OrganizerCard from "@/components/OrganizerCard";
import CTASection from "@/components/CTASection";
import { organizers, supportingTeam, coreTeam } from "@/data/organizers";
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
        <div className="relative z-10 wrap pb-12">
          <p className="text-[14px] text-white/70 mb-3">Behind the workshop</p>
          <h1 className="font-display font-bold text-[36px] md:text-[52px] max-w-2xl mb-4">
            Organizers
          </h1>
          <p className="text-white/85 max-w-lg text-[15.5px]">
            {site.organizer}, with {site.partners.join(" and ")}, organize and run this
            workshop end to end.
          </p>
        </div>
      </section>

      <section className="bg-surface py-12">
        <div className="wrap">
          {/* Organizing Committee */}
          <div>
            <Reveal className="text-center mb-6">
              <h2 className="font-display font-semibold text-[24px] mb-1.5">Organizing committee</h2>
              <p className="text-steel text-[14px]">Click a card for a fuller bio.</p>
            </Reveal>
            <div className="flex flex-wrap justify-center gap-6">
              {organizers.map((o, i) => (
                <Reveal key={o.name} delay={i * 0.05} className="w-[calc(50%-12px)] sm:w-[200px] max-w-[200px] flex-none">
                  <OrganizerCard organizer={o} />
                </Reveal>
              ))}
            </div>
          </div>

          {/* Supporting Team */}
          <div className="mt-10 pt-8 border-t border-line">
            <Reveal className="text-center mb-6">
              <h2 className="font-display font-semibold text-[24px] mb-1.5">Supporting team</h2>
              <p className="text-steel text-[14px]">Faculty coordinators and advisory members.</p>
            </Reveal>
            <div className="flex flex-wrap justify-center gap-6">
              {supportingTeam.map((o, i) => (
                <Reveal key={o.name} delay={i * 0.05} className="w-[calc(50%-12px)] sm:w-[200px] max-w-[200px] flex-none">
                  <OrganizerCard organizer={o} />
                </Reveal>
              ))}
            </div>
          </div>

          {/* Core Team */}
          <div className="mt-10 pt-8 border-t border-line">
            <Reveal className="text-center mb-6">
              <h2 className="font-display font-semibold text-[24px] mb-1.5">Core team</h2>
              <p className="text-steel text-[14px]">Student and research coordinators driving the workshop execution.</p>
            </Reveal>
            <div className="flex flex-wrap justify-center gap-6 max-w-[680px] mx-auto">
              {coreTeam.map((o, i) => (
                <Reveal key={o.name} delay={i * 0.05} className="w-[calc(50%-12px)] sm:w-[200px] max-w-[200px] flex-none">
                  <OrganizerCard organizer={o} />
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection heading="Questions for the organizing team?" />
    </>
  );
}
