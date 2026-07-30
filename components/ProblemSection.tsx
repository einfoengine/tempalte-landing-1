const problems = [
  {
    icon: "⏱",
    title: "Visitors leave in 15 seconds",
    description:
      "Your hero says nothing specific. Prospects can't immediately tell who you help, what you do, or why they should care - so they bounce to someone who's clearer.",
  },
  {
    icon: "🎭",
    title: "You look like every other tool",
    description:
      "Template builders produce identical sites. When a prospect compares you to competitors, your visual credibility gap hands them the deal.",
  },
  {
    icon: "🧩",
    title: "No feature showcase that sells",
    description:
      "Your platform does CRM, AI, automation, payments, funnels - but your website lists features like a spec sheet. Prospects can't visualize the value.",
  },
  {
    icon: "💸",
    title: "Missing a pricing page that closes",
    description:
      "Hiding your pricing forces every lead into a discovery call. A proper pricing page with comparison, ROI context, and FAQs closes deals before you even get on a call.",
  },
  {
    icon: "🤖",
    title: "AI capabilities buried or absent",
    description:
      "AI is the biggest differentiator of the GHL platform. If your site doesn't show it - with names, use cases, and examples - you're leaving your best selling point invisible.",
  },
  {
    icon: "🔗",
    title: "No integration hub",
    description:
      "Prospects always ask 'does it connect with X?' If you don't have a dedicated integrations page, that question kills momentum and sends them back to research.",
  },
  {
    icon: "⭐",
    title: "Social proof scattered or missing",
    description:
      "Trust is the final gatekeeper. A testimonial wall, featured case study, and logo bar need to be woven through the entire site - not an afterthought at the bottom.",
  },
  {
    icon: "📈",
    title: "No conversion architecture",
    description:
      "Every section should pull the visitor toward one action. Without a persuasion framework behind the page structure, traffic becomes noise - not pipeline.",
  },
];

export default function ProblemSection() {
  return (
    <section id="problem" className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="inline-block text-orange-500 font-semibold text-sm uppercase tracking-widest mb-4">
            The Problem
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 leading-tight mb-5">
            Your GHL Platform Is Powerful.
            <br />
            <span className="text-slate-400">Your Website Probably Isn&apos;t.</span>
          </h2>
          <p className="text-lg text-slate-500 leading-relaxed">
            Most GHL SaaS sellers are running a six-figure platform behind a website
            that costs them deals every single day. Here&apos;s exactly what&apos;s going wrong -
            and why each problem is quietly bleeding revenue.
          </p>
        </div>

        {/* Problem Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {problems.map((problem) => (
            <div
              key={problem.title}
              className="flex gap-5 p-6 rounded-2xl border border-slate-100 bg-slate-50 hover:border-slate-200 hover:bg-white transition-all group"
            >
              <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-xl shrink-0 shadow-sm group-hover:border-orange-200 group-hover:shadow-orange-100 transition-all">
                {problem.icon}
              </div>
              <div>
                <h3 className="font-bold text-slate-800 mb-1.5 text-base">{problem.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{problem.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Transition */}
        <div className="mt-20 text-center">
          <div className="inline-block w-px h-12 bg-linear-to-b from-transparent via-slate-300 to-orange-400 mb-6" />
          <p className="text-2xl font-bold text-slate-800">
            Every one of these problems has a{" "}
            <span className="text-orange-500">precise solution</span> built into PureSaaS.
          </p>
        </div>
      </div>
    </section>
  );
}
