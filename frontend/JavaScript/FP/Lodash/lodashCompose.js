const _ = require('lodash')

const reverse = arr => arr.reverse();
const first = arr => arr[0];
const toUpper = s => s.toUpperCase();

const f = _.flowRight(toUpper, first, reverse)
console.log(f(['one', 'two', 'three']))


// realization

function compose(...args) {
    return function (value) {
        return args.reverse().reduce(function (previousResult, func) {
            return func(previousResult)
        }, value)
    }
}

let myF = compose(toUpper, first, reverse)
console.log(myF(['one', 'two', 'three']))

// ES6

let composeES6 = (...args) => value => args.reverse().reduce((previousResult, func) => func(previousResult), value)

let myFES6 = composeES6(toUpper, first, reverse)
console.log(myFES6(['one', 'two', 'three']))

// debug

const trace = _.curry((tag, v) => {
    console.log(tag, v)
    return v;
})