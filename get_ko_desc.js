const fs = require('fs');
const data = require('./src/app/data.js');
const saintsKo = data.saints.ko;
let output = '';
for (let c1 of Object.keys(saintsKo)) {
  for (let c2 of Object.keys(saintsKo[c1])) {
    for (let c3 of Object.keys(saintsKo[c1][c2])) {
      for (let c4 of Object.keys(saintsKo[c1][c2][c3])) {
        output += `${c1}${c2}${c3}${c4}:\n${saintsKo[c1][c2][c3][c4].description}\n---\n`;
      }
    }
  }
}
fs.writeFileSync('C:\\Users\\jason\\Desktop\\sainttest\\ko_desc.txt', output, 'utf8');
