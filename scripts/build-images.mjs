// Resize Mohan's supplied portrait for the existing responsive image slots and social card.
import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const source = 'pic.png';
const output = 'public/assets';
mkdirSync(output, { recursive: true });
for (const width of [420, 720, 1100]) {
  await sharp(source).resize({ width, withoutEnlargement: true }).webp({ quality: 85 }).toFile(`${output}/mohan-portrait-${width}.webp`);
}
const portrait = await sharp(source).resize({ width: 300, height: 560, fit: 'cover', position: 'attention' }).png().toBuffer();
const title = Buffer.from('<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg"><rect width="1200" height="630" fill="#07070a"/><text x="70" y="290" font-family="Arial,sans-serif" font-size="92" font-weight="700" fill="#f4f1ec">MOHAN TANUJ</text><text x="74" y="345" font-family="Arial,sans-serif" font-size="28" font-weight="700" fill="#ff3d5a">PONNASANAPALLI</text><text x="74" y="405" font-family="Arial,sans-serif" font-size="20" fill="#a7a6ad">SOFTWARE ENGINEERING · DATA · AUTOMATION</text></svg>');
await sharp(title).composite([{ input: portrait, left: 870, top: 35 }]).jpeg({ quality: 85 }).toFile(`${output}/og-image.jpg`);
console.log('Mohan portrait and social image built');
