import type { Metadata } from "next";
import Image from "next/image";
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
          If you&apos;re staying an extra day, Patiala&apos;s royal history is easy to explore
          between sessions.
        </p>

        <div className="flex flex-col gap-px bg-line">
          {placesToVisit.map((place, i) => (
            <Reveal key={place.name} delay={i * 0.05}>
              <div className="bg-white border border-line grid sm:grid-cols-[220px_1fr] gap-0">
                <div className="relative aspect-[4/3] sm:aspect-auto bg-paper">
                  {place.photo ? (
                    <Image src={place.photo} alt={place.name} fill className="object-cover" />
                  ) : (
                    <div className="h-full w-full flex items-center justify-center text-[11px] text-steel">
                      Photo coming soon
                    </div>
                  )}
                </div>
                <div className="p-7">
                  <div className="flex justify-between items-start gap-4 mb-3">
                    <h3 className="font-display font-semibold text-[19px]">{place.name}</h3>
                    {place.distance && (
                      <span className="text-[12px] text-crimson font-semibold whitespace-nowrap">
                        {place.distance}
                      </span>
                    )}
                  </div>
                  <p className="text-[14.5px] text-steel mb-3">{place.description}</p>
                  {place.link && (
                    <a
                      href={place.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[13px] font-semibold text-navy border-b border-navy pb-0.5"
                    >
                      Learn more
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
