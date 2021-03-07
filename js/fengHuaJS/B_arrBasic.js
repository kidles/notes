// 定义数组的方式
// 一个数组可放不同类型，但一般放同一类型
let arr1 = [1, 2, 3];
let arr2 = new Array(4, 5, 6);
let arr3 = Array(7, 8, 9);
let arr4 = Array.of(10, 11, 12);

// 定义一个数据的数组只能用Array.of和字面量的方式
let arrSingle = Array(6);
let arrSingle2 = new Array(7);
// 上面两种方式会定义长度为6，7的全空数组
let arrSingle3 = Array.of(4);
let arrSingle4 = [9];

// 访问数组
let arr5 = [1, 2, 3];
console.log(arr5.length);
console.log(arr5[0]);
console.log(arr5[1]);
console.log(arr5[8]); //不存在返回undefined
console.log(arr5[-1]); //undefined
console.clear();

// 数组转成字符串
let str1 = arr5.toString();
let str2 = String(arr5);
let str3 = arr5.join('|');
// 字符串转成数组
let str1 = '这是一个字符串'
str1.split('');
str1.split(',');
Array.from(str1);

// 添加元素
arr5[0] = 5;
console.log(arr5);
arr5[3] = 4;
console.log(arr5);
arr5[8] = 9;
console.log(arr5);
console.log(arr5[7]);
console.clear();

//删除元素
var arr6 = [1, 2, 3, 4, 5, 6];
arr6.length = 5;
console.log(arr6);
arr6.length = 0;
console.log(arr6);
// 其他看splice()方法,会改变原数组
arr6.splice(0, 2); // 0开始删除两个
arr6.splice(-1, 2); // -1开始删除两个
arr6.splice(0, 0, '头插');
arr6.splice(arr6.length, 0, '尾插');
console.clear();

// 数组的遍历
let arr7 = [0, 1, 2, 3, 4, 5, 6]
    // 传统for
for (let i = 0; i < arr7.length; i++) {
    console.log(arr7[i]);
}
// for of，访问不了index
for (let item of arr7) {
    console.log(item);
}
// forEach
arr7.forEach((item, index, self) => {
    console.log(`${item} ${index} ${self}`)
});
console.clear();

// 栈模式，先进后出
var stack = [1, 2, 3];
stack.push(4);
console.log(stack);
stack.push(5, 6, 7);
console.log(stack);

var last = stack.pop();
console.log(last);
console.log(stack);
// 查看栈顶的数据
console.log(stack[stack.length - 1]);
console.clear();

// 队列模式，先进先出
var quene = [1, 2, 3, 4, 5, 6];
quene.push(7);
var first = quene.shift();
console.log(first);
// 插队
quene.unshift(0, 1, 2);
console.log(quene);
console.clear();

// 反转数组
var arr8 = [1, 2, 3];
// 返回一个反转的数组，原数组也反转
console.log(arr8.reverse());
console.log(arr8);

console.log("Hello".split('').reverse().join('|'));
console.clear();

// 数组排序
var arr9 = [1, 4, 6, 7, 0, 2];
arr9.sort();
// 默认小到大
console.log(arr9);

// 实现大到小
// arr9.sort((a, b) => {
//     if (a > b) {
//         return -1;
//     } else if (a < b) {
//         return 1;
//     } else {
//         return 0;
//     }
// });
arr9.sort((a, b) => b - a);
console.log(arr9);
console.clear();

// 数组连接
var arr10 = [10, 11, 12];
console.log(arr10.concat(arr9, arr8));
console.clear();

// 数组的裁切
var arr11 = [1, 2, 3, 4, 5, 6, 7];
// 提取1到尾
console.log(arr11.slice(1));
// 提取1,2
console.log(arr11.slice(1, 3));
console.log(arr11.slice(-3, -1));
console.clear();


// 数组的 map
// *2操作
console.log(`原数组：${arr11}`);
var mapArr = arr11.map(ele => ele * 2);
console.log(`map的结果(*2)：${mapArr}`);
// 数组的 reduce
// 求和
var reduceArr = arr11.reduce((sum, current) => sum + current, 0);
console.log(`reduce的结果(求和)：${reduceArr}`);
// 数组过滤 filter
// >4返回
var filterArr = arr11.filter((item) => item > 4);
console.log(`filter的结果(>4)：${filterArr}`);
// 数组测试
// every 全满足返回true
// some 一个满足返回true
var res = arr11.every(item => item > 0);
console.log(res);
var res2 = arr11.some(item => item > 5);
console.log(res2);
console.clear();


// distructing 操作符
var arr12 = [1, 2, 3];
console.log(arr12);
var [a, b, c] = arr12;
console.log(`a=${a},b=${b},c=${c}`);

var [, f] = arr12;
console.log(f);

function MultipleReturns() {
    let name = 'kidles';
    let age = 24;
    return [name, age];
}
let [name, age] = MultipleReturns();
console.log(name, age);

// rest 操作符
var [a, b, ...rest] = arr11; //[3,4,5,6,7]
console.log(rest);
var [a, , b, ...rest] = arr11;
console.log(rest); //[4,5,6,7]

function variousArgs(...args) {
    console.log(args);
}
variousArgs(1, 2, 3); //[1,2,3]
console.clear();

// 多维数组
var arr13 = [];
for (let i = 0; i < 5; i++) {
    arr13[i] = [];
    for (let j = 0; j < 4; j++) {
        arr13[i][j] = i + j;
    }
}
console.log(arr13);