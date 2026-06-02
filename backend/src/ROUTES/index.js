import { Router } from 'express';
import recipeRoutes from './recipeRoutes.js';
import authRoutes from './authRoutes.js';
import userRoutes from './userRoutes.js';
import adminRoutes from './adminRoutes.js';
import media from './mediaRoutes.js';
import comment from './commentRoutes.js';
import category from './categoryRoutes.js'; 
import * as metadataController from '../controllers/metadataController.js';
import { isAuthenticated } from '../middlewares/auth.js';

const router = Router();

router.use('/recipes', recipeRoutes);
router.use('/auth', authRoutes);
router.use('/users', userRoutes);
router.use('/admin', adminRoutes);
router.use('/comments', commentRoutes);
router.user('/media', mediaRoutes);
router.use('/category', categoryRoutes);

// Metadata routes
/* 
router.get('/categories', metadataController.getAllCategories);
router.get('/media', metadataController.getAllMedia);
router.post('/media', isAuthenticated, metadataController.createMedia);
*/
export default router;

