import type { Metadata } from "next";
import Image from "next/image";
import Reveal from "@/components/Reveal";
import { site } from "@/data/site";

export const metadata: Metadata = {
  title: `Gallery — ${site.eventName}`,
};

// -----------------------------------------------------------------------
// Drop photo files into /public/images/gallery/ and add their filenames
// here. The grid below reads straight from this array.
// -----------------------------------------------------------------------
const galleryImages: string[] = [
  // "/images/gallery/photo-1.jpg",
  // "/images/gallery/photo-2.jpg",
];

export default function GalleryPage() {
  return (
    <section className="bg-paper py-24 min-h-[60vh]">
      <div className="wrap">
        <p className="text-[14px] text-steel mb-3">Moments</p>
        <h1 className="font-display font-bold text-[36px] md:text-[48px] max-w-2xl mb-4">
          Gallery
        </h1>
        <p className="text-steel max-w-lg text-[15.5px] mb-14">
          Photos from this and past editions will appear here.
        </p>

        {galleryImages.length === 0 ? (
          <Reveal>
            <div className="border border-dashed border-line bg-surface/60 py-20 text-center">
              <p className="text-steel text-[14.5px]">
                Photos coming soon.
              </p>
            </div>
          </Reveal>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3.5">
            {galleryImages.map((src, i) => (
              <Reveal key={src} delay={i * 0.03}>
                <div className="relative aspect-square bg-surface overflow-hidden">
                  <Image src={src} alt="" fill className="object-cover" />
                </div>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
