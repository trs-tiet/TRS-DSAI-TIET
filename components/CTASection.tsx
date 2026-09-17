import { site } from "@/data/site";

export default function CTASection({
  heading = "Seats are limited to keep sessions hands-on.",
}: {
  heading?: string;
}) {
  return (
    <section className="bg-crimson text-white py-20">
      <div className="wrap flex justify-between items-center gap-6 flex-wrap">
        <h2 className="font-display font-semibold text-[26px] md:text-[38px] max-w-xl">
          {heading}
        </h2>
        <a
          href={site.registerUrl}
          className="bg-white text-crimson px-7 py-[15px] font-semibold text-[14.5px] rounded-sm hover:bg-white/90 transition-colors"
        >
          Register now
        </a>
      </div>
    </section>
  );
}
