class Product {

    // Properties
    constructor(p = 0) {
        this.price = p;
        this.test1 = 'leer';

        Reflect.defineProperty(this, 'privateID', {
            value: '2309480',
            enumerable: false
        });
    }

    makeLabel () {
        return `€ ${this.price}`;
    }

    get id () {
        return this.privateID;
    }
    set test1 (b) {
        this.test = b + ' ueber getter';
    }
    get test1 () {
        return this.test;
    }
}

let p1 = new Product();
console.log(p1);
//Product();

console.log(p1.makeLabel());
console.log(p1.id);

let keys = Reflect.ownKeys(p1);
for(let key of keys) {
    console.log(key);
}

for(let key in p1) {
    console.log(key);
}

console.log(p1.test1);
p1.test1 = 45678;
p1.price = 33.58;
console.log(p1.test1);
console.log(p1.price);
// private ist read-only
p1.privateID = 123456;
console.log(p1.privateID);