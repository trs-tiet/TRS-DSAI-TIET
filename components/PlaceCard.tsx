import Image from "next/image";
import type { PlaceToVisit } from "@/data/places-patiala";

export default function PlaceCard({ place }: { place: PlaceToVisit }) {
  return (
    <div className="bg-surface border border-line grid sm:grid-cols-[220px_1fr] gap-0">
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
        <div className="flex gap-5 flex-wrap">
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
          {place.mapsUrl && (
            <a
              href={place.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-semibold text-crimson border-b border-crimson pb-0.5"
            >
              View on map
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
