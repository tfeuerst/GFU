// console.log(window);

var color = 'green';
console.log(this.color);

function sayColor(p) {
    console.log(p, this.color);
}

sayColor("global");

var obj1 = new Object();
obj1.color = "blue";

obj2 = { // Object literal notation
    color: "red"
};

sayColor.call(obj2, "obj2");
sayColor.apply(obj2, ["obj2 mit apply"]);

obj3 = {
    color: 'yellow',
    sayColor: function (p) {
        console.log(p, this.color);
    }
};

obj3.sayColor("obj3");

var kopie = obj3.sayColor.bind(obj2);
kopie("kopie");

function Person (fn) {
    this.fullname = fn
}

var p1 = new Person("Hans Müller");
console.log(p1);