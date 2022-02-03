// functor
// class Container {
//     constructor(value) {
//         this._value = value
//     }
//     map (func) {
//         return new Container(func(this._value))
//     }
// }
//
// let r = new Container(5).map(x => x + 1).map(x * x);
// console.log(r)

class Container {
    static of (value) {
        return new Container(value)
    }
    constructor(value) {
        this._value = value
    }
    map (func) {
        return Container.of(func(this._value))
    }
}

let r = new Container(5).map(x => x + 1).map(x => x * x);
console.log(r)

// Maybe
// 可以解决null，如果多次调用map 会报错
class Maybe {
    static of (value) {
        return new Maybe(value)
    }
    constructor(value) {
        this._value = value;
    }
    map (func) {
        return this.isNothing() ? Maybe.of(null) : Maybe.of(func(this._value))
    }
    isNothing () {
        return this._value === null || this._value === undefined;
    }
}
let maybe = Maybe.of('Hello World').map(x => x.toUpperCase())
console.log(maybe)
// let functor = Maybe.of(null).map(x => x.toUpperCase())
// console.log(functor)

// either left right

class Left {
    static of (value) {
        return new Left(value)
    }
    constructor(value) {
        this._value = value
    }
    map(func) {
        return this;
    }
}

class Right {
    static of (value) {
        return new Right(value)
    }
    constructor(value) {
        this._value = value
    }
    map(func) {
        return Right.of(func(this._value))
    }
}
function parseJSON (str) {
    try {
        return Right.of(JSON.parse(str))
    } catch (e) {
        return Left.of({"error" : e.message})
    }
}

let either = parseJSON('{name: booding}')
console.log(either)
let either2 = parseJSON('{"name": "boooding"}')
console.log(either2)

// IO
const fp = require('lodash/fp')
class IO{
    static of (x) {
        return new IO(function () {
            return x;
        })
    }
    constructor(func) {
        this._value = func;
    }
    map(func) {
        return new IO(fp.flowRight(func, this._value))
    }
}
let process = {"name": "boooding tang"}
let io = IO.of(process).map(process => process.name);
console.log(io._value())

//  folktale