"use client";

import { motion } from "framer-motion";
import { CalculationResult } from "@/lib/calculate";
import { Currency, formatCurrency } from "@/lib/currencies";
import AnimatedNumber from "./AnimatedNumber";

interface ResultsPanelProps {
  result: CalculationResult;
  currency: Currency;
  monthlyContribution: number;
  years: number;
  annualReturn: number;
  adjustForInflation: boolean;
}

export default function ResultsPanel({
  result,
  currency,
  monthlyContribution,
  years,
  annualReturn,
  adjustForInflation,
}: ResultsPanelProps) {
  const fmt = (n: number) => formatCurrency(n, currency);
  const fmtMultiple = (n: number) => `${n.toFixed(1)}x`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      {/* Final value */}
      <div className="text-center mb-8">
        <p
          className="text-sm font-medium tracking-wide uppercase mb-2"
          style={{ color: "var(--text-muted)" }}
        >
          {adjustForInflation
            ? "Portfolio value (today\u2019s dollars)"
            : "Portfolio value"}
        </p>
        <AnimatedNumber
          value={result.finalValue}
          formatter={fmt}
          className="text-4xl sm:text-5xl font-bold tracking-tight"
          style={{ color: "var(--text)" }}
        />
        {adjustForInflation && result.nominalFinalValue && (
          <p className="text-sm mt-2" style={{ color: "var(--text-muted)" }}>
            {"Nominal value: "}
            <AnimatedNumber
              value={result.nominalFinalValue}
              formatter={fmt}
              className="font-medium"
              style={{ color: "var(--text-muted)" }}
            />
          </p>
        )}
      </div>

      {/* Three stats row */}
      <div className="grid grid-cols-3 gap-4 sm:gap-6 mb-8">
        <div className="text-center">
          <p
            className="text-xs sm:text-sm mb-1"
            style={{ color: "var(--text-muted)" }}
          >
            Contributed
          </p>
          <AnimatedNumber
            value={result.totalContributed}
            formatter={fmt}
            className="text-lg sm:text-xl font-semibold"
            style={{ color: "var(--text)" }}
          />
        </div>
        <div className="text-center">
          <p
            className="text-xs sm:text-sm mb-1"
            style={{ color: "var(--text-muted)" }}
          >
            Interest earned
          </p>
          <AnimatedNumber
            value={result.totalInterest}
            formatter={fmt}
            className="text-lg sm:text-xl font-semibold"
            style={{ color: "var(--accent)" }}
          />
        </div>
        <div className="text-center">
          <p
            className="text-xs sm:text-sm mb-1"
            style={{ color: "var(--text-muted)" }}
          >
            Growth
          </p>
          <AnimatedNumber
            value={result.growthMultiple}
            formatter={fmtMultiple}
            className="text-lg sm:text-xl font-semibold"
            style={{ color: "var(--accent)" }}
          />
        </div>
      </div>

      {/* Summary sentence */}
      <p
        className="text-center text-sm sm:text-base leading-relaxed"
        style={{ color: "var(--text-secondary)" }}
      >
        {"By contributing "}
        {formatCurrency(monthlyContribution, currency)}
        {"/month for "}
        {years}
        {" years at "}
        {annualReturn}
        {"%/year, you\u2019d have "}
        <span className="font-semibold" style={{ color: "var(--text)" }}>
          {formatCurrency(result.finalValue, currency)}
        </span>
        .{adjustForInflation ? " That\u2019s in today\u2019s purchasing power." : ""}
      </p>
    </motion.div>
  );
}
