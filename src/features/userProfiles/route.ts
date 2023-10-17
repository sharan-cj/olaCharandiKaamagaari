import express from 'express';
import { hello } from './controller';

export const userProfilesRouter = express.Router();

userProfilesRouter.get('/', hello);
