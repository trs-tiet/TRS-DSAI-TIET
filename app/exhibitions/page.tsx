import type { Metadata } from "next";
import VideoBackground from "@/components/VideoBackground";
import Reveal from "@/components/Reveal";
import CTASection from "@/components/CTASection";
import { exhibitors } from "@/data/exhibitors";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Exhibitions — ${site.eventName}`,
};

export default function ExhibitionsPage() {
  return (
    <>
      <section className="relative h-[42vh] min-h-[320px] overflow-hidden text-white flex items-end">
        <VideoBackground src="/videos/exhibitions.mp4" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/45 to-ink/60" />
        <div className="relative z-10 wrap pb-12">
          <p className="text-[14px] text-white/70 mb-3">On the floor</p>
          <h1 className="font-display font-bold text-[36px] md:text-[52px] max-w-2xl">
            Industrial exhibitions
          </h1>
        </div>
      </section>

      <section className="bg-white py-24">
        <div className="wrap">
          <Reveal>
            <p className="text-[16px] text-[#333] max-w-xl mb-16">
              Alongside the talks, six industry partners run live exhibitions and workshops
              covering motion capture, biomechanics, EMG sensing, robotic manipulation, and
              computer vision.
            </p>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-px bg-line">
            {exhibitors.map((ex, i) => (
              <Reveal key={ex.name} delay={i * 0.05}>
                <div className="bg-white p-9 h-full flex flex-col gap-4 border border-line">
                  <div className="h-10 w-10 bg-paper flex items-center justify-center text-[11px] font-semibold text-steel">
                    {ex.name.slice(0, 2).toUpperCase()}
                  </div>
                  <h3 className="font-display font-semibold text-[19px]">{ex.name}</h3>
                  <p className="text-[14.5px] text-steel">{ex.focus}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CTASection heading="Want a hands-on demo slot with an exhibitor?" />
    </>
  );
}
