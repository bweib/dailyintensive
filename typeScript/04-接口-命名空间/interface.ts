//接口

interface nidaye {
    sex: string;
    insterest: string;
    qulang?: Boolean
}
let nnidaye: nidaye = { sex: 'man', insterest: 'ball' };

console.log(nnidaye);



//命名空间


namespace ndy {
    export class dehua {
        public name: string = '刘德华';
    }
}
namespace bajie{
    export class dehua{
        public name:string='马德华'
    }
}
let dehua1:ndy.dehua=new ndy.dehua();
let dehua2:bajie.dehua=new bajie.dehua();
console.log(dehua1);
console.log(dehua2);