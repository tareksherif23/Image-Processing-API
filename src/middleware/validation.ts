import {Request, Response, NextFunction} from 'express';

export const validateQueryParams = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  const {filename, width, height} = req.query;

  if (!filename)
    return res.status(400).send('Please provide an image filename');

  if (!width && !height) return next();

  if (!width || !height)
    return res
      .status(400)
      .send('parameters width and height should be given together');

  if (isNaN(+width) || +width <= 0)
    return res.status(400).send('width value must be a positive number');

  if (isNaN(+height) || +height <= 0)
    return res.status(400).send('height value must be a positive number');

  next();
};
