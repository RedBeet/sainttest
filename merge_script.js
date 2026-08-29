const fs = require('fs');

let c1 = JSON.parse(fs.readFileSync('C:\\Users\\jason\\Desktop\\sainttest\\enC1.json', 'utf8'));
let c2 = JSON.parse(fs.readFileSync('C:\\Users\\jason\\Desktop\\sainttest\\enC2.json', 'utf8'));
let r1 = JSON.parse(fs.readFileSync('C:\\Users\\jason\\Desktop\\sainttest\\enR1.json', 'utf8'));
let r2 = JSON.parse(fs.readFileSync('C:\\Users\\jason\\Desktop\\sainttest\\enR2.json', 'utf8'));

let enSaints = {
  C: { S: c1.S, F: c2.F },
  R: { S: r1.S, F: r2.F }
};

let enSaintsStr = JSON.stringify(enSaints, null, 2);

let code = fs.readFileSync('C:\\Users\\jason\\Desktop\\sainttest\\src\\app\\data.js', 'utf8');

// The file ends with:
// export const saints = {
//   ko: { ... },
//   en: { ... }
// };
// We will replace the entire 'en: { ... }' block.

let newCode = code.replace(/en:\s*\{[\s\S]*\}\s*\};/, 'en: ' + enSaintsStr + '\n};');
fs.writeFileSync('C:\\Users\\jason\\Desktop\\sainttest\\src\\app\\data.js', newCode, 'utf8');
