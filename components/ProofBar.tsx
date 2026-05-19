const stats = [
  {
    value: "94%",
    label: "of first impressions are design-related",
    source: "Stanford Web Credibility Research",
  },
  {
    value: "75%",
    label: "of users judge credibility by website design alone",
    source: "Stanford",
  },
  {
    value: "38%",
    label: "more conversions from professionally designed pages",
    source: "Adobe",
  },
  {
    value: "15 sec",
    label: "is all visitors need to form a lasting opinion of your brand",
    source: "UX Research",
  },
];

export default function ProofBar() {
  return (
    <section className="bg-slate-900 py-16 border-y border-slate-800">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-center text-slate-400 text-xs font-semibold uppercase tracking-widest mb-12">
          The data is clear — your website is your most important salesperson
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((s) => (
            <div key={s.value} className="text-center">
              <div className="text-4xl md:text-5xl font-black text-white mb-2 tracking-tight">{s.value}</div>
              <div className="text-slate-300 text-sm leading-snug mb-1.5">{s.label}</div>
              <div className="text-slate-600 text-xs">{s.source}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
