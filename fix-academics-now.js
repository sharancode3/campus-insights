#!/usr/bin/env node
const fs = require('fs');

const file = 'public/academics.html';
let content = fs.readFileSync(file);

// Map broken byte sequences to correct emojis based on the analysis
const replacements = [
  { broken: Buffer.from('c3b0c5b8c28fe28094c3afc2b8c28f', 'hex'), emoji: '🏢' },   // Building
  { broken: Buffer.from('c3a2c5a1e284a2c3afc2b8c28f', 'hex'), emoji: '⚙️' },     // Gear
  { broken: Buffer.from('c3a2c5a1c2a1', 'hex'), emoji: '⚡' },                   // Lightning
  { broken: Buffer.from('c3b0c5b8e2809dc592', 'hex'), emoji: '📌' },            // Pin
  { broken: Buffer.from('c3b0c5b8e28099c2bb', 'hex'), emoji: '💻' },           // Laptop
  { broken: Buffer.from('c3a2c593cb86c3afc2b8c28f', 'hex'), emoji: '✈️' },      // Plane
  { broken: Buffer.from('c3b0c5b8c2a7c2aa', 'hex'), emoji: '🧪' },             // Test tube
  { broken: Buffer.from('c3b0c5b8c2a4e28093', 'hex'), emoji: '🤖' },           // Robot
];

replacements.forEach(({ broken, emoji }) => {
  const emojiBytes = Buffer.from(emoji, 'utf8');
  while (content.includes(broken)) {
    const idx = content.indexOf(broken);
    content = Buffer.concat([
      content.slice(0, idx),
      emojiBytes,
      content.slice(idx + broken.length)
    ]);
  }
  console.log(`Fixed: ${emoji}`);
});

fs.writeFileSync(file, content);
console.log('✓ All emojis in academics.html fixed!');
