// 生成begin到end的数组
function rangeArray(begin, end) {
    let arr = [];
    for (let i = begin; i <= end; i++) {
        arr.push(i);
    }
    return arr;
}
let res = rangeArray(1, 9);
console.log(res);