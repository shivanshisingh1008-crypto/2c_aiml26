
const fs = require('fs');

// 1. CREATE a file
fs.writeFileSync('student.txt', 'Hello, this is my student file.');
console.log("File created successfully!");

// 2. READ the file
let data = fs.readFileSync('student.txt', 'utf8');
console.log("File content:", data);

// 3. UPDATE the file
fs.appendFileSync('student.txt', '\nWelcome to Node.js!');
console.log("File updated successfully!");

// 4. DELETE the file
fs.unlinkSync('student.txt');
console.log("File deleted successfully!");
