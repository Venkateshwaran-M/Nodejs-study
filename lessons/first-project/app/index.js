// app/index.js
const calc = require('./calculator');
const numbersToAdd = [3, 5, 9, 4, 8];
const result = calc.sum(numbersToAdd);
console.log('result:', result);