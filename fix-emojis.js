const fs = require('fs');
const path = require('path');

try {
  const filePath = path.join(__dirname, 'public', 'admissions.html');
  let content = fs.readFileSync(filePath, 'utf8');
  
  const replacements = [
    { broken: /ðŸŎ"/g, fixed: '🎓' },   // Graduation cap
    { broken: /ðŸ"š/g, fixed: '📚' },   // Books
    { broken: /ðŸ"¬/g, fixed: '🔬' },   // Microscope
    { broken: /ðŸ'\¼/g, fixed: '💼' },  // Briefcase
    { broken: /ðŸŌ/g, fixed: '🌍' },    // Globe
    { broken: /ðŸ"–/g, fixed: '📜' }    // Scroll
  ];
  
  replacements.forEach(({broken, fixed}) => {
    content = content.replace(broken, fixed);
  });
  
  fs.writeFileSync(filePath, content, 'utf8');
  console.log('✓ All corrupted emoji icons have been fixed!');
} catch (error) {
  console.error('Error fixing icons:', error.message);
}
