import { liveSnapshot, dailyGeneration, monthlyGeneration } from '../data/monitoring.js';

export const getLiveSnapshot = () => ({
  ...liveSnapshot,
  currentPower: liveSnapshot.currentPower + Math.round(Math.random() * 400 - 200)
});

export const getDailyGeneration = () =>
  dailyGeneration.map((entry, idx) => ({
    ...entry,
    kwh: entry.kwh + Math.round(Math.sin(idx) * 3)
  }));

export const getMonthlyGeneration = () => monthlyGeneration;

export const exportCsv = () => {
  const headers = 'date,kwh,peakTime,weather';
  const rows = dailyGeneration
    .map((entry) => `${entry.date},${entry.kwh},13:00,${liveSnapshot.weather.irradiance}`)
    .join('\n');
  return `${headers}\n${rows}`;
};

export const exportPdf = () => 'Base64PDF==';

