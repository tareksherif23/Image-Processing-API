import {Request, Response, NextFunction} from 'express';

export const requestLogger = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(`${new Date().toISOString()}: ${req.path} was visted`);
  next();
};
