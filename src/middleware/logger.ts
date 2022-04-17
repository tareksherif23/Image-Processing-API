import {Request, Response, NextFunction} from 'express';

exports.requestLogger = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.log(`${new Date().toISOString()}: ${req.path} was visted`);
  next();
};
