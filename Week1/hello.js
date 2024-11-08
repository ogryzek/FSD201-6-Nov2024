const calc = require("./calculate");

// function sum(a, b) {
//     return a + b;
// }

const answer = sum(3, 10);
const answer2 = calc.sum(3, 10);

console.log(`the answer is: ${answer}.`);
console.log(`the answer2 is: ${answer2}.`);