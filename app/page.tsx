import Link from "next/link";
import Image from "next/image";
import VideoBackground from "@/components/VideoBackground";
import Countdown from "@/components/Countdown";
import Reveal from "@/components/Reveal";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import { site } from "@/data/site";
import { scheduleDays } from "@/data/schedule";
import { allSpeakers } from "@/data/speakers";
import { exhibitors } from "@/data/exhibitors";

export default function HomePage() {
  const featuredSpeakers = allSpeakers.slice(0, 5);

  return (
    <>
      {/* HERO BANNER — fixed 2.35:1 photo, main admin building */}
      <section className="relative w-full aspect-[2.35/1] overflow-hidden">
        <Image
          src="/images/hero/tiet-admin-building.jpg"
          alt="TIET main administrative building"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-black/25" />
        <div className="hidden md:block absolute z-10 top-6 right-6 text-right text-[15.5px] text-white bg-ink/60 backdrop-blur-sm px-4 py-3 rounded-sm">
          <div className="mb-1.5">{site.dateLabel}</div>
          <div>
            <strong className="font-semibold">{site.venue.rooms}</strong>, {site.venue.name}
          </div>
        </div>
      </section>

      {/* HERO CONTENT — heading, venue, countdown, CTAs */}
      <section className="bg-ink text-white pt-14 pb-16">
        <div className="wrap">
          <p className="text-[16.5px] text-[#E7C7CD] font-medium mb-4">{site.tagline}</p>
          <h1 className="font-display font-bold leading-[1.05] text-[34px] sm:text-[46px] md:text-[58px] lg:text-[64px] max-w-4xl mb-5">
            {site.eventTitle}
          </h1>
          <p className="text-[16.5px] text-white font-medium mb-2">{site.venue.name}</p>
          <p className="text-[17px] text-white/80 max-w-lg mb-9">
            Researchers, industry experts, start-ups, and students from India and abroad,
            exploring the latest advances in robotics, autonomous systems, and intelligent
            technologies.
          </p>

          <div className="mb-9">
            <Countdown />
          </div>

          <div className="flex gap-4 flex-wrap">
            <a
              href={site.registerUrl}
              className="bg-crimson text-white px-7 py-[15px] font-semibold text-[14.5px] rounded-sm hover:bg-crimson-deep transition-colors"
            >
              Register now
            </a>
            <a
              href={site.brochureUrl}
              className="border border-white/55 text-white px-7 py-[14px] font-semibold text-[14.5px] rounded-sm hover:bg-white/10 transition-colors"
            >
              Download brochure
            </a>
          </div>
        </div>
      </section>

      {/* ABOUT TEASER */}
      <section className="bg-surface py-28">
        <div className="wrap grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <h2 className="font-display font-semibold text-[34px] mb-5">
              Ideas, innovation, real-world impact
            </h2>
            <p className="text-[16.5px] text-fg max-w-md mb-4.5">
              The workshop brings together academic and industrial voices working across
              manipulation, autonomy, perception, and human-robot interaction — with two days
              built around healthcare, defence, and rescue applications.
            </p>
            <p className="text-[16.5px] text-fg max-w-md mb-9">
              Held at {site.venue.name} in partnership with {site.partners.join(" and ")}, the
              event pairs invited talks with hands-on experience sessions.
            </p>
            <div className="flex gap-10 flex-wrap">
              {site.stats.map((s) => (
                <div key={s.label}>
                  <b className="block font-display text-[32px] font-semibold text-navy">
                    {s.value}
                  </b>
                  <span className="text-[13px] text-steel">{s.label}</span>
                </div>
              ))}
            </div>
            <Link href="/about" className="inline-block mt-9 text-[14.5px] font-semibold border-b border-fg pb-0.5">
              More about the workshop
            </Link>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="relative aspect-[4/5] border border-line p-3.5 bg-paper">
              <VideoBackground src="/videos/about.mp4" className="static" />
              <div className="absolute -bottom-px left-3.5 bg-ink text-white text-xs px-3 py-1.5 font-medium">
                Precision manipulation
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SCHEDULE TEASER */}
      <section className="bg-paper py-28">
        <div className="wrap">
          <SectionHeading
            title="Two days, two focuses"
            subtitle="Each day is built around a distinct application area, with talks and exhibitions to match."
          />
        </div>
        <div className="wrap">
          <div className="grid md:grid-cols-2 gap-px bg-line">
            {scheduleDays.map((day, i) => (
              <Reveal key={day.dayLabel} delay={i * 0.1}>
                <div className="bg-surface p-10 md:p-12 min-h-[300px] flex flex-col justify-between h-full">
                  <div>
                    <div className="font-display text-[15px] text-crimson font-semibold mb-6">
                      {day.dayLabel} — {day.date}
                    </div>
                    <h3 className="text-[26px] md:text-[28px] font-semibold max-w-xs mb-3.5">
                      {day.theme}
                    </h3>
                  </div>
                  <div className="text-[13.5px] text-steel mt-6 border-t border-line pt-4.5">
                    {day.room}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* SPEAKERS TEASER */}
      <section className="bg-surface py-28">
        <div className="wrap">
          <SectionHeading
            title="Speakers joining this year"
            subtitle="A mix of academic researchers and industry practitioners."
          />
          <div className="border-t border-line">
            {featuredSpeakers.map((sp, i) => (
              <Reveal key={sp.name + i} delay={i * 0.05}>
                <div className="grid grid-cols-1 sm:grid-cols-[1fr_240px_120px] gap-2 sm:gap-6 py-5 border-b border-line items-center hover:bg-[#FAFAF8] transition-colors px-2 -mx-2">
                  <div className="text-[18px] font-semibold font-display">{sp.name}</div>
                  <div className="text-[14px] text-steel">{sp.affiliation}</div>
                  <div className="text-[12.5px] text-crimson font-semibold sm:text-right">
                    {sp.type}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="flex gap-6 flex-wrap mt-9">
            <Link href="/speakers/academia" className="text-[14.5px] font-semibold border-b border-fg pb-0.5">
              View academic speakers
            </Link>
            <Link href="/speakers/industrial" className="text-[14.5px] font-semibold border-b border-fg pb-0.5">
              View industrial speakers
            </Link>
          </div>
        </div>
      </section>

      {/* EXHIBITIONS STRIP */}
      <section className="bg-navy-deep text-white py-24">
        <div className="wrap">
          <SectionHeading
            title="Hands-on Experience"
            subtitle="Hands-on workshops running alongside the talks."
            light
          />
        </div>
        <div className="wrap">
          <div className="flex flex-wrap border-t border-white/15">
            {exhibitors.map((ex) => (
              <div
                key={ex.name}
                className="flex-1 min-w-[180px] p-6 border-r border-b border-white/15"
              >
                <b className="font-display text-[16px] block mb-1.5">{ex.name}</b>
                <span className="text-[12.5px] text-[#AEB6C4]">{ex.focus}</span>
              </div>
            ))}
          </div>
          <Link
            href="/hands-on-experience"
            className="inline-block mt-9 text-[14.5px] font-semibold border-b border-white pb-0.5"
          >
            Explore hands-on experience
          </Link>
        </div>
      </section>

      <CTASection />
    </>
  );
}
