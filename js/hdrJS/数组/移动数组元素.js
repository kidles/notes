/**
 * 移动数组某个元素的位置
 * 不修改原数组，返回新数组
 * @param { Array } array 操作的数组
 * @param { number } from 操作的元素下标
 * @param { number } to 移动到的位置
 * @returns 移动后的新数组
 */
function move(array, from, to) {
    if (from < 0 || to >= array.length) {
        console.error('参数错误');
        return;
    }
    const newArray = [...array];
    let item = newArray.splice(from, 1);
    newArray.splice(to, 0, item[0]);
    return newArray;
}
let arr1 = [0, 1, 2, 3, 4, 5, 6];
let newArr = move(arr1, 0, 3);
console.log(newArr);
console.log(arr1);