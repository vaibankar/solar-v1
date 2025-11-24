import validator from 'validator';
import { calculateSavings } from '../services/calculatorService.js';

export const runCalculator = (req, res, next) => {
  try {
    const { bill, state, roofSize, systemType } = req.body;
    if (![bill, roofSize].every((v) => typeof v === 'number' && v > 0)) {
      return res.status(400).json({ message: 'Bill and roof size must be positive numbers.' });
    }
    if (!state || !validator.isLength(state, { min: 2 })) {
      return res.status(400).json({ message: 'State is required.' });
    }
    const result = calculateSavings({ bill, state, roofSize, systemType });
    res.json(result);
  } catch (error) {
    next(error);
  }
};

