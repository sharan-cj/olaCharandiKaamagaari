import express from 'express';
import { userProfilesRouter } from '~/features';

export const router = express.Router();

router.use('/users', userProfilesRouter);
