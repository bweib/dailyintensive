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
function searchxiaojiejie(age, stature) {
    if (age === void 0) { age = 18; }
    if (stature === void 0) { stature = '36D'; }
    var yy = '';
    if (stature != undefined) {
        yy = stature;
    }
    return '找个' + yy + age + '岁的小姐姐';
}
var xiaojieage = 16;
var result = searchxiaojiejie(xiaojieage, '苗条的');
console.log(result);
function searchxiaojiejie1() {
    var xuqiu = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        xuqiu[_i] = arguments[_i];
    }
    var yy = '';
    for (var i = 0; i < xuqiu.length; i++) {
        yy = yy + xuqiu[i];
        if (i < xuqiu.length) {
            yy = yy + '、';
        }
    }
    return '找个' + yy + '的小姐姐';
}
var result1 = searchxiaojiejie1('屁股大', '苗条', '年轻');
console.log(result1);
