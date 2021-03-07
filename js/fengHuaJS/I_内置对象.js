//内置对象
//Number
var strnum = "10.561px";
var strF = parseFloat(strnum);
console.log(strF);

var strnum = "12.34";
var num = Number.parseInt(strnum);
console.log(num);
console.log(typeof num); //number

var strNum = "abc";
var num = parseInt(strNum);
console.log(num); //NaN;
console.log(isNaN(num)); //true

var num = 12.33646;
var numStr = num.toFixed(2); //保留2位小数，返回类型是string
console.log(numStr);
console.log(typeof numStr); //string

//返回最大不会溢出
console.log(Number.MAX_SAFE_INTEGER); //最大可取数字
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.NEGATIVE_INFINITY);
console.clear();


//Math
console.log(Math.PI);
console.log(Math.abs(-9));
console.log(Math.sin(Math.PI / 2)); //1
console.log(Math.floor(3.67)); //3  向下取整数
console.log(Math.ceil(3.67)); //4  向上取整数
console.log(Math.ceil(3.17)); //4
console.log(Math.trunc(3.67)); //3  去掉小数点后的
console.log(Math.pow(10, 3)); //10^3
console.log(Math.random()); // [0,1) 之间随机小数
console.clear();


//Date  get换成set  设置时间
var date = new Date();
console.log(date); //Tue Feb 02 2021 18:20:56 GMT+0800 (中国标准时间)
console.log(date.getFullYear()); //2021
console.log(date.getMonth() + 1);
console.log(date.getDay()); //一周内第几天
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
//时间戳
console.log(date.getTime()); //1970到现在的时间
console.log(date.toLocaleTimeString()); //下午6:26:10
console.log(date.toLocaleDateString()); //2021/2/2
console.clear();


// JSON  
// key 必须用 ""
// 定义JSON 字符串
var postJSON = `{
    "id":1,
    "title":"标题1",
    "comments":[
        {
            "userId":1,
            "commet":"评论1"
        },
        {
            "userId":2,
            "commet":"评论2"
        }
    ],
    "published":true,
    "author":null
}`;
//parse(): JSON字符串转化成json对象   key没有 ""
//stringify() json对象转化JSON字符串
console.log(JSON.parse(postJSON)); //{id: 1, title: "标题1", comments: Array(2), published: true, author: null}

var person = {
    id: 1,
    name: "风华",
    skills: ["React", "vue", "angular"],
};
console.log(JSON.stringify(person)); //{"id":1,"name":"风华","skills":["React","vue","angular"]}

console.clear();


// set 集合  
// 没有重复元素的集合
// add(), delete (), clear(), has()
var set = new Set();
set.add(1);
set.add(3);
set.add(5);
console.log(set.has(5)); //true
//set遍历
set.forEach((value) => console.log(value)); //135
set.delete(5);
set.clear();
console.log(set); //set(0){}

//map 
//键值对  但key可以是任意元素
//get() set() has()
var map = new Map();
map.set(1, "值1");
map.set({ key: 1 }, "值2");

console.log(map.get(1)); //值1
console.log(map.has(1)); //true
//遍历
map.forEach((value, key) => {
    console.log(key, value);
});
for (let [key, value] of map) {
    console.log(key, value);
}

//iterator 迭代器   map.entries():获取键值对；
var iterator = map.entries();
console.log(iterator); //MapIterator {1 => "值1", {…} => "值2"}
//iterator.next().value 下一个迭代的值
console.log(iterator.next().value); //[1, "值1"]
//删除
map.delete(1);