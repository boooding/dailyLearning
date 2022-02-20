## OOP of JS
- JavaScript 没有提供 传统面向对象语言中的类式继承，而是通过原型委托的方式来实现对象 与对象之间的继承。
- JavaScript 也没有在语言层面提供对抽象类和接口的支持。

### 动态类型语言和鸭子类型

鸭子类型：只关注对象的行为，而不关注对象本身，也就是关注 HAS-A, 而不是 IS-A。
利用鸭子类型的思想，我们 不必借助超类型的帮助，就能轻松地在动态类型语言中实现一个原则：“面向接口编程，而不是 面向实现编程”。

### 多态
```javascript
var makeSound = function( animal ){
    if ( animal instanceof Duck ){
        console.log( '嘎嘎嘎' );
    }else if ( animal instanceof Chicken ){
        console.log( '咯咯咯' );
    }
};

var Duck = function(){};
var Chicken = function(){};

makeSound( new Duck() ); // 嘎嘎嘎
makeSound( new Chicken() ); // 咯咯咯
```

多态背后的思想是将“做什么”和“谁去做以及怎样去做”分离开来，
也就是将“不变的事 物”与 “可能改变的事物”分离开来。

