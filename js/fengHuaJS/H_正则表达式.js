//正则表达式(没看。。。)
var str = "what where when";
//创建
//1 字面值
var re = /wh/g;
//2 构造函数RegExp()创建正则表达式对象
var re2 = new RegExp("wh");
//方法 exec()： 返回结果  text()： 返回 true/ false
console.log(re.exec(str)); //["wh",index:0]
console.log(re.exec(str)); //["wh",index:5]
console.log(re.exec(str)); //["wh",index:11]
console.log(re.exec(str)); //null
console.log(re.test(str)); //true

//字符匹配  //.test()

console.clear();

//特殊字符匹配
// . 一个字符
// \d 匹配 0-9
// \w 字母 数字 下划线
// \s \n \t 空白字符
//  \u uniciod编码
// \d \w 变成大写 意思相反
var str = `this str _contains tthe
123`;
console.log(str.match(/th.s/g)); //this
console.log(str.match(/\d/g)); //[1,2,3]
console.log(str.match(/\w/g)); //["t", "h", "i", "s", "s", "t", "r", "_", "c", "o", "n", "t", "a", "i", "n", "s", "1", "2", "3"]
console.log("你好".match(/\u4f60/g)); //你
//匹配次数  *: 0次或者多次, .* 所有,   ""."遇到换行符就就停止
// +  1次或多次 至少出现一次
// ?  0次 或者1次
console.log(str.match(/th.*/g)); //this str _contain
console.log(str.match(/t+/g)); // "t", "t", "t", "t"
console.log(str.match(/th?/g)); // "th", "t", "t", "th"
//{} 出现的次数 {n} n次 {n,} 至少n次  {n-m} 范围
console.log(str.match(/t{1}/g)); //["t", "t", "t", "t", "t"]
console.log(str.match(/t{2}/g)); //["tt"]
console.log(str.match(/t{1,2}/g)); //["t", "t", "t", "tt"]
//区间 [a-z] [A-Z] [0-9] [^0-9]:不在0-9里面，匹配非数字 ,[\-]匹配 -
// 逻辑   [a|b] 匹配a和b
console.log(str.match(/[abc]/g)); //[c,a]
console.log(str.match(/[a-z]/g)); //["t", "h", "i", "s", "s", "t", "r", "c", "o", "n", "t", "a", "i", "n", "s", "t", "t", "h", "e"]
//定界符 /^abc/ abc开头  /$abc/ abc结尾  /\babc\b/ 单独abc

console.clear();
//分组 () 对模式进行分组，当作整体内容返回
var str = `this that this and that`;
console.log(/(th).*(th)/.exec(str)); //this that this and th", "th", "th"
var str = `aaaab abb cddaa`;
console.log(str.match(/(aa){2}/g)); //[aaaa]

console.clear();

//常见正则表达式
//手机号
var mobile = /^1[3-9]\d{9}/g;
console.log(mobile.test("13345678907")); //true;
//邮箱
var email = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/g;
console.log(email.test("15058883456@123.com")); //true
//用户名
var username = /^[a-zA-Z][a-zA-Z0-9_]{5,14}&/g;
console.log(username.test("_123")); //false
//字符串替换  replace

var str = `Tish is an apple`;
console.log(str.replace("Tish", "this")); //this is an apple
var str1 = `Tish 2is 2an 3apple`;
console.log(str.replace(/\d+/g, "")); //Tish is an apple

var html = `<span>hello</span><div>world</div>`;
console.log(html.replace(/<[^>]*>([^<>]*)<\/[^>]*>/g, "$1")); //hello world

//字符串分割 split()

console.clear();
var tags = "html ,css, javascript";
console.log(tags.split(",")); //["html ", "css", " javascript"]
var tags1 = "html  ^ css  * javascript";
console.log(tags1.split(/\W+/g)); //["html", "css", "javascript"]

console.clear();