import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";
import { onCampusStay, nearbyHotels, travelRoutes } from "@/data/accommodation";

export const metadata: Metadata = {
  title: `Accommodation & Travel — ${site.eventName}`,
};

export default function AccommodationPage() {
  return (
    <section className="bg-paper py-24 min-h-[60vh]">
      <div className="wrap">
        <p className="text-[14px] text-steel mb-3">Getting here &amp; staying over</p>
        <h1 className="font-display font-bold text-[36px] md:text-[48px] max-w-2xl mb-4">
          Accommodation &amp; Travel
        </h1>
        <p className="text-steel max-w-xl text-[15.5px] mb-16">
          On-campus stay is arranged through the organizing committee; a few nearby options are
          listed below if you need alternatives, along with how to reach {site.venue.name}.
        </p>

        <Reveal>
          <h2 className="font-display font-semibold text-[22px] mb-6">On-campus stay</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-px bg-line mb-16">
          {onCampusStay.map((item, i) => (
            <Reveal key={item.name} delay={i * 0.06}>
              <div className="bg-white p-8 h-full">
                <h3 className="font-display font-semibold text-[18px] mb-2">{item.name}</h3>
                <p className="text-[13.5px] text-crimson font-medium mb-3">{item.audience}</p>
                <p className="text-[14.5px] text-steel">{item.note}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h2 className="font-display font-semibold text-[22px] mb-6">Nearby hotels</h2>
        </Reveal>
        <div className="flex flex-col gap-px bg-line mb-16">
          {nearbyHotels.map((h, i) => (
            <Reveal key={h.name} delay={i * 0.06}>
              <div className="bg-white p-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-8">
                <div className="font-medium text-[15px] sm:w-60 shrink-0">{h.name}</div>
                <div className="text-[14px] text-steel flex-1">{h.note}</div>
                <div className="flex gap-4 shrink-0">
                  <a
                    href={h.bookingUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] font-semibold text-navy border-b border-navy pb-0.5 whitespace-nowrap"
                  >
                    Check rates
                  </a>
                  <a
                    href={h.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[13px] font-semibold text-crimson border-b border-crimson pb-0.5 whitespace-nowrap"
                  >
                    View on map
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h2 className="font-display font-semibold text-[22px] mb-6">How to reach {site.venue.name}</h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-px bg-line mb-16">
          {travelRoutes.map((section, i) => (
            <Reveal key={section.title} delay={i * 0.08}>
              <div className="bg-white p-8 h-full">
                <h3 className="font-display font-semibold text-[17px] mb-5">{section.title}</h3>
                <div className="flex flex-col gap-4">
                  {section.routes.map((r) => (
                    <div key={r.mode}>
                      <div className="text-[13px] font-semibold text-crimson mb-1">{r.mode}</div>
                      <div className="text-[13.5px] text-steel mb-1.5">{r.detail}</div>
                      {r.directionsUrl && (
                        <a
                          href={r.directionsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[12.5px] font-semibold text-navy border-b border-navy pb-0.5"
                        >
                          Get directions
                        </a>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h2 className="font-display font-semibold text-[22px] mb-6">Campus location</h2>
        </Reveal>
        <div className="aspect-[16/7] border border-line overflow-hidden">
          <iframe
            src={site.venue.mapEmbedUrl}
            className="w-full h-full border-0"
            loading="lazy"
            title="TIET campus map"
          />
        </div>
      </div>
    </section>
  );
}
