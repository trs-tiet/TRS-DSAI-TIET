import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { placesToVisit } from "@/data/places";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Places to Visit — ${site.eventName}`,
};

export default function PlacesToVisitPage() {
  return (
    <section className="bg-white py-24 min-h-[60vh]">
      <div className="wrap">
        <p className="text-[14px] text-steel mb-3">Around Patiala</p>
        <h1 className="font-display font-bold text-[36px] md:text-[48px] max-w-2xl mb-4">
          Places to visit
        </h1>
        <p className="text-steel max-w-xl text-[15.5px] mb-16">
          If you&apos;re staying an extra day, Patiala&apos;s royal history is easy to explore between
          sessions.
        </p>

        <div className="grid md:grid-cols-2 gap-px bg-line">
          {placesToVisit.map((place, i) => (
            <Reveal key={place.name} delay={i * 0.05}>
              <div className="bg-white p-8 h-full border border-line">
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="font-display font-semibold text-[19px]">{place.name}</h3>
                  {place.distance && (
                    <span className="text-[12px] text-crimson font-semibold whitespace-nowrap">
                      {place.distance}
                    </span>
                  )}
                </div>
                <p className="text-[14.5px] text-steel">{place.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
