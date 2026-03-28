export interface Currency {
  code: string;
  symbol: string;
  name: string;
  rate: number; // rate relative to USD
}

export const currencies: Currency[] = [
  { code: "USD", symbol: "$", name: "US Dollar", rate: 1 },
  { code: "EUR", symbol: "€", name: "Euro", rate: 0.92 },
  { code: "GBP", symbol: "£", name: "British Pound", rate: 0.79 },
  { code: "AED", symbol: "د.إ", name: "UAE Dirham", rate: 3.67 },
  { code: "SAR", symbol: "﷼", name: "Saudi Riyal", rate: 3.75 },
  { code: "MAD", symbol: "MAD", name: "Moroccan Dirham", rate: 10.1 },
  { code: "EGP", symbol: "E£", name: "Egyptian Pound", rate: 30.9 },
  { code: "MYR", symbol: "RM", name: "Malaysian Ringgit", rate: 4.47 },
];

export function formatCurrency(
  amount: number,
  currency: Currency,
  compact?: boolean
): string {
  const converted = amount * currency.rate;

  if (compact && converted >= 1_000_000) {
    return `${currency.symbol}${(converted / 1_000_000).toFixed(1)}M`;
  }
  if (compact && converted >= 1_000) {
    return `${currency.symbol}${(converted / 1_000).toFixed(0)}K`;
  }

  return `${currency.symbol}${converted.toLocaleString("en-US", {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  })}`;
}

export function getCurrency(code: string): Currency {
  return currencies.find((c) => c.code === code) || currencies[0];
}
