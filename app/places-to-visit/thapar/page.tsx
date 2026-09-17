import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import PlaceCard from "@/components/PlaceCard";
import { placesInThapar } from "@/data/places-thapar";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Places to Visit — In Thapar — ${site.eventName}`,
};

export default function PlacesInThaparPage() {
  return (
    <section className="bg-surface py-24 min-h-[60vh]">
      <div className="wrap">
        <p className="text-[14px] text-steel mb-3">On campus</p>
        <h1 className="font-display font-bold text-[36px] md:text-[48px] max-w-2xl mb-4">
          Places to visit — In Thapar
        </h1>
        <p className="text-steel max-w-xl text-[15.5px] mb-16">
          A few spots worth a look without leaving campus.
        </p>

        <div className="flex flex-col gap-px bg-line">
          {placesInThapar.map((place, i) => (
            <Reveal key={place.name} delay={i * 0.05}>
              <PlaceCard place={place} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
