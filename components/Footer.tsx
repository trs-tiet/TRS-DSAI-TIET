import Link from "next/link";
import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="bg-ink text-[#B7BAC0] py-14 text-[13.5px]">
      <div className="wrap">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <h4 className="text-white text-[13px] font-semibold mb-3.5">
              {site.eventName}
            </h4>
            <div>{site.venue.fullAddress}</div>
          </div>
          <div>
            <h4 className="text-white text-[13px] font-semibold mb-3.5">Explore</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/about">About</Link>
              <Link href="/organizers">Organizers</Link>
              <Link href="/speakers">Speakers</Link>
              <Link href="/schedule">Schedule</Link>
            </div>
          </div>
          <div>
            <h4 className="text-white text-[13px] font-semibold mb-3.5">Info</h4>
            <div className="flex flex-col gap-2.5">
              <Link href="/sponsors">Sponsors</Link>
              <Link href="/exhibitions">Exhibitions</Link>
              <Link href="/accommodation">Accommodation &amp; Travel</Link>
              <Link href="/places-to-visit">Places to Visit</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/faq">FAQ</Link>
            </div>
          </div>
          <div>
            <h4 className="text-white text-[13px] font-semibold mb-3.5">Contact</h4>
            <div className="flex flex-col gap-2.5">
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              <a href={`mailto:${site.contact.secondaryEmail}`}>
                {site.contact.secondaryEmail}
              </a>
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-5 flex justify-between flex-wrap gap-3">
          <div>© {new Date().getFullYear()} {site.organizer}</div>
          <div>Built for TIET Patiala</div>
        </div>
      </div>
    </footer>
  );
}
