const { compose, curry } = require('folktale/core/lambda')
const { toUpper, first } = require('lodash/fp')

// let curriedF = curry(2, (x, y) => {
//     return x + y;
// })
//
// console.log(curriedF(1,2));
// console.log(curriedF(1)(2));

let composeF = compose(toUpper,first)
console.log(composeF(['one', 'two']))