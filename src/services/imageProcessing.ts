import sharp from 'sharp';

export const sharpResize = async (
  filePath: string,
  width: number,
  height: number
): Promise<sharp.Sharp> => {
  return sharp(filePath).resize(Number(width), Number(height)).toFormat('jpeg');
  // .toFile(res.locals.resizedPath, (): void => res.sendFile(resizedPath));
};
