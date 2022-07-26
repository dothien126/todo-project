import express from 'express';

import userRoute from './user.router';
import authRoute from './auth.router';

const router = express.Router();

router.use('/api', userRoute);
router.use('/api', authRoute);

export default router;
