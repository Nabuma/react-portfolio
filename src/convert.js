import sharp from 'sharp';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const imagesDirectory = path.join(projectRoot, 'public', 'images');

const images = [
  { name: 'darty', extension: 'png', width: 800 },
  { name: 'le-monde', extension: 'png', width: 800 },
  { name: 'gouv', extension: 'png', width: 600 },
  { name: 'belles-demeures', extension: 'jpg', width: 800 },
  { name: 'acadomia', extension: 'jpeg', width: 400 },
];

const convertImages = async () => {
  await Promise.all(images.map(async (image) => {
    await sharp(path.join(imagesDirectory, `${image.name}.${image.extension}`))
      .resize({ width: image.width, fit: 'inside' })
      .webp({ quality: 82 })
      .toFile(path.join(imagesDirectory, `${image.name}.webp`));
    console.log(`Converted ${image.name}.${image.extension}`);
  }));
};

convertImages().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});