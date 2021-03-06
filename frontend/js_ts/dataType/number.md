# Number数据类型

- js中，Number类型使用IEEE 754格式表示整数和浮点值（双精度）

- 常见运用

``` javascript
// 十进制
let num1 = 55; 

// 八进制 严格模式下无效
let num2 = 070, num3 = 060; 

// 十六进制
let num4 = 0xA, num5 = 0x1f; 
```

说明一下，由于JavaScript保存数值的方式，实际中可能存在正零（+0）和负零（-0）。正零和负零在所有情况下都被认为是等同的。

## 浮点值

因为存储浮点值使用的内存空间是存储整数值的两倍，所以ECMAScript总是想方设法把值转换为整数。在小数点后面没有数字的情况下，数值就会变成整数。类似地，如果数值本身就是整数，只是小数点后面跟着0（如1.0），那它也会被转换为整数。

对于非常大或非常小的数值，浮点值可以用科学记数法来表示。

```js
let num = 3.123e7
```



