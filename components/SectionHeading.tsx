export default function SectionHeading({
  title,
  subtitle,
  light = false,
}: {
  title: string;
  subtitle?: string;
  light?: boolean;
}) {
  return (
    <div className="flex justify-between items-end gap-6 flex-wrap mb-14">
      <h2
        className={`font-display font-semibold text-[28px] md:text-[42px] max-w-xl ${
          light ? "text-white" : "text-ink"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`text-[15px] max-w-[340px] ${light ? "text-white/60" : "text-steel"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
