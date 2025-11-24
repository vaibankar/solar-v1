const stateIrradiance = {
  Maharashtra: 5.5,
  Karnataka: 5.7,
  Gujarat: 5.8,
  Telangana: 5.6,
  'Delhi NCR': 5.2
};

const SYSTEM_COSTS = {
  'grid-tied': 48000,
  hybrid: 62000,
  'off-grid': 70000
};

export const calculateSavings = ({ bill, state, roofSize, systemType }) => {
  const irradiance = stateIrradiance[state] ?? 5.4;
  const usableRoofKw = roofSize * 0.015; // assume 15 W per sqft
  const baseCapacity = Math.min(Math.max(bill / 1200, 2), usableRoofKw);
  const capacityKw = Number(baseCapacity.toFixed(1));
  const estimatedCost = Math.round(capacityKw * (SYSTEM_COSTS[systemType] ?? SYSTEM_COSTS['grid-tied']));
  const monthlySavings = Math.round(capacityKw * 1200);
  const paybackYears = Number((estimatedCost / (monthlySavings * 12)).toFixed(1));
  const co2SavedTons = Number((capacityKw * irradiance * 1.5).toFixed(2));

  return { capacityKw, estimatedCost, monthlySavings, paybackYears, co2SavedTons };
};

