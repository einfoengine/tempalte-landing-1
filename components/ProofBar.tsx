/* Every figure here was re-sourced against the primary literature.
 *
 * The previous four were all misattributed, which is fatal on a page selling
 * credibility — the named institution is the first thing a skeptic checks:
 *   - "94% of first impressions are design-related · Stanford" — the Stanford
 *     report (Fogg et al. 2002) never says 94%; its finding is 46.1%, and it's
 *     about credibility comments, not first impressions. The 94% is Sillence et
 *     al. (Northumbria, n=15) on why people *reject* health sites.
 *   - "75% judge credibility by design alone · Stanford" — no such figure exists
 *     anywhere in Stanford's corpus.
 *   - "38% more conversions · Adobe" — Adobe's 38% is a *disengagement* stat,
 *     not a conversion lift, and doesn't appear in Adobe's own writeup.
 *   - "15 sec to form an opinion · UX Research" — conflates Chartbeat's
 *     time-on-page finding with first-impression research, inverting it.
 *     ("UX Research" is not a source.)
 *
 * Replacements below are stated as the primary sources state them. Don't
 * "round up" these numbers or tighten the wording — that's how the last set drifted.
 */
const stats = [
  {
    value: "50ms",
    label: "is all it takes for a visitor to form a first impression of your site",
    source: "Lindgaard et al., 2006",
  },
  {
    value: "~46%",
    label: "of comments about a site's credibility referenced its visual design",
    source: "Stanford Web Credibility Research, 2002",
  },
  {
    value: "55%",
    label: "of visitors spend under 15 seconds actively on a page",
    source: "Chartbeat, 2014",
  },
  {
    value: "68%",
    label: "will disengage or switch device when content is poorly designed",
    source: "Adobe, 2015",
  },
];

export default function ProofBar() {
  return (
    <section id="proof" className="bg-slate-900 py-16 border-y border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-slate-400 text-xs font-semibold uppercase tracking-widest mb-12">
          Your website is your most important salesperson
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.value} className="text-center">
              <div className="font-display text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                {s.value}
              </div>
              <div className="text-slate-300 text-sm leading-snug mb-1.5">{s.label}</div>
              <div className="text-slate-600 text-xs">{s.source}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
