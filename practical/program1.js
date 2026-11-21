const event = require('events');
const obj = new event;
obj.on(stdreg, (name,rollno)=> {
  console.log(`Name: ${name}, Roll No: ${rollno}`); 
  console.log(`Name: ${name}, Roll No: ${rollno}`); 
}
obj.emit(stdreg, 'John Doe', 12345);