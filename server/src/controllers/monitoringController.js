import {
  getLiveSnapshot,
  getDailyGeneration,
  getMonthlyGeneration,
  exportCsv,
  exportPdf
} from '../services/monitoringService.js';

export const getLive = (_req, res) => res.json(getLiveSnapshot());

export const getDaily = (_req, res) => res.json(getDailyGeneration());

export const getMonthly = (_req, res) => res.json(getMonthlyGeneration());

export const exportDailyCsv = (_req, res) => {
  res.header('Content-Type', 'text/csv');
  res.attachment('daily-generation.csv');
  res.send(exportCsv());
};

export const exportMonthlyPdf = (_req, res) => {
  res.header('Content-Type', 'application/pdf');
  res.send(exportPdf());
};

