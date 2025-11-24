export const liveSnapshot = {
  currentPower: 7420,
  dailyGeneration: 28.4,
  monthlyGeneration: 612,
  yearlyGeneration: 4.8,
  weather: { irradiance: 820, temperature: 34 }
};

export const dailyGeneration = Array.from({ length: 7 }).map((_, idx) => ({
  date: `Day ${idx + 1}`,
  kwh: Math.round(20 + Math.random() * 15)
}));

export const monthlyGeneration = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'].map((month) => ({
  month,
  kwh: Math.round(450 + Math.random() * 120)
}));

