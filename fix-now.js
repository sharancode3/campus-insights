#!/usr/bin/env node
const fs = require('fs');

const file = 'public/admissions.html';
let content = fs.readFileSync(file);

// Map broken byte sequences to correct emojis
const replacements = [
  { broken: Buffer.from('c3b0c5b8c5bde2809c', 'hex'), emoji: '🎓' },    // Graduation cap
  { broken: Buffer.from('c3b0c5b8e2809cc5a1', 'hex'), emoji: '📚' },   // Books
  { broken: Buffer.from('c3b0c5b8e2809dc2ac', 'hex'), emoji: '🔬' },   // Microscope
  { broken: Buffer.from('c3b0c5b8e28099c2bc', 'hex'), emoji: '💼' },   // Briefcase
  { broken: Buffer.from('c3b0c5b8c592c28d', 'hex'), emoji: '🌍' },    // Globe
  { broken: Buffer.from('c3b0c5b8e2809ce28093', 'hex'), emoji: '📜' }, // Scroll
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
console.log('✓ All emojis fixed!');
