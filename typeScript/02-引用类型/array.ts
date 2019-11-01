//数组
let arr1: number[] = [1, 2];//声明一个数值类型 的数组
let arr2: Array<string> = ['666', '777'];//声明一个字符串类型的数组
console.log(arr1);
console.log(arr2);

//元祖 一种特殊的数组
//声明一个元祖类型
let x: [number, string,];
//正确的初始化
// x = ['hello', 10]
//错误的初始化方法
x = [10, 'hello'];

console.log(x)