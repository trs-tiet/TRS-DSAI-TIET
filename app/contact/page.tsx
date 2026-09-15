import type { Metadata } from "next";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Contact — ${site.eventName}`,
};

export default function ContactPage() {
  return (
    <section className="bg-paper py-24 min-h-[60vh]">
      <div className="wrap grid md:grid-cols-2 gap-16">
        <Reveal>
          <p className="text-[14px] text-steel mb-3">Get in touch</p>
          <h1 className="font-display font-bold text-[36px] md:text-[48px] mb-8">Contact</h1>

          <div className="flex flex-col gap-6 mb-10">
            <div>
              <div className="text-[13px] text-steel mb-1.5">General enquiries</div>
              <a href={`mailto:${site.contact.email}`} className="text-[17px] font-medium">
                {site.contact.email}
              </a>
            </div>
            <div>
              <div className="text-[13px] text-steel mb-1.5">COE | DSAI</div>
              <a href={`mailto:${site.contact.secondaryEmail}`} className="text-[17px] font-medium">
                {site.contact.secondaryEmail}
              </a>
            </div>
          </div>

          <div>
            <div className="text-[13px] text-steel mb-1.5">Venue</div>
            <p className="text-[15px] max-w-xs">{site.venue.fullAddress}</p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="aspect-[4/3] border border-line overflow-hidden">
            <iframe
              src={site.venue.mapEmbedUrl}
              className="w-full h-full border-0"
              loading="lazy"
              title="Venue map"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
