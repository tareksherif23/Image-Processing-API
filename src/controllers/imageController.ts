import {Request, Response} from 'express';

const fs = require('fs');
const sharp = require('sharp');
const path = require('path');
const imageDir = path.resolve('./images');
const cacheDir = path.resolve('./cached');

exports.resizeImage = async (req: Request, res: Response): Promise<void> => {
  const fileName: string = req.query.filename as string;
  const width: number = parseInt(req.query.width as string);
  const height: number = parseInt(req.query.height as string);

  if (fileName) {
    const filePath = `${imageDir}/${fileName}.jpg`;
    try {
      if (fs.existsSync(filePath)) {
        if (width && height) {
          const resizedPath = `${cacheDir}/${fileName}_${width}_${height}.jpg`;
          await sharp(filePath)
            .resize({
              width: width,
              height: height,
            })
            .toFile(resizedPath);
          res.status(200).sendFile(resizedPath);
        } else {
          res.status(200).sendFile(filePath);
        }
      } else {
        res.status(404).send(`image ${fileName} does not exist`);
      }
    } catch (err) {
      console.error(err);
      res.status(500).send('something went wrong while reading the image');
    }
  } else {
    res.status(404).send('please provide an image name to process');
  }
};
