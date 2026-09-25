const fs = require('fs');

fs.writeFileSync("test.txt","Hellow world!!!!");

const data = fs.readFileSync('test.txt','utf8');
console.log(data);