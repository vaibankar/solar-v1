import { Router } from 'express';
import { getHomeContent, getAboutContent, getServicesContent } from '../controllers/marketingController.js';

const router = Router();

router.get('/home', getHomeContent);
router.get('/about', getAboutContent);
router.get('/services', getServicesContent);

export default router;

