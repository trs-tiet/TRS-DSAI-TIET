import Link from "next/link";
import Image from "next/image";
import { site } from "@/data/site";

const PORTFOLIO_URL = "https://pd-dev.vercel.app/";

export default function Footer() {
  return (
    <footer className="bg-ink text-[#B7BAC0] py-14 text-[13.5px]">
      <div className="wrap">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
          <div className="col-span-2 md:col-span-1">
            <div className="mb-3.5">
              <Image src="/images/logos/trs-dsai-logo.png" alt={site.eventName} width={50} height={50} />
            </div>
            <h4 className="text-white text-[13px] font-semibold mb-3.5">
              {site.eventName}
            </h4>
            <div style={{ whiteSpace: "pre-line" }}>{site.venue.fullAddress}</div>
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
              <Link href="/hands-on-experience">Hands-on Experience</Link>
              <Link href="/accommodation">Accommodation &amp; Travel</Link>
              <Link href="/places-to-visit/patiala">Places to Visit</Link>
              <Link href="/gallery">Gallery</Link>
              <Link href="/faq">FAQ</Link>
            </div>
          </div>
          <div>
            <h4 className="text-white text-[13px] font-semibold mb-3.5">Contact</h4>
            <div className="flex flex-col gap-2.5">
              <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a>
              {site.contact.phones.length > 0 && (
                <>
                  {site.contact.phones.map((phone) => (
                    <a key={phone} href={`tel:${phone.replace(/\s+/g, "")}`}>
                      {phone}
                    </a>
                  ))}
                </>
              )}
            </div>
          </div>
        </div>
        <div className="border-t border-white/10 pt-8 pb-5">
          <div className="mb-6">
            <p className="text-white text-[13px] font-semibold mb-3">Follow us</p>
            <div className="flex gap-4">
              {site.socials.map((social) => (
                social.url !== "#" && (
                  <a
                    key={social.label}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#B7BAC0] hover:text-white transition-colors text-[12.5px] font-medium"
                  >
                    {social.label}
                  </a>
                )
              ))}
            </div>
          </div>
          <div className="flex justify-between flex-wrap gap-3 text-[12px]">
            <a
              href={PORTFOLIO_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Designed by Pranjay Dhawan
            </a>
            <div>Organized by The Robotics Society &amp; COE|DSAI, TIET</div>
          </div>
        </div>
      </div>
    </footer>
  );
}
