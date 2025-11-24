import { Router } from 'express';
import { getLive, getDaily, getMonthly, exportDailyCsv, exportMonthlyPdf } from '../controllers/monitoringController.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();

router.get('/live', getLive);
router.get('/daily', getDaily);
router.get('/monthly', getMonthly);
router.get('/export/csv', authenticate, exportDailyCsv);
router.get('/export/pdf', authenticate, exportMonthlyPdf);

export default router;

