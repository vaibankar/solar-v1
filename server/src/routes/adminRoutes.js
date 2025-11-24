import { Router } from 'express';
import { authenticate, authorize } from '../middleware/auth.js';
import { listPanels, createPanel, listUsers, listRequests } from '../controllers/adminController.js';

const router = Router();

router.use(authenticate, authorize('admin'));

router.get('/panels', listPanels);
router.post('/panels', createPanel);
router.get('/users', listUsers);
router.get('/requests', listRequests);

export default router;

