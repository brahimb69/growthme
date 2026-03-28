"use client";

import { motion } from "framer-motion";

interface Plan {
  name: string;
  price: number;
  tag: string | null;
  description: string;
  features: string[];
  cta: string;
  highlighted: boolean;
}

const plans: Plan[] = [
  {
    name: "Starter",
    price: 49,
    tag: null,
    description:
      "A personalized investment growth plan — where to start, how much to invest, and what to expect over 10, 20, and 30 years.",
    features: [
      "Custom compound growth projection based on your real numbers",
      "Recommended monthly contribution based on your income",
      "Broker and ETF recommendations for your country",
      "Clear PDF report delivered within 5 business days",
      "One round of follow-up questions via email",
    ],
    cta: "Get your growth plan",
    highlighted: false,
  },
  {
    name: "Portfolio Review",
    price: 89,
    tag: "Most popular",
    description:
      "Already investing? Get an honest review of your current portfolio with specific recommendations to optimize it.",
    features: [
      "Everything in Starter",
      "Full review of your current holdings and allocation",
      "Risk assessment tailored to your timeline and goals",
      "Specific rebalancing recommendations",
      "Tax-efficiency tips for your country of residence",
      "30-minute video call to walk through the report",
    ],
    cta: "Get your portfolio reviewed",
    highlighted: true,
  },
  {
    name: "Strategy Session",
    price: 289,
    tag: "Comprehensive",
    description:
      "A deep, 1-on-1 financial strategy session covering investments, savings targets, and a long-term wealth-building roadmap.",
    features: [
      "Everything in Portfolio Review",
      "90-minute 1-on-1 video strategy session",
      "Multi-goal planning (retirement, property, education, etc.)",
      "Emergency fund and cash reserve strategy",
      "Currency exposure analysis for expats and multi-country earners",
      "Written action plan with month-by-month milestones",
      "60 days of email support after the session",
    ],
    cta: "Book your strategy session",
    highlighted: false,
  },
];

export default function ServiceCards() {
  return (
    <div className="grid grid-cols-1 gap-6">
      {plans.map((plan, i) => (
        <motion.div
          key={plan.name}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          className="rounded-xl p-6 sm:p-8 relative"
          style={{
            border: plan.highlighted
              ? "2px solid var(--accent)"
              : "1px solid var(--border)",
            background: plan.highlighted
              ? "var(--accent-muted)"
              : "transparent",
          }}
        >
          {/* Tag */}
          {plan.tag && (
            <span
              className="absolute -top-3 left-6 px-3 py-0.5 text-xs font-semibold rounded-full"
              style={{
                background: "var(--accent)",
                color: "var(--bg)",
              }}
            >
              {plan.tag}
            </span>
          )}

          <div className="sm:flex sm:items-start sm:justify-between sm:gap-8">
            {/* Left: info */}
            <div className="flex-1 mb-6 sm:mb-0">
              <div className="flex items-baseline gap-3 mb-2">
                <h2
                  className="text-xl font-bold"
                  style={{ color: "var(--text)" }}
                >
                  {plan.name}
                </h2>
                <span
                  className="text-2xl font-bold tabular-nums"
                  style={{ color: "var(--text)" }}
                >
                  ${plan.price}
                </span>
                <span
                  className="text-sm"
                  style={{ color: "var(--text-muted)" }}
                >
                  one-time
                </span>
              </div>
              <p
                className="text-sm leading-relaxed mb-4"
                style={{ color: "var(--text-secondary)" }}
              >
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-start gap-2.5 text-sm">
                    <svg
                      className="w-4 h-4 mt-0.5 flex-shrink-0"
                      viewBox="0 0 16 16"
                      fill="none"
                    >
                      <path
                        d="M3 8.5L6.5 12L13 4"
                        stroke="var(--accent)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <span style={{ color: "var(--text-secondary)" }}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: CTA */}
            <div className="sm:flex sm:flex-col sm:items-end sm:justify-end sm:self-end">
              <a
                href="mailto:hello@growthme.org"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 rounded-lg text-sm font-medium transition-all duration-150 hover:opacity-90"
                style={{
                  background: plan.highlighted
                    ? "var(--accent)"
                    : "var(--text)",
                  color: "var(--bg)",
                }}
              >
                {plan.cta}
              </a>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
