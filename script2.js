const fs = require('fs');
const dataJsPath = 'C:\\Users\\jason\\Desktop\\sainttest\\src\\app\\data.js';
let originalCode = fs.readFileSync(dataJsPath, 'utf8');

const enQuestionsStr = `[
  { scale: 'I_E', question: 'Where do you prefer to volunteer?', answers: [{ answer: 'Other regions or overseas first', weight: -1 }, { answer: 'Places near me first', weight: 1 }] },
  { scale: 'C_R', question: 'What does theory mean to you?', answers: [{ answer: 'How to apply it in real life is important', weight: -1 }, { answer: 'Theory itself has meaning', weight: 1 }] },
  { scale: 'V_D', question: 'If I were a team leader, what role would I take?', answers: [{ answer: 'Lead by encouraging team members and sharing work', weight: 1 }, { answer: 'Lead team members with leadership and charisma', weight: -1 }] },
  { scale: 'C_R', question: 'What do you think about tradition?', answers: [{ answer: 'It is our identity and a social promise to keep', weight: 1 }, { answer: 'It can flexibly change according to the times', weight: -1 }] },
  { scale: 'I_E', question: 'You want to express gratitude to someone. How do you show it?', answers: [{ answer: 'In an indirect way, such as a gift', weight: 1 }, { answer: 'By buying them a meal', weight: -1 }] },
  { scale: 'V_D', question: 'A freshman joined the club. How do you treat them?', answers: [{ answer: 'Share tips about club activities', weight: -1 }, { answer: 'Directly help with what they need', weight: 1 }] },
  { scale: 'V_D', question: 'What kind of volunteering is needed in poor areas?', answers: [{ answer: 'Visit directly and provide supplies', weight: 1 }, { answer: 'Education on how to grow wealth is more important than wealth itself', weight: -1 }] },
  { scale: 'S_F', question: 'When a problem occurs in the community, I first', answers: [{ answer: 'Analyze the problem', weight: -1 }, { answer: 'Schedule time for discussion and meeting', weight: 1 }] },
  { scale: 'I_E', question: 'Where do you want to volunteer?', answers: [{ answer: 'In social organizations or local communities', weight: -1 }, { answer: 'In a volunteer group within the Catholic church', weight: 1 }] },
  { scale: 'S_F', question: 'What do you consider most important in life?', answers: [{ answer: 'Being with others', weight: 1 }, { answer: 'Time for myself', weight: -1 }] },
  { scale: 'S_F', question: 'What activities do you prefer for inner growth?', answers: [{ answer: 'Contemplation through individual reading', weight: -1 }, { answer: 'Discussion through reading groups', weight: 1 }] },
  { scale: 'C_R', question: 'How do you think education should be?', answers: [{ answer: 'Classes applying new methodologies', weight: -1 }, { answer: 'Familiar lecture style', weight: 1 }] }
]`;

let qMatch = originalCode.match(/export const questions = (\[[\s\S]*?\]);\s*export const saints =/);
let koQuestions = qMatch[1];
const newQuestions = 'export const questions = {\n  ko: ' + koQuestions + ',\n  en: ' + enQuestionsStr + '\n};';
fs.writeFileSync('C:\\Users\\jason\\Desktop\\sainttest\\q.js', newQuestions, 'utf8');
