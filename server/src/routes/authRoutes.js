import { Router } from 'express';
import { login, profile } from '../controllers/authController.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();

router.post('/login', login);
router.get('/profile', authenticate, profile);

export default router;

