import PageShell from "@/components/PageShell";
import PageHero from "@/components/PageHero";

export type LegalSection = { heading: string; body: string[] };

/* Plain-language legal scaffolding. These are STARTING-POINT drafts written to
   match how the offer actually works (packages, ownership, cancellation) — NOT
   a substitute for review by a lawyer in your jurisdiction before you take real
   payments. The banner says so on every page. */
export default function LegalPage({
  title,
  updated,
  intro,
  sections,
}: {
  title: string;
  updated: string;
  intro: string;
  sections: LegalSection[];
}) {
  return (
    <PageShell>
      <PageHero titleLight="" titleBold={title} subtitle={intro} />
      <section id="gw-legal-body" className="pb-24 scroll-mt-20">
        <div className="max-w-3xl mx-auto px-6">
          <div className="mb-8 rounded-xl border border-amber-200 bg-amber-50 px-5 py-4 text-sm text-amber-900 leading-relaxed">
            <strong className="font-semibold">Draft — review before launch.</strong>{" "}
            This is a plain-language starting point that matches how the offer
            works. Have it reviewed by a lawyer in your jurisdiction before you
            run traffic or take payments.
          </div>
          <p className="text-xs text-slate-400 mb-10">Last updated: {updated}</p>

          <div className="space-y-10">
            {sections.map((s) => (
              <div key={s.heading}>
                <h2 className="text-lg font-bold text-slate-900 tracking-tight mb-3">{s.heading}</h2>
                {s.body.map((p, i) => (
                  <p key={i} className="text-sm text-slate-500 leading-relaxed mb-3">{p}</p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
