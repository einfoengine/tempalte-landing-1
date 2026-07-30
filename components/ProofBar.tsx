import { buildRange } from "@/lib/offer";

/* P1 §1.2 — proof strip. HONEST-EARLY version: no fabricated launch counts
   ("84 agencies"), because the plan's proof standard forbids them and this
   audience reverse-image-searches. Swap in real counts as they accrue. */
const ITEMS = [
  { value: "New shop", label: "senior team behind every build" },
  { value: "One system", label: "every template, identical demo content" },
  { value: buildRange(), label: "average go-live from intake" },
  { value: "Maintained", label: "support is the product, not an upsell" },
];

export default function ProofBar() {
  return (
    <section id="proof" className="bg-slate-900 py-14 border-y border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {ITEMS.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display text-2xl md:text-3xl font-bold text-white mb-1.5 tracking-tight">{s.value}</div>
              <div className="text-slate-400 text-sm leading-snug">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
