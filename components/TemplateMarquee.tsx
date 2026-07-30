import { sortedTemplates } from "@/lib/templates";

/* A slow scrolling band of the real catalog — name, style and mode.
 *
 * Content is duplicated once and the track translates -50%, so the loop is
 * seamless. The duplicate is aria-hidden so screen readers hear the list once.
 *
 * Real data on purpose: a marquee of invented logos or fake "trusted by" names
 * would be the same fabricated-proof problem as the badges I removed earlier. */
export default function TemplateMarquee() {
  const items = sortedTemplates();

  const Row = ({ hidden = false }: { hidden?: boolean }) => (
    <ul
      aria-hidden={hidden || undefined}
      className="flex items-center shrink-0"
    >
      {items.map((t) => (
        <li key={t.slug} className="flex items-center gap-3 px-6 shrink-0">
          <span className="font-display font-bold text-slate-300 text-sm tracking-tight">
            {t.name}
          </span>
          <span className="text-slate-600 text-xs">
            {t.personality} · {t.mode}
          </span>
          <span aria-hidden="true" className="w-1 h-1 rounded-full bg-orange-500/60" />
        </li>
      ))}
    </ul>
  );

  return (
    <div className="gw-marquee bg-slate-950 border-y border-slate-800 py-3.5">
      <div className="gw-marquee-track">
        <Row />
        <Row hidden />
      </div>
    </div>
  );
}
