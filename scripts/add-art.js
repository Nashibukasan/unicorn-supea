#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('🦄 Welcome to Unicorn Supea Art Adder! ✨\n');

// Read current art data
const artDataPath = path.join(__dirname, '../src/data/art.ts');
const artData = fs.readFileSync(artDataPath, 'utf8');

// Find the next available ID
const idMatch = artData.match(/id: (\d+)/g);
const nextId = Math.max(...idMatch.map(match => parseInt(match.split(': ')[1]))) + 1;

// Get user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log(`Next available ID: ${nextId}\n`);

rl.question('📝 Art title: ', (title) => {
  rl.question('📖 Description: ', (description) => {
    rl.question('🖼️ Image filename (e.g., unicorn5.jpg): ', (imageFilename) => {
      rl.question('📅 Date (YYYY-MM-DD): ', (date) => {
        rl.close();
        
        // Create the new art entry
        const newArtEntry = `\t{\n\t\tid: ${nextId},\n\t\ttitle: "${title}",\n\t\tdescription: "${description}",\n\t\timage: "/art/${imageFilename}",\n\t\tdate: "${date}"\n\t},`;
        
        // Add to the array
        const updatedArtData = artData.replace(
          /export const artPieces: ArtPiece\[\] = \[([\s\S]*?)\];/,
          (match, arrayContent) => {
            return `export const artPieces: ArtPiece[] = [${arrayContent}${newArtEntry}\n];`;
          }
        );
        
        // Write back to file
        fs.writeFileSync(artDataPath, updatedArtData);
        
        console.log('\n🎉 Art piece added successfully!');
        console.log('\n📋 Next steps:');
        console.log(`1. Add your image file to: public/art/${imageFilename}`);
        console.log('2. Run "npm run dev" to see your new art!');
        console.log('\n✨ Sparkles and rainbows! ✨');
      });
    });
  });
}); 