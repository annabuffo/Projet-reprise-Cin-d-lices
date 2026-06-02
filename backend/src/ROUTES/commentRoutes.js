import { Router } from 'express';
import * as userController from '../controllers/commentController.js';
import { isAuthenticated, isAdmin } from '../middlewares/auth.js';

const router = Router();

router.get('/comment', commentController.getAllComments),
router.get('/:id', commentController.getCommentById);
router.post('/', isAuthenticated, createComment, validate, commentController.createComment);
router.put('/:id', isAuthenticated, updateComment, validate, commentController.updateComment);
router.delete('/:id', isAuthenticated, commentController.deleteComment);

export default router;
