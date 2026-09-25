const fs = require('fs');

fs.writeFileSync("test.txt","Hellow world my name is shibam!!!!");

const data = fs.readFileSync('test.txt','utf8');
console.log(data);