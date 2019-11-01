
//定义类

class xiaojiejie {
    public name: string;
    protected age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    say() {
        console.log('hai');
    }
}

let jiejie: xiaojiejie = new xiaojiejie('女js', 18);
console.log(jiejie);
console.log(jiejie.name);
jiejie.say();

// 继承

class xiaojj2 extends xiaojiejie{
    public skill:string='编程';
}
let nxiaojj:xiaojj2=new xiaojj2('nidayed',20)
console.log(nxiaojj,'继承的')