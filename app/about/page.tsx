import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About — GrowthMe",
  description:
    "Why I built this calculator: most financial tools are ugly, US-centric, or full of jargon.",
};

export default function AboutPage() {
  return (
    <div className="page-enter pt-16 sm:pt-24 pb-16 max-w-lg">
      <h1
        className="text-3xl sm:text-4xl font-bold tracking-tight mb-8"
        style={{ color: "var(--text)" }}
      >
        About this tool
      </h1>

      <div className="space-y-5 text-base leading-relaxed" style={{ color: "var(--text-secondary)" }}>
        <p>
          I built this because most compound interest calculators are ugly,
          US-centric, or buried in financial jargon. You shouldn&apos;t need a
          finance degree to understand how your money grows over time.
        </p>

        <p>
          If you&apos;re an expat in Dubai, a fresh grad in Kuala Lumpur, or
          someone in Cairo who just opened their first brokerage account — this
          is for you. Pick your currency, set your numbers, and see what
          consistency looks like over 10, 20, or 30 years.
        </p>

        <p>
          The math is straightforward. Monthly compounding, with an optional
          inflation adjustment so you can see what your future money is actually
          worth in today&apos;s terms. No hidden assumptions, no upsells, no
          &ldquo;sign up for our premium plan.&rdquo;
        </p>

        <p>
          The default 10% return rate isn&apos;t a promise — it&apos;s roughly
          what the S&amp;P 500 has returned historically over long periods. Your
          actual returns will vary. The point isn&apos;t precision. It&apos;s
          building intuition for what long-term investing looks like.
        </p>

        <p style={{ color: "var(--text-muted)" }}>
          This tool is open source and free to use. If you found it useful,
          share it with someone who&apos;s just starting to think about
          investing.
        </p>
      </div>
    </div>
  );
}
