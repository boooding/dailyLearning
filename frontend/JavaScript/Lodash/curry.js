const _ = require('lodash')

function getSum (a, b, c) {
    return a + b + c
}

let getSumCurried = _.curry(getSum);

console.log(getSumCurried(1,2)(3))
console.log(getSumCurried(1)(2,3))

// example

const match = _.curry(function (reg, str) {
    return str.match(reg)
})

const haveSpace = match(/\s+/g);
// const haveDigit = match(/\d+/g);
const filter = _.curry(function (func, array) {
    return array.filter(func)
})
const findSpace = filter(haveSpace)
console.log(findSpace(['boooding tang', 'boooding_tang']))

// lodash curry

function curry (func) {
    return function curriedFunc(...args) {
        //
        if (args.length < func.length) {
            return function () {
                return curriedFunc (...args.concat(Array.from(arguments)))
            }
        }
        return func(...args)
    }
}
