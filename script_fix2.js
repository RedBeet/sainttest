const fs = require('fs');
let caution = fs.readFileSync('C:\\Users\\jason\\Desktop\\sainttest\\caution.js', 'utf8');
let q = fs.readFileSync('C:\\Users\\jason\\Desktop\\sainttest\\q.js', 'utf8');
let s = fs.readFileSync('C:\\Users\\jason\\Desktop\\sainttest\\s.js', 'utf8');
fs.writeFileSync('C:\\Users\\jason\\Desktop\\sainttest\\src\\app\\data.js', caution + '\n\n' + q + '\n\n' + s + '\n', 'utf8');
