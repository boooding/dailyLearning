const _ = require('lodash')

function getArea(r) {
    console.log(r);
    return Math.PI * r * r;
}

let getAreaWithMemory = _.memoize(getArea);
console.log(getAreaWithMemory(4));
console.log(getAreaWithMemory(4));

// memoize
function memoize (func) {
    let cache = {};
    return function () {
        let key = JSON.stringify(arguments)
        cache[key] = cache[key] || func.apply(func, arguments)
        return cache[key]
    }
}

let getAreaWithMemory2 = memoize(getArea);
console.log(getAreaWithMemory2(4));
console.log(getAreaWithMemory2(4));