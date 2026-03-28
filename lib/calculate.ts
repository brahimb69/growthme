export interface CalculatorInputs {
  initialInvestment: number;
  monthlyContribution: number;
  annualReturn: number; // as percentage, e.g. 10
  years: number;
  adjustForInflation: boolean;
  inflationRate?: number; // as percentage, default 3
}

export interface YearlyDataPoint {
  year: number;
  contributions: number;
  interestEarned: number;
  totalValue: number;
  nominalValue?: number;
}

export interface CalculationResult {
  finalValue: number;
  totalContributed: number;
  totalInterest: number;
  growthMultiple: number;
  yearlyData: YearlyDataPoint[];
  nominalFinalValue?: number;
}

export function calculate(inputs: CalculatorInputs): CalculationResult {
  const {
    initialInvestment,
    monthlyContribution,
    annualReturn,
    years,
    adjustForInflation,
    inflationRate = 3,
  } = inputs;

  const monthlyRate = annualReturn / 100 / 12;
  const yearlyData: YearlyDataPoint[] = [];

  let nominalBalance = initialInvestment;
  let totalContributed = initialInvestment;

  // Year 0
  yearlyData.push({
    year: 0,
    contributions: initialInvestment,
    interestEarned: 0,
    totalValue: initialInvestment,
    nominalValue: initialInvestment,
  });

  for (let year = 1; year <= years; year++) {
    for (let month = 0; month < 12; month++) {
      nominalBalance = nominalBalance * (1 + monthlyRate) + monthlyContribution;
      totalContributed += monthlyContribution;
    }

    const interestEarned = nominalBalance - totalContributed;

    let realValue = nominalBalance;
    if (adjustForInflation) {
      realValue = nominalBalance / Math.pow(1 + inflationRate / 100, year);
    }

    yearlyData.push({
      year,
      contributions: totalContributed,
      interestEarned: adjustForInflation
        ? realValue - totalContributed / Math.pow(1 + inflationRate / 100, year)
        : interestEarned,
      totalValue: adjustForInflation ? realValue : nominalBalance,
      nominalValue: nominalBalance,
    });
  }

  const finalNominal = nominalBalance;
  const finalValue = adjustForInflation
    ? nominalBalance / Math.pow(1 + inflationRate / 100, years)
    : nominalBalance;

  const displayedContributions = adjustForInflation
    ? totalContributed / Math.pow(1 + inflationRate / 100, years)
    : totalContributed;

  const displayedInterest = finalValue - displayedContributions;

  return {
    finalValue,
    totalContributed: displayedContributions,
    totalInterest: displayedInterest,
    growthMultiple:
      totalContributed > 0 ? finalValue / displayedContributions : 0,
    yearlyData,
    nominalFinalValue: adjustForInflation ? finalNominal : undefined,
  };
}
