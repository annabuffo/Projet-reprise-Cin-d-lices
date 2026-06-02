import { Router } from 'express';
import * as recipeController from '../controllers/recipeController.js';
import { validate } from '../middlewares/validator.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router = Router();

// Recipe CRUD
router.get('/', mediaController.getAllMedia);
router.get('/:id', mediaController.getMediaById);
router.put('/:id', isAuthenticated, mediaController.updateMedia);
router.delete('/:id', isAuthenticated, mediaController.deleteMdeia);

export default router;

