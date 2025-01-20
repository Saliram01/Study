// DEFAULT IMPORTS
const add = require('./single_default_module'); // Single
console.log("Sum is",add(5,5));

const { sub, mul } = require('./multiple_default_module'); // multiple 
console.log("Sub is",sub(5,2));
console.log("Mul is",mul(5,2));

// NAMED IMPORTS
const { div } = require('./named_module');
console.log("Divisible value is", div());