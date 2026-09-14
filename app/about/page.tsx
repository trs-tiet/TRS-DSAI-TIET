import type { Metadata } from "next";
import VideoBackground from "@/components/VideoBackground";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `About — ${site.eventName}`,
};

export default function AboutPage() {
  return (
    <>
      <section className="relative h-[46vh] min-h-[360px] overflow-hidden text-white flex items-end">
        <VideoBackground src="/videos/about.mp4" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/40 to-ink/60" />
        <div className="relative z-10 wrap pb-14">
          <p className="text-[14px] text-white/70 mb-3">About the workshop</p>
          <h1 className="font-display font-bold text-[36px] md:text-[52px] max-w-2xl">
            Ideas, innovation, and real-world impact
          </h1>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="wrap grid md:grid-cols-[1.4fr_1fr] gap-16">
          <Reveal>
            <p className="text-[17px] text-[#333] mb-6 max-w-xl">
              The TRS-DSAI International Workshop on Intelligent Systems brings together
              researchers, industry experts, start-ups, and students from India and abroad to
              explore the latest advances in robotics, autonomous systems, and intelligent
              technologies.
            </p>
            <p className="text-[17px] text-[#333] mb-6 max-w-xl">
              Across two days, the programme moves between invited academic talks, industry
              perspectives, and live exhibitions — fostering knowledge exchange, awareness, and
              academic-industry partnerships.
            </p>
            <p className="text-[17px] text-[#333] max-w-xl">
              The event is organized by the {site.organizer}, in partnership with{" "}
              {site.partners.join(" and ")}, hosted at {site.venue.fullAddress}.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="bg-paper border border-line p-8">
              <h3 className="font-display font-semibold text-[18px] mb-6">At a glance</h3>
              <dl className="flex flex-col gap-5 text-[14.5px]">
                <div className="flex justify-between border-b border-line pb-3">
                  <dt className="text-steel">Dates</dt>
                  <dd className="font-medium text-right">{site.dateLabel}</dd>
                </div>
                <div className="flex justify-between border-b border-line pb-3">
                  <dt className="text-steel">Venue</dt>
                  <dd className="font-medium text-right">
                    {site.venue.rooms}, {site.venue.name}
                  </dd>
                </div>
                <div className="flex justify-between border-b border-line pb-3">
                  <dt className="text-steel">Organizer</dt>
                  <dd className="font-medium text-right">{site.organizer}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-steel">Partners</dt>
                  <dd className="font-medium text-right">{site.partners.join(", ")}</dd>
                </div>
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-paper py-24">
        <div className="wrap">
          <SectionHeading title="Why this workshop" subtitle="Three things the programme is built to do." />
          <div className="grid md:grid-cols-3 gap-px bg-line">
            {[
              {
                title: "Knowledge exchange",
                body: "Direct access to researchers and practitioners actively working on the problems being discussed.",
              },
              {
                title: "Academic-industry partnerships",
                body: "A shared room for university labs and companies building deployable robotics and AI systems.",
              },
              {
                title: "Hands-on exposure",
                body: "Live exhibitions from motion capture, EMG, and robotic manipulation partners alongside the talks.",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08}>
                <div className="bg-white p-9 h-full">
                  <h3 className="font-display font-semibold text-[19px] mb-3">{item.title}</h3>
                  <p className="text-[14.5px] text-steel">{item.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Curious about the full programme?" />
    </>
  );
}
