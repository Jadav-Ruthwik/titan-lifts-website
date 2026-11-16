export default function SectionTitle({
  eyebrow,
  title,
  text,
  center = false,
}: {
  eyebrow: string;
  title: string;
  text?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title mt-4">{title}</h2>
      {text && (
        <p
          className={`mt-5 text-base leading-8 text-slate-600 ${center ? "mx-auto max-w-2xl" : ""}`}
        >
          {text}
        </p>
      )}
    </div>
  );
}
