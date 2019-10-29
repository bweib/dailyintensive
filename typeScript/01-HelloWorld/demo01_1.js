/**变量类型 */
// number
var age = 18;
var num = 18.8;
console.log(age, 'number');
console.log(num);
//string
var str = 'nidaye';
console.log(str, 'string');
//boolean
var tr = true;
var f = false;
console.log(tr, 'boolean');
console.log(f);
//enum类型 枚举
// enum Season{ sping, sunmmer, autumn, winter };
var Season1;
(function (Season1) {
    Season1["sping"] = "\u6625";
    Season1["sunmmer"] = "\u590F";
    Season1["autumn"] = "\u79CB";
    Season1["winter"] = "\u51AC";
})(Season1 || (Season1 = {}));
;
console.log(Season1, 'enum');
//any
var an = 666;
an = 'ni';
console.log(an, 'any');
//函数
function searchxiaojiejie(age) {
    return '找个' + age + '岁的小姐姐';
}
var xiaojieage = 18;
var result = searchxiaojiejie(xiaojieage);
console.log(result);
