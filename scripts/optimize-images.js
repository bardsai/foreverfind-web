import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const dirsToProcess = [
  path.join(rootDir, 'public'),
  path.join(rootDir, 'src', 'assets')
];

const processImages = async () => {
  for (const dir of dirsToProcess) {
    try {
      const files = await fs.readdir(dir);
      
      for (const file of files) {
        if (!file.match(/\.(jpg|jpeg|png)$/i)) continue;
        
        const filePath = path.join(dir, file);
        const parsed = path.parse(filePath);
        const outputPath = path.join(dir, `${parsed.name}.webp`);
        
        console.log(`Processing ${file}...`);
        
        try {
          // Process and resize if needed
          await sharp(filePath)
            .resize({
              width: 1920,
              withoutEnlargement: true,
              fit: 'inside'
            })
            .webp({ quality: 80 })
            .toFile(outputPath);
            
          console.log(`✅ Converted ${file} to ${parsed.name}.webp`);
          
          // Delete original
          await fs.unlink(filePath);
          console.log(`🗑️ Deleted original ${file}`);
        } catch (error) {
          console.error(`❌ Failed to process ${file}:`, error);
        }
      }
    } catch (error) {
      if (error.code !== 'ENOENT') {
        console.error(`Failed to read directory ${dir}:`, error);
      }
    }
  }
};

processImages().then(() => {
  console.log('Image optimization complete!');
}).catch(console.error);
