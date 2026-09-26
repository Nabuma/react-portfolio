import sharp from 'sharp';
import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const imagesDirectory = path.join(projectRoot, 'public', 'images');

const supportedExtensions = new Set(['.avif', '.gif', '.jpeg', '.jpg', '.png', '.svg', '.tif', '.tiff', '.webp']);

const convertImages = async () => {
  const entries = await fs.readdir(imagesDirectory, { withFileTypes: true });
  const imagePaths = entries
    .filter((entry) => entry.isFile() && !entry.name.startsWith('.') && supportedExtensions.has(path.extname(entry.name).toLowerCase()))
    .map((entry) => path.join(imagesDirectory, entry.name));
  const groupedImages = new Map();

  for (const imagePath of imagePaths) {
    const extension = path.extname(imagePath).toLowerCase();
    const basename = path.basename(imagePath, extension);
    const group = groupedImages.get(basename) ?? [];
    group.push({ extension, path: imagePath });
    groupedImages.set(basename, group);
  }

  for (const [basename, candidates] of groupedImages) {
    const source = candidates.find((candidate) => candidate.extension !== '.webp');
    if (!source) {
      console.log(`Skipped ${basename}.webp (already WebP)`);
      continue;
    }

    const sourcePath = source.path;
    const outputPath = path.join(imagesDirectory, `${basename}.webp`);
    const temporaryPath = path.join(imagesDirectory, `.${basename}.tmp.webp`);

    await sharp(sourcePath)
      .webp({ quality: 75, effort: 6 })
      .toFile(temporaryPath);
    await fs.rm(outputPath, { force: true });
    await fs.copyFile(temporaryPath, outputPath);
    await fs.rm(temporaryPath, { force: true });
    if (source.extension !== '.webp') {
      await fs.rm(sourcePath, { force: true });
    }
    console.log(`Optimized ${path.basename(sourcePath)} -> ${path.basename(outputPath)}`);
  }
};

convertImages().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});