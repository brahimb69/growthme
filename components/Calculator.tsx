"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { calculate } from "@/lib/calculate";
import { getCurrency } from "@/lib/currencies";
import CurrencySelector from "./CurrencySelector";
import ResultsPanel from "./ResultsPanel";
import GrowthChart from "./GrowthChart";
import DonateBanner from "./DonateBanner";

function NumberInput({
  label,
  value,
  onChange,
  prefix,
  suffix,
  min = 0,
  max,
  step = 1,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  prefix?: string;
  suffix?: string;
  min?: number;
  max?: number;
  step?: number;
}) {
  return (
    <div>
      <label
        className="block text-sm font-medium mb-2"
        style={{ color: "var(--text-secondary)" }}
      >
        {label}
      </label>
      <div
        className="flex items-center rounded-lg px-4 py-3 transition-colors duration-150"
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
        }}
      >
        {prefix && (
          <span
            className="text-sm mr-2 select-none"
            style={{ color: "var(--text-muted)" }}
          >
            {prefix}
          </span>
        )}
        <input
          type="number"
          value={value}
          onChange={(e) => {
            const v = parseFloat(e.target.value);
            if (!isNaN(v)) onChange(Math.max(min, max ? Math.min(max, v) : v));
          }}
          min={min}
          max={max}
          step={step}
          className="w-full bg-transparent outline-none text-lg font-medium tabular-nums"
          style={{ color: "var(--text)" }}
        />
        {suffix && (
          <span
            className="text-sm ml-2 select-none"
            style={{ color: "var(--text-muted)" }}
          >
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

function SliderInput({
  label,
  value,
  onChange,
  min,
  max,
  step = 1,
  suffix,
}: {
  label: string;
  value: number;
  onChange: (v: number) => void;
  min: number;
  max: number;
  step?: number;
  suffix?: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between mb-2">
        <label
          className="text-sm font-medium"
          style={{ color: "var(--text-secondary)" }}
        >
          {label}
        </label>
        <span className="text-lg font-semibold tabular-nums" style={{ color: "var(--text)" }}>
          {value}
          {suffix && (
            <span
              className="text-sm font-normal ml-0.5"
              style={{ color: "var(--text-muted)" }}
            >
              {suffix}
            </span>
          )}
        </span>
      </div>
      <input
        type="range"
        value={value}
        onChange={(e) => onChange(parseFloat(e.target.value))}
        min={min}
        max={max}
        step={step}
        className="w-full"
      />
      <div
        className="flex justify-between text-xs mt-1"
        style={{ color: "var(--text-muted)" }}
      >
        <span>
          {min}
          {suffix}
        </span>
        <span>
          {max}
          {suffix}
        </span>
      </div>
    </div>
  );
}

export default function Calculator() {
  const [initialInvestment, setInitialInvestment] = useState(1000);
  const [monthlyContribution, setMonthlyContribution] = useState(300);
  const [annualReturn, setAnnualReturn] = useState(10);
  const [years, setYears] = useState(20);
  const [currencyCode, setCurrencyCode] = useState("USD");
  const [adjustForInflation, setAdjustForInflation] = useState(false);

  const currency = getCurrency(currencyCode);

  const result = useMemo(
    () =>
      calculate({
        initialInvestment,
        monthlyContribution,
        annualReturn,
        years,
        adjustForInflation,
      }),
    [initialInvestment, monthlyContribution, annualReturn, years, adjustForInflation]
  );

  return (
    <div className="page-enter">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="pt-16 sm:pt-24 pb-12 sm:pb-16"
      >
        <h1
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-4"
          style={{ color: "var(--text)" }}
        >
          See your money grow.
        </h1>
        <p
          className="text-lg sm:text-xl max-w-lg leading-relaxed"
          style={{ color: "var(--text-secondary)" }}
        >
          A simple calculator for investors putting money to work — wherever you
          are in the world.
        </p>
      </motion.div>

      {/* Calculator inputs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="rounded-xl p-6 sm:p-8 mb-10"
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
        }}
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <NumberInput
            label="Initial investment"
            value={initialInvestment}
            onChange={setInitialInvestment}
            prefix={currency.symbol}
            min={0}
            step={100}
          />
          <NumberInput
            label="Monthly contribution"
            value={monthlyContribution}
            onChange={setMonthlyContribution}
            prefix={currency.symbol}
            min={0}
            step={50}
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
          <SliderInput
            label="Annual return"
            value={annualReturn}
            onChange={setAnnualReturn}
            min={1}
            max={30}
            step={0.5}
            suffix="%"
          />
          <SliderInput
            label="Investment period"
            value={years}
            onChange={setYears}
            min={1}
            max={50}
            suffix=" yr"
          />
        </div>

        {/* Currency selector */}
        <div className="mb-6">
          <label
            className="block text-sm font-medium mb-2"
            style={{ color: "var(--text-secondary)" }}
          >
            Display currency
          </label>
          <CurrencySelector selected={currencyCode} onChange={setCurrencyCode} />
        </div>

        {/* Inflation toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setAdjustForInflation(!adjustForInflation)}
            className="relative w-11 h-6 rounded-full transition-colors duration-200"
            style={{
              background: adjustForInflation
                ? "var(--accent)"
                : "var(--border)",
            }}
            role="switch"
            aria-checked={adjustForInflation}
          >
            <span
              className="absolute top-0.5 left-0.5 w-5 h-5 rounded-full transition-transform duration-200"
              style={{
                background: "var(--bg)",
                transform: adjustForInflation
                  ? "translateX(20px)"
                  : "translateX(0)",
              }}
            />
          </button>
          <span className="text-sm" style={{ color: "var(--text-secondary)" }}>
            Adjust for inflation (3%/yr)
          </span>
        </div>
      </motion.div>

      {/* Results */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mb-10"
      >
        <ResultsPanel
          result={result}
          currency={currency}
          monthlyContribution={monthlyContribution}
          years={years}
          annualReturn={annualReturn}
          adjustForInflation={adjustForInflation}
        />
      </motion.div>

      {/* Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="rounded-xl p-4 sm:p-6 mb-12"
        style={{
          background: "var(--card)",
          border: "1px solid var(--border)",
        }}
      >
        <h2
          className="text-sm font-medium mb-4"
          style={{ color: "var(--text-muted)" }}
        >
          Growth over time
        </h2>
        <GrowthChart data={result.yearlyData} currency={currency} />
      </motion.div>

      {/* Context stats */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8"
      >
        {[
          {
            label: "S&P 500 avg return (30yr)",
            value: "~10.5%",
          },
          {
            label: "Average inflation",
            value: "~3%",
          },
          {
            label: "10yr head start advantage",
            value: "2x more",
          },
        ].map((stat) => (
          <div
            key={stat.label}
            className="rounded-lg px-5 py-4"
            style={{ border: "1px solid var(--border)" }}
          >
            <p
              className="text-xs font-medium mb-1"
              style={{ color: "var(--text-muted)" }}
            >
              {stat.label}
            </p>
            <p
              className="text-xl font-semibold tabular-nums"
              style={{ color: "var(--text)" }}
            >
              {stat.value}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Donate */}
      <DonateBanner />
    </div>
  );
}
