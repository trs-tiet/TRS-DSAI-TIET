import { site } from "@/data/site";

export default function CTASection({
  heading = "Seats are limited to keep sessions hands-on.",
}: {
  heading?: string;
}) {
  return (
    <section className="bg-crimson text-white py-20">
      <div className="wrap flex justify-between items-center gap-6 flex-wrap">
        <div className="max-w-xl">
          <h2 className="font-display font-semibold text-[26px] md:text-[38px]">
            {heading}
          </h2>
          {site.registrationNotice && (
            <p className="mt-3 text-[16px] font-semibold text-white/90">
              {site.registrationNotice}
            </p>
          )}
        </div>
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
