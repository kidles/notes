// 异步
//setTimeout()    clearTimeout()
console.log("第一行代码");
var timer1 = setTimeout(() => {
    console.log("1秒后执行");
}, 1000);
console.log("第二行代码");
setTimeout(() => {
    clearTimeout(timer1);
    console.log("中断了 timer1的执行");
}, 500);

//setInterval()  clearInterval()
var inter = setInterval(() => {
    var date = new Date();
    console.log(`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`);
}, 1000);
setTimeout(() => {
    clearInterval(inter);
}, 5000);

console.clear();

//耗时的方法用 new Promise((resolve,rejected)=>{})  接受一个回调函数作为参数 ;
//Promise的api Promise.resolve("test")=new Promise(resolve=>resolve("test"));
console.clear();




// Promise
//耗时的方法用 new Promise((resolve,rejected)=>{})  接受一个回调函数作为参数 ;
//Promise的api Promise.resolve("test")=new Promise(resolve=>resolve("test"));

var promise = new Promise((resolve, rejected) => {
    setTimeout(() => {
        resolve("执行成功");
    }, 2000);
});
promise.then((result) => console.log(result)); //执行成功

var promise = new Promise((resolve, rejected) => {
    setTimeout(() => {
        rejected("执行失败");
    }, 2000);
});
promise.catch((result) => console.log(result)); //执行失败
console.clear();
//Promise 链式调用
var promise = new Promise((resolve, rejected) => {
        setTimeout(() => {
            resolve(1); //成功
            rejected("执行失败");
        }, 1000);
    })
    .then((value) => {
        console.log(value); //1
        //throw "then1 异常" 也会被catch到
        return value + 10;
    })
    .then((value) => {
        console.log(value); //11
        return new Promise((resolve) => resolve(value + 20));
    })
    .then((value) => console.log(value))
    .catch((error) => {
        console.log(error); //上面 settimeout执行失败，就被catch到；
    });
//多个Promise 执行  返回大promise

var p1 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(1);
    }, 1000);
});
var p2 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(2);
    }, 2000);
});
var p3 = new Promise((resolve) => {
    setTimeout(() => {
        resolve(3);
    }, 500);
});

Promise.all([p1, p2, p3]).then((values) => {
    console.log(values); //[1,2,3]
});