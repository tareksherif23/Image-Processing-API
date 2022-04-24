import {Request, Response} from 'express';
import sharp from 'sharp';

export const resizeImage = async (
  req: Request,
  res: Response
): Promise<void> => {
  const {width, height} = req.query;
  const {filePath, resizedPath} = res.locals;

  sharp(filePath)
    .resize(Number(width), Number(height))
    .toFormat('jpeg')
    .toFile(res.locals.resizedPath, (): void => res.sendFile(resizedPath));
};
