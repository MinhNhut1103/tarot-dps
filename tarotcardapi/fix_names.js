const fs = require('fs');
const path = './routes/cardRoutes.js';
let content = fs.readFileSync(path, 'utf8');

content = content.replace(/name_vi:\s*"([^"]+)"/g, (match, nameViStr) => {
  // If the format is "English (Vi)", extract "Vi"
  // If the format is "Vi (English)", extract "Vi"
  let pureVi = nameViStr;
  
  if (nameViStr.includes('(')) {
    const parts = nameViStr.split('(');
    const firstPart = parts[0].trim();
    const secondPart = parts[1].replace(')', '').trim();
    
    // Check if first part matches the English name (e.g. contains 'of')
    if (firstPart.includes('of') || firstPart.includes('Ace') || firstPart.match(/^[A-Z][a-z]+ of [A-Z][a-z]+$/)) {
      pureVi = secondPart; // Take the Vietnamese part inside parentheses
    } else {
      pureVi = firstPart; // Take the Vietnamese part outside parentheses
    }
  }
  
  return `name_vi: "${pureVi}"`;
});

fs.writeFileSync(path, content, 'utf8');
console.log('Fixed names successfully!');
