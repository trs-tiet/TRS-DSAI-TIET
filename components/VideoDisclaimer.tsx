const positions = {
  "bottom-left": "bottom-3 left-3",
  "top-left": "top-3.5 left-3.5",
};

export default function VideoDisclaimer({
  position = "bottom-left",
}: {
  position?: keyof typeof positions;
}) {
  return (
    <div
      className={`absolute z-10 ${positions[position]} bg-ink/70 backdrop-blur-sm text-white/85 text-[11px] px-3 py-1.5 rounded-sm`}
    >
      Illustrative AI-generated visualization — not actual event footage
    </div>
  );
}
