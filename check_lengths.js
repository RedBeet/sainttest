const data = require('./src/app/data.js');
const saintsKo = data.saints.ko;
const saintsEn = data.saints.en;

console.log('--- Saints Description Lengths ---');
for (let c1 of ['C', 'R']) {
  for (let c2 of ['S', 'F']) {
    for (let c3 of ['V', 'D']) {
      for (let c4 of ['I', 'E']) {
        const koDesc = saintsKo[c1][c2][c3][c4].description;
        const enDesc = saintsEn[c1][c2][c3][c4].description;
        console.log(`${c1}${c2}${c3}${c4} | KO: ${koDesc.length} chars | EN: ${enDesc.length} chars`);
      }
    }
  }
}

console.log('\n--- Questions Check ---');
const koQ = data.questions.ko;
const enQ = data.questions.en;
console.log(`KO questions count: ${koQ.length}`);
console.log(`EN questions count: ${enQ.length}`);

for(let i=0; i<koQ.length; i++) {
  console.log(`Q${i+1} KO: ${koQ[i].question.length} chars | EN: ${enQ[i].question.length} chars`);
}
