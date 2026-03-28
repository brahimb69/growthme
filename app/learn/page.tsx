import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Learn — GrowthMe",
  description:
    "Quick explainers on compound interest, the S&P 500, dollar cost averaging, and why starting early matters.",
};

const topics = [
  {
    title: "What is compound interest?",
    body: `Compound interest is what happens when your investment returns start generating their own returns. You invest $1,000, it earns $100, and next year that $1,100 earns interest — not just the original $1,000. Over short periods, the effect is subtle. Over decades, it's transformative. Einstein supposedly called it the eighth wonder of the world. Whether or not he actually said that, the math checks out.`,
  },
  {
    title: "What is the S&P 500?",
    body: `The S&P 500 is an index that tracks the 500 largest publicly traded companies in the United States — Apple, Microsoft, Amazon, and so on. When people say "the market returned 10% this year," they usually mean the S&P 500. You can invest in it through low-cost index funds or ETFs like VOO, SPY, or CSPX. It's the default choice for millions of long-term investors worldwide because it's diversified, transparent, and historically reliable over long horizons. It's not the only option, but it's a solid starting point.`,
  },
  {
    title: "What is DCA (Dollar Cost Averaging)?",
    body: `Dollar cost averaging means investing a fixed amount on a regular schedule — say, $300 every month — regardless of whether the market is up or down. When prices are high, your $300 buys fewer shares. When prices are low, it buys more. Over time, this smooths out the impact of volatility. You don't need to predict the market. You just need to be consistent. Most people who build wealth through investing do exactly this — quietly, month after month, for years.`,
  },
  {
    title: "Why does starting early matter so much?",
    body: `Because compound interest needs time to work. Someone who invests $300/month starting at 25 will have dramatically more at 65 than someone who starts the same contributions at 35. Not twice as much — often two to three times as much, depending on returns. The first ten years of investing might feel slow. The last ten years is where the curve goes exponential. The best time to start was yesterday. The second best time is now. Every year you wait costs more than you think.`,
  },
];

export default function LearnPage() {
  return (
    <div className="page-enter pt-16 sm:pt-24 pb-16">
      <h1
        className="text-3xl sm:text-4xl font-bold tracking-tight mb-3"
        style={{ color: "var(--text)" }}
      >
        Learn the basics
      </h1>
      <p
        className="text-base mb-12 max-w-lg leading-relaxed"
        style={{ color: "var(--text-secondary)" }}
      >
        Four concepts that explain most of what you need to know about
        long-term investing.
      </p>

      <div className="space-y-8">
        {topics.map((topic, i) => (
          <article
            key={i}
            className="rounded-xl p-6 sm:p-8"
            style={{ border: "1px solid var(--border)" }}
          >
            <h2
              className="text-lg sm:text-xl font-semibold mb-3"
              style={{ color: "var(--text)" }}
            >
              {topic.title}
            </h2>
            <p
              className="text-sm sm:text-base leading-relaxed"
              style={{ color: "var(--text-secondary)" }}
            >
              {topic.body}
            </p>
          </article>
        ))}
      </div>
    </div>
  );
}
