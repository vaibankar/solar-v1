import { Router } from 'express';
import { runCalculator } from '../controllers/calculatorController.js';

const router = Router();

router.post('/', runCalculator);

export default router;

