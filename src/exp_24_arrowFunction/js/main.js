var f1 = function (a) {
    return a*2;
};

f1(2);

var f2 = (a) => {
    return a*2;
};
f2(3);

var f3 = a => a*2;
f3(3);


function f5 () {
    console.log("ok");
}
document.addEventListener('click', f5);


class Product {
    constructor() {
        this.a = 1;
    }

    doSomething () {

        let f = function () {
            console.log(this);
        }();
//        f();

        let g = () => {
            console.log(this);
            return this.a;
        };
        g();

        console.log(this);

    }
}

let p = new Product();
p.doSomething();