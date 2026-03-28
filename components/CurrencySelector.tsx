"use client";

import { currencies, Currency } from "@/lib/currencies";

interface CurrencySelectorProps {
  selected: string;
  onChange: (code: string) => void;
}

export default function CurrencySelector({
  selected,
  onChange,
}: CurrencySelectorProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {currencies.map((currency: Currency) => (
        <button
          key={currency.code}
          onClick={() => onChange(currency.code)}
          className="px-3 py-1.5 text-sm rounded-md transition-all duration-150"
          style={{
            background:
              selected === currency.code ? "var(--accent)" : "transparent",
            color:
              selected === currency.code ? "var(--bg)" : "var(--text-muted)",
            border: `1px solid ${selected === currency.code ? "var(--accent)" : "var(--border)"}`,
          }}
        >
          <span className="font-medium">{currency.code}</span>
          <span className="ml-1 opacity-70">{currency.symbol}</span>
        </button>
      ))}
    </div>
  );
}
