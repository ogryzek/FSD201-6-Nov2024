/*
Export a Name Module. It has 2 functions:

  1. A function that receives first and last name and returns it with "Hello."
  2. A function that receives sender name, message, and recipient and prints them.

For example: "Jack", "Hello, how are you?", "Dan". The return message is: 
"Dan, you got a new message from Jack: Hello, how are you?"

Create a program and use it.
*/
const name = require('./name.js');

const lol = name.greet('Drew', 'Ogryzek');
console.log(lol);

const question = name.note("Drew", "Do you have any questions?", "Class");
console.log(question);
