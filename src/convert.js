import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const imagesDirectory = path.join(projectRoot, 'public', 'images');

const images = [
  { name: 'darty', width: 480 },
  { name: 'le-monde', width: 480 },
  { name: 'gouv', width: 480 },
  { name: 'belles-demeures', width: 480 },
  { name: 'acadomia', width: 400 },
];

const convertImages = async () => {
  for (const image of images) {
    const sourcePath = path.join(imagesDirectory, `${image.name}.webp`);
    const outputPath = path.join(imagesDirectory, `${image.name}-small.webp`);
    const temporaryPath = path.join(imagesDirectory, `${image.name}.optimized.webp`);
    await sharp(sourcePath)
      .resize({ width: image.width, fit: 'inside' })
      .webp({ quality: 70 })
      .toFile(temporaryPath);
    await fs.rm(outputPath, { force: true });
    await fs.rename(temporaryPath, outputPath);
    console.log(`Optimized ${image.name}-small.webp`);
  }
};

convertImages().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});