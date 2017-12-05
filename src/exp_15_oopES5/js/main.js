'use strict';

var o = {
    a: 1,
    c: Object.freeze([4, 5, 3])
};

//ES5
console.dir(Object);
Object.seal(o);
//o.b = 2;

console.log(o);
o.a = 'neu';

console.log(o);
Object.freeze(o);

//o.a = 'AHA';

//o.c.push(9);
//o.c = 'neu';
console.log(o);

var o1 = {
    a: 1
};

Object.defineProperties(o1, {
    color: {
        value: 'red',
        writeable: false,
        configurable: false,
        enumerable: false
    },
    id : {
        get: function () {
            return 1;
        },
        set: function (n) {
            this.a = n;
        }
    }
});

console.log(o1);

//delete o1.color;

var o2 = Object.create({
    makeLabel: function () {
        return this.price.toLocaleString('de-DE') + ' €';
    }
}, {
    price: {
        value: 200.98
    }
});

console.log(o2);
console.log(o2.makeLabel());