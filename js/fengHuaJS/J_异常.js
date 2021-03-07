//异常
//捕获异常 不会影响程序继续进行
try {
    var emp = undefined;
    console.log(emp.name);
} catch (err) {
    console.log(err); //TypeError: Cannot read property 'name' of undefined
} finally {
    console.log("总会执行");
}

//throw 抛出异常
function fetchDate() {
    console.log("获取数据");
    throw "404";
}
try {
    fetchDate();
} catch (err) {
    if (err == 404) {
        console.log("未查询到数据"); //未查询到数据
    }
}

//异常  Error对象

function fetchDate() {
    console.log("获取数据");
    throw new Error("404");
}
try {
    fetchDate();
} catch (err) {
    console.error(err);
    console.error(err.name); //Error
    console.error(err.message); //404
}
console.clear();
//API Error

class ApiError extends Error {
    constructor(url, ...params) {
        super(...params);
        this.url = url;
        this.name = "ApiError";
    }
}

function fetchDate() {
    console.log("获取数据");
    throw new ApiError("/post", "404");
}

try {
    fetchDate();
} catch (err) {
    console.error(err);
    console.error(err.name); //Error
    console.error(err.message); //404
    console.log(err.url); //  /post
}
console.clear();


//捕获多个异常
class ApiErrorTow extends Error {
    constructor(url, ...params) {
        super(...params);
        this.url = url;
        this.name = "ApiError";
    }
}

function fetchDate() {
    console.log("获取数据");
    console.log(a); //第一个异常
    throw new ApiErrorTow("/post", "404"); //第二个异常
}

try {
    fetchDate();
} catch (err) {
    if (err instanceof ReferenceError) {
        console.log("程序异常");
    } else if (err instanceof ApiErrorTow) {
        console.log("API异常");
    }
}