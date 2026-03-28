"use client";

import { useMemo } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { YearlyDataPoint } from "@/lib/calculate";
import { Currency, formatCurrency } from "@/lib/currencies";

interface GrowthChartProps {
  data: YearlyDataPoint[];
  currency: Currency;
}

interface ChartDataPoint {
  year: number;
  contributions: number;
  gains: number;
  total: number;
}

function CustomTooltip({
  active,
  payload,
  label,
  currency,
}: {
  active?: boolean;
  payload?: Array<{ value: number; dataKey: string }>;
  label?: number;
  currency: Currency;
}) {
  if (!active || !payload || !payload.length) return null;

  const contributions =
    payload.find((p) => p.dataKey === "contributions")?.value || 0;
  const gains = payload.find((p) => p.dataKey === "gains")?.value || 0;
  const total = contributions + gains;

  return (
    <div
      className="rounded-lg px-4 py-3 text-sm"
      style={{
        background: "var(--card)",
        border: "1px solid var(--border)",
        boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      }}
    >
      <p className="font-medium mb-1.5" style={{ color: "var(--text)" }}>
        Year {label}
      </p>
      <div className="space-y-1">
        <div className="flex justify-between gap-6">
          <span style={{ color: "var(--text-muted)" }}>Contributed</span>
          <span style={{ color: "var(--text)" }}>
            {formatCurrency(contributions, currency)}
          </span>
        </div>
        <div className="flex justify-between gap-6">
          <span style={{ color: "var(--accent)" }}>Growth</span>
          <span style={{ color: "var(--accent)" }}>
            {formatCurrency(gains, currency)}
          </span>
        </div>
        <div
          className="flex justify-between gap-6 pt-1.5 mt-1.5"
          style={{ borderTop: "1px solid var(--border)" }}
        >
          <span className="font-medium" style={{ color: "var(--text)" }}>
            Total
          </span>
          <span className="font-medium" style={{ color: "var(--text)" }}>
            {formatCurrency(total, currency)}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function GrowthChart({ data, currency }: GrowthChartProps) {
  const chartData: ChartDataPoint[] = useMemo(
    () =>
      data.map((d) => ({
        year: d.year,
        contributions: d.contributions,
        gains: Math.max(0, d.totalValue - d.contributions),
        total: d.totalValue,
      })),
    [data]
  );

  const maxValue = Math.max(...chartData.map((d) => d.total));

  function formatAxis(value: number): string {
    const converted = value * currency.rate;
    if (converted >= 1_000_000) return `${(converted / 1_000_000).toFixed(1)}M`;
    if (converted >= 1_000) return `${Math.round(converted / 1_000)}K`;
    return `${Math.round(converted)}`;
  }

  // Show fewer x-axis ticks on large ranges
  const tickInterval =
    data.length > 30 ? Math.ceil(data.length / 10) - 1 : data.length > 15 ? 1 : 0;

  return (
    <div className="w-full h-[320px] sm:h-[380px]">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={chartData}
          margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="contributionsFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--contributions)" stopOpacity={0.6} />
              <stop offset="95%" stopColor="var(--contributions)" stopOpacity={0.08} />
            </linearGradient>
            <linearGradient id="gainsFill" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="var(--accent)" stopOpacity={0.45} />
              <stop offset="95%" stopColor="var(--accent)" stopOpacity={0.08} />
            </linearGradient>
          </defs>
          <XAxis
            dataKey="year"
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--text-muted)", fontSize: 12 }}
            tickMargin={8}
            interval={tickInterval}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fill: "var(--text-muted)", fontSize: 12 }}
            tickFormatter={formatAxis}
            tickMargin={4}
            width={60}
            domain={[0, maxValue * 1.08]}
          />
          <Tooltip
            content={<CustomTooltip currency={currency} />}
            cursor={{
              stroke: "var(--accent)",
              strokeWidth: 1,
              strokeDasharray: "4 4",
            }}
          />
          <Area
            type="monotone"
            dataKey="contributions"
            stackId="stack"
            stroke="var(--contributions)"
            strokeWidth={1.5}
            fill="url(#contributionsFill)"
            animationDuration={800}
            animationEasing="ease-out"
          />
          <Area
            type="monotone"
            dataKey="gains"
            stackId="stack"
            stroke="var(--accent)"
            strokeWidth={2}
            fill="url(#gainsFill)"
            animationDuration={1000}
            animationEasing="ease-out"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
