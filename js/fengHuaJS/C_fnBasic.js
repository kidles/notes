// 函数
// 函数最好命名开头用动词
// 没有返回值，默认返回undefined
// 函数声明
function putInRefrigerator(something) {
    return something;
}
// 函数表达式
const putIn = putInRefrigerator;
const multiply2Num = function(a, b) {
    return a * b;
};

// 变量和函数提升
// var的才会提升,undefined
// 函数会提升,所以一般把函数定义放下面,关注代码逻辑

// 默认值
function greetingWithWeather(name = "峰华", weather) {
    console.log(`你好${name},今天是${weather}.`);
}
greetingWithWeather(undefined, "晴天"); //使用undefined为了使用默认值


// 递归
// 1-n求和
function sum(n) {
    if (n === 1) {
        return 1;
    }
    return n + sum(n - 1);
}
console.log(sum(100));
//斐波拉契数列: 1 1 2 3 5 8 13
// 1 1 (n-1)+(n-2)
// 
function fib(num) {
    if (num <= 1) {
        return 1;
    }
    return fib(num - 1) + fib(num - 2);
}
console.log(fib(5)); //从0开始



// 每个函数都有arguments对象
// arguments接受所有参数
function log(sth) {
    console.log(sth);
    for (let i = 0; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
log("显式参数", "参数一", "参数二", "参数三");


// 作用域
// var 函数作用域
// let,const 块作用域
// 同名局部覆盖全局


// 箭头函数
const setAge = (age) => {
    return "你的年龄是: " + age;
};
// 一个参数括号省略
// 只有return语句，花括号和return省略
const greeting = name => `你的名字是: ${name}`;


// 闭包
// 计算a^2+b^2
function squareSum(a, b) {
    function square(x) {
        return x * x;
    }
    return square(a) + square(b);
}
// 高阶函数(返回函数的函数)
// 让 name 只能获取,不能修改,起到保护作用
function person() {
    let name = "峰华";

    function getName() {
        return name;
    }
    return getName;
}
let getName = person();
console.log(getName);
console.log(getName());


// 柯里化
// 把接受多个参数的函数变成逐个接受的多级嵌套函数
function addThreeNum(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}
const add3Res = addThreeNum(1)(2)(3);
console.log(add3Res);
const addTheRestTwo = addThreeNum(1);
let res = addTheRestTwo(2)(3);
console.log(res);


// 自执行函数,立即调用函数
var num = 10;
(function() {
    var num = 20;
    console.log(num);
})();
console.log(num);

//清空控制台
console.clear();

// 回调函数
function request(cb) {
    console.log('request开始');
    cb('request里的数据');
    console.log('reques结束');
}

function callback(result) {
    console.log(`callback结果是： ${result}`);
}
request(callback);
// 箭头函数形式，但callback不能复用了
request(result => {
    console.log(`callback结果是： ${result}`);
})