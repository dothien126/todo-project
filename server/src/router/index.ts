import express from 'express';

import userRoute from './user.router';
import authRoute from './auth.router';
import todoRoute from './todo.router'

const router = express.Router();

router.use('/api', userRoute);
router.use('/api', authRoute);
router.use('/api', todoRoute);

export default router;
