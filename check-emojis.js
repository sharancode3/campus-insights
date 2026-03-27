#!/usr/bin/env node
const fs = require('fs');

const file = 'public/admissions.html';
const content = fs.readFileSync(file, 'utf8');

// Log lines with emoji icons
const lines = content.split('\n');
lines.forEach((line, i) => {
  if (line.includes('admission-icon')) {
    console.log(`Line ${i}: ${line.substring(0, 150)}`);
    // Show hex of the icon span
    const match = line.match(/<span class="admission-icon">(.+?)<\/span>/);
    if (match) {
      const icon = match[1];
      console.log(`  Icon text: ${icon}`);
      console.log(`  Hex: ${Buffer.from(icon, 'utf8').toString('hex')}`);
    }
  }
});
