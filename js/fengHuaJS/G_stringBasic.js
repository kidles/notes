// 字符串
var str = '字面量形式';
// 不推荐
var str2 = new String('你好');
console.log(str2);

// 转义字符 \n \t
str = '他说：\t"我们出去玩把"';
console.log(str);
// unicode编码字符
console.log("\u1010");


// 遍历
for (let i = 0; i < str.length; i++) {
    console.log(str.charAt(i));
}

for (let c of str) {
    console.log(c);
}


// 裁切
console.clear();
var str = 'This is a long string';
console.log(str.slice(0, 4)); //0-3
console.log(str.slice(4)); //4-尾
console.log(str.slice(0, -1)); //0-尾
console.log(str.slice(-6, -1));
console.log(str.slice(4, 1)); //空
// 接受负数会变成0，前大后小会调转
console.log(str.substring(0, 4));


// 拼接
var str1 = 'hello';
var str2 = 'world';
console.log(str1 + str2);
// 不推荐
console.log(str1.concat(str2));

// 大小写
console.log(str1.toUpperCase());
console.log(str1.toLocaleLowerCase());

// 去除首尾空格
var str = '     aaaa    bbbbbb      ';
console.log(str1.trim());

// 模板字符串
var name = '峰华';
var longStr = `模板字符串可以换行 ${name}，
模板字符串可以换行模板字符串可以换行模板字符串可以换行模板字符串可以换行模板字符串可以换行模板字符串可以换行模板字符串可以换行模板字符串可以换行模板字符串可以换行模板字符串可以换行模板字符串可以换行`;
console.log(longStr);

// 标签函数
// strings接受模板字符串中变量分隔的字符串组成的数组
function greeting(strings, gender) {
    let genderStr = "";
    if (gender === "M") {
        genderStr = "先生";
    } else {
        genderStr = '女士';
    }
    return `${strings[0]}${genderStr}${strings[1]}`;
}
var gender = "M";
var result = greeting `你好,峰华${gender},早上好`;
console.log(result);