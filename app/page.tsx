export default function Home() {
  const faqs = [
    {
      q: "How does ChurnGuard predict churn?",
      a: "We analyze usage frequency, feature adoption, login patterns, and subscription signals to compute a risk score updated daily."
    },
    {
      q: "What data sources does it connect to?",
      a: "ChurnGuard integrates with Stripe, Segment, Mixpanel, and custom REST APIs to pull behavioral and billing data automatically."
    },
    {
      q: "Is there a free trial?",
      a: "Yes — you get a 14-day free trial with full access. No credit card required to start."
    }
  ];

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-20 text-center">
        <span className="inline-block mb-4 px-3 py-1 rounded-full bg-[#161b22] border border-[#30363d] text-xs text-[#58a6ff] uppercase tracking-widest">
          AI-Powered Churn Prevention
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-6">
          Predict customer churn{" "}
          <span className="text-[#58a6ff]">30 days</span> before it happens
        </h1>
        <p className="text-lg text-[#8b949e] mb-10 max-w-xl mx-auto">
          ChurnGuard analyzes user behavior patterns across your SaaS to surface at-risk customers — so your team can act before they cancel.
        </p>
        <a
          href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
          className="inline-block px-8 py-4 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold text-base hover:bg-[#79b8ff] transition-colors"
        >
          Start Free Trial — $19/mo
        </a>
        <p className="mt-4 text-sm text-[#6e7681]">14-day free trial · No credit card required</p>

        <div className="mt-16 grid grid-cols-3 gap-6 text-center">
          {[
            ["30 days", "Early warning window"],
            ["94%", "Prediction accuracy"],
            ["2 min", "Setup time"]
          ].map(([val, label]) => (
            <div key={label} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <div className="text-2xl font-bold text-[#58a6ff]">{val}</div>
              <div className="text-xs text-[#6e7681] mt-1">{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-md mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <div className="text-sm text-[#58a6ff] font-semibold uppercase tracking-widest mb-2">Pro</div>
          <div className="text-5xl font-bold text-white mb-1">$19</div>
          <div className="text-[#6e7681] text-sm mb-6">per month</div>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited churn risk scores",
              "Daily behavioral analysis",
              "Stripe, Segment & Mixpanel integrations",
              "Slack & email alerts",
              "CSV export & API access",
              "14-day free trial"
            ].map((f) => (
              <li key={f} className="flex items-center gap-3 text-sm">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span>{f}</span>
              </li>
            ))}
          </ul>
          <a
            href={process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#"}
            className="block w-full py-3 rounded-lg bg-[#58a6ff] text-[#0d1117] font-semibold hover:bg-[#79b8ff] transition-colors"
          >
            Get Started Free
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map(({ q, a }) => (
            <div key={q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
              <div className="font-semibold text-white mb-2">{q}</div>
              <div className="text-sm text-[#8b949e]">{a}</div>
            </div>
          ))}
        </div>
        <p className="text-center text-xs text-[#6e7681] mt-12">
          © {new Date().getFullYear()} ChurnGuard. Built for SaaS teams.
        </p>
      </section>
    </main>
  );
}
