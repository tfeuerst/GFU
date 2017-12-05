'use strict';

var o = {
    a : 1,
    c : Object.freeze([4,5,3])
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

o.c.push(9);
//o.c = 'neu';
console.log(o);


