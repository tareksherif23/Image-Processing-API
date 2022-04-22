import {Router, Request, Response} from 'express';
import {router as imageRouter} from './api/imageRouter';

export const router = Router();

router.use('/image', imageRouter);
router.all('*', (req: Request, res: Response): Response => {
  return res.sendStatus(400);
});
