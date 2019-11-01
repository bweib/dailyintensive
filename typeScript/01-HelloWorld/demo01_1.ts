/**变量类型 */

// number
var age: number = 18;
var num: number = 18.8;
console.log(age, 'number');
console.log(num);

//string
var str: string = 'nidaye';
console.log(str, 'string');

//boolean
var tr: boolean = true;
var f: boolean = false;
console.log(tr, 'boolean');
console.log(f);

//enum类型 枚举
// enum Season{ sping, sunmmer, autumn, winter };
enum Season1 { sping = '春', sunmmer = '夏', autumn = '秋', winter = '冬' };
console.log(Season1, 'enum');

//any
var an: any = 666;
an = 'ni';
console.log(an, 'any');

//函数

function searchxiaojiejie(age: number = 18, stature: string = '36D'): string {
    let yy: string = '';
    if (stature != undefined) {
        yy = stature;
    }
    return '找个' + yy + age + '岁的小姐姐'
}
var xiaojieage: number = 16;

var result: string = searchxiaojiejie(xiaojieage, '苗条的');

console.log(result);

function searchxiaojiejie1(...xuqiu: string[]): string {
    let yy: string = '';
    for (let i = 0; i < xuqiu.length; i++) {
        yy = yy + xuqiu[i];
        if (i < xuqiu.length) {
            yy = yy + '、'
        }
    }
    return '找个' + yy + '的小姐姐';
}

var result1: string = searchxiaojiejie1('屁股大', '苗条','年轻');

console.log(result1);