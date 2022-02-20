// func
function MathHandle(x, y) {
    this.x = x;
    this.y = y;
}

MathHandle.prototype.add = () => {
    return this.x + this.y;
}

// class
class MathHandle {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    add() {
        return this.x + this.y;
    }
}

// inherit 1
// bind prototype to inherit
function Animal() {
    this.eat = function () {
        console.log('animal eat')
    }
}
function Dog() {
    this.bark = function () {
        console.log("dog bark")
    }
}
Dog.prototype = new Animal()

// inherit 2
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} eat`)
    }
}
class Dog extends Animal {
    constructor(name) {
        super(name);
        this.name = name;
    }
    say() {
        console.log(`${this.name} say`)
    }
}
/*
    1. Class在语法上更加贴合面向对象的写法
    2. Class实现继承更加易读、易理解
    3. 本质还是语法糖,使用prototype
 */