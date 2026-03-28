import type { Metadata } from "next";
import ServiceCards from "./ServiceCards";

export const metadata: Metadata = {
  title: "Services — GrowthMe",
  description:
    "Personalized investment planning for global investors. Get a custom growth plan, portfolio review, or 1-on-1 strategy session.",
};

export default function ServicesPage() {
  return (
    <div className="page-enter pt-16 sm:pt-24 pb-16">
      <div className="max-w-lg mb-14">
        <h1
          className="text-3xl sm:text-4xl font-bold tracking-tight mb-4"
          style={{ color: "var(--text)" }}
        >
          Get a plan that fits your life.
        </h1>
        <p
          className="text-base sm:text-lg leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          The calculator shows you the math. These services help you act on it
          — with a plan built around your income, your currency, and where you
          actually are in the world.
        </p>
      </div>

      <ServiceCards />

      {/* How it works */}
      <div className="mt-16 mb-12">
        <h2
          className="text-lg font-semibold mb-6"
          style={{ color: "var(--text)" }}
        >
          How it works
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              step: "1",
              title: "You pick a plan",
              body: "Choose the level of depth you need. No upsells after you pay.",
            },
            {
              step: "2",
              title: "Share your details",
              body: "A short questionnaire about your income, goals, risk comfort, and timeline.",
            },
            {
              step: "3",
              title: "Get your deliverables",
              body: "A clear, actionable document within 5 business days. Starter includes a call.",
            },
          ].map((item) => (
            <div key={item.step}>
              <span
                className="inline-flex items-center justify-center w-7 h-7 rounded-full text-xs font-semibold mb-3"
                style={{
                  background: "var(--accent-muted)",
                  color: "var(--accent)",
                }}
              >
                {item.step}
              </span>
              <h3
                className="text-sm font-semibold mb-1"
                style={{ color: "var(--text)" }}
              >
                {item.title}
              </h3>
              <p className="text-sm" style={{ color: "var(--text-muted)" }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="mb-8">
        <h2
          className="text-lg font-semibold mb-6"
          style={{ color: "var(--text)" }}
        >
          Common questions
        </h2>
        <div className="space-y-5">
          {[
            {
              q: "Is this financial advice?",
              a: "This is investment education and planning, not licensed financial advice. I help you understand your options and build a strategy — but the final decisions are always yours.",
            },
            {
              q: "What if I have no investing experience?",
              a: "That\u2019s exactly who the Starter plan is for. You\u2019ll get a clear, jargon-free plan that tells you exactly where to open an account, what to buy, and how much to put in each month.",
            },
            {
              q: "Do you work with people outside the US?",
              a: "That\u2019s the whole point. Most of my clients are in the UAE, Saudi Arabia, Egypt, Morocco, Malaysia, or are expats in Europe. The plans account for your local tax situation and available brokerages.",
            },
            {
              q: "How do I receive the deliverables?",
              a: "Everything is delivered as a clean PDF via email. Strategy sessions are held over Google Meet or Zoom, and you get a written summary afterward.",
            },
            {
              q: "Can I upgrade later?",
              a: "Yes. If you start with the Starter plan and later want a full portfolio review or a strategy call, you\u2019ll get credit for what you already paid.",
            },
          ].map((faq, i) => (
            <div
              key={i}
              className="rounded-lg px-5 py-4"
              style={{ border: "1px solid var(--border)" }}
            >
              <h3
                className="text-sm font-semibold mb-1.5"
                style={{ color: "var(--text)" }}
              >
                {faq.q}
              </h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--text-secondary)" }}
              >
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
