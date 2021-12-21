var name = '123'
var obj = {
    name:'456',
    getName:function(){
        function printName(){
            console.log(this.name)
        }
        printName()
    }
}

obj.getName()
// 结果？改写，让结果
// 输出456


// js 随机声称颜色
const color1 = () => {
    this.r = Math.floor(Math.random()*255);
    this.g = Math.floor(Math.random()*255);
    this.b = Math.floor(Math.random()*255);
    this.color = 'rgba('+ this.r +','+ this.g +','+ this.b +',0.8)';
}

// block inline-block block节点
// 142 环形链表 II
// 并发和并行的区别
// Redis用过么，说一下
// 僵尸进程
// 百万数据 https://www.cnblogs.com/hustskyking/p/million-data-show-in-front-end.html
// js大数据相加 ts
// js的模块知道么，AMD、Command JS、 CMD的区别
// document.documentloaded
// webpack
// for in 和 Object.keys()的区别.
// Object.assign()是深拷贝还是浅拷贝
// 如何进行数组去重
// 前端怎么进行性能优化.