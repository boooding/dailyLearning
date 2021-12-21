### AMD、CMD、CommonJS、ES6 Module 区别

AMD：提前加载
CMD：按需加载

CommonJS模块是运行时加载，ES6 Module是编译时输出接口；
CommonJS加载的是整个模块，将所有的接口全部加载进来，ES6 Module可以单独加载其中的某个接口；
CommonJS输出是值的拷贝，ES6 Module输出的是值的引用，被输出模块的内部的改变会影响引用的改变；
CommonJS this指向当前模块，ES6 Module this指向undefined;

for-in 是javaScript中最常见的迭代语句，常常用来枚举对象的属性。某些情况下，可能按照随机顺序遍历数组元素；
而Object构造器有一个实例属性keys，则可以返回以对象的属性为元素的数组。
数组中属性名的顺序跟使用for-in遍历返回的顺序是一样的。
for-in循环会枚举对象原型链上的可枚举属性，而Object.keys不会