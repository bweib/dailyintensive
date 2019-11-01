"use strict";
//定义类
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var xiaojiejie = /** @class */ (function () {
    function xiaojiejie(name, age) {
        this.name = name;
        this.age = age;
    }
    xiaojiejie.prototype.say = function () {
        console.log('hai');
    };
    return xiaojiejie;
}());
var jiejie = new xiaojiejie('女js', 18);
console.log(jiejie);
console.log(jiejie.name);
jiejie.say();
// 继承
var xiaojj2 = /** @class */ (function (_super) {
    __extends(xiaojj2, _super);
    function xiaojj2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.skill = '编程';
        return _this;
    }
    return xiaojj2;
}(xiaojiejie));
var nxiaojj = new xiaojj2('nidayed', 20);
console.log(nxiaojj, '继承的');
