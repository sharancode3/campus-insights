#!/usr/bin/env node
const fs = require('fs');

// Check academics.html for emoji patterns
const file = 'public/academics.html';
const content = fs.readFileSync(file, 'utf8');

const lines = content.split('\n');
let foundPatterns = {};
lines.forEach((line, i) => {
  if (line.includes('dept-card-icon')) {
    const match = line.match(/<div class="dept-card-icon">(.+?)<\/div>/);
    if (match) {
      const icon = match[1];
      const hex = Buffer.from(icon, 'utf8').toString('hex');
      if (!foundPatterns[hex]) {
        foundPatterns[hex] = icon;
        console.log(`Line ${i}: ${icon} => ${hex}`);
      }
    }
  }
});
