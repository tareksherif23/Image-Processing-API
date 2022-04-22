import {Request, Response, NextFunction} from 'express';

const fs = require('fs');
const path = require('path');
const imageDir = path.resolve('./images');
const cacheDir = path.resolve('./cached');

export const findImage = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  // extract and type assert query params needed for processing
  const fileName: string = req.query.filename as string;
  const width: number = parseInt(req.query.width as string);
  const height: number = parseInt(req.query.height as string);

  // create the path where the image should be found at in images folder
  const filePath = `${imageDir}/${fileName}.jpg`;
  try {
    if (fs.existsSync(filePath)) {
      res.locals.filePath = filePath;
      if (width && height) {
        // create a path for the resized image with dimensions in the cached folder
        const resizedPath = `${cacheDir}/${req.query.filename}_${width}_${height}.jpg`;
        res.locals.resizedPath = resizedPath;
        if (fs.existsSync(resizedPath)) {
          // return cached image with requested dimensions to save processing time
          return res.status(200).sendFile(resizedPath);
        } else {
          return next(); // resize image with given width and height
        }
      } else {
        // send the original default image if no width and height provided
        return res.status(200).sendFile(filePath);
      }
    } else {
      res.status(404).send(`image ${fileName} does not exist`);
    }
  } catch (err) {
    console.error(err);
    res.status(500).send('something went wrong while reading the image');
  }
};
