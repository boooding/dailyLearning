/*
    apply-call
    这两个方法都会以指定的this值来调用函数,
    调用有指定this值和参数的函数的结果。

    sum.apply(this, arguments)
        调用sum()函数，将this作为函数体内的this值
        （这里等于window，因为是在全局作用域中调用的）传入，
        同时还传入了arguments对象
    sum.apply(this, [num1, num2])
        也会调用sum()函数，但会传入参数的数组。

    在严格模式下，调用函数时如果没有指定上下文对象，则this值不会指向window。
    除非使用apply()或call()把函数指定给一个对象，
    否则this的值会变成undefined。

    call()方法与apply()的作用一样，只是传参的形式不同。
    apply()和call()真正强大的地方并不是给函数传参，
    而是控制函数调用上下文即函数体内this值的能力。
*/
window.color = 'red';
let o = { color: 'blue' };
const sayColor = () => { console.log(this.color) }
sayColor(); sayColor.call(this); sayColor.call(window); // red
sayColor().call(o) // blue
//  使用call()或apply()的好处是可以将任意对象设置为任意函数的作用域，
//  这样对象可以不用关心方法。

// ES5 bind
let objectSayColor = sayColor().bind(0);
objectSayColor();

/*

    func.apply(thisArg, [argsArray])
thisArg
    必选的。在 func 函数运行时使用的 this 值。
    请注意，this可能不是该方法看到的实际值：
    如果这个函数处于非严格模式下，则指定为 null 或 undefined 时
    会自动替换为指向全局对象，原始值会被包装。
argsArray
    可选的。一个数组或者类数组对象，其中的数组元素将作为单独的参数传给 func 函数。
    如果该参数的值为 null 或  undefined，则表示不需要传入任何参数。
    从ECMAScript 5 开始可以使用类数组对象。

返回值:
调用有指定this值和参数的函数的结果。


 */