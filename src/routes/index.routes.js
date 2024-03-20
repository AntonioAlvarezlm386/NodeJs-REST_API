import { pingResponse } from '../controllers/index.controller.js';
import { Router } from 'express'

const router = Router();

router.get('/ping', pingResponse)

export default router