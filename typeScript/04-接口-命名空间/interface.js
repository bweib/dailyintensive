"use strict";
//接口
var nnidaye = { sex: 'man', insterest: 'ball' };
console.log(nnidaye);
//命名空间
var ndy;
(function (ndy) {
    var dehua = /** @class */ (function () {
        function dehua() {
            this.name = '刘德华';
        }
        return dehua;
    }());
    ndy.dehua = dehua;
})(ndy || (ndy = {}));
var bajie;
(function (bajie) {
    var dehua = /** @class */ (function () {
        function dehua() {
            this.name = '马德华';
        }
        return dehua;
    }());
    bajie.dehua = dehua;
})(bajie || (bajie = {}));
var dehua1 = new ndy.dehua();
var dehua2 = new bajie.dehua();
console.log(dehua1);
console.log(dehua2);
