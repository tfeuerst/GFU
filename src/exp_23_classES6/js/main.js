class Product {

    // Properties
    constructor(p = 0) {
        this.price = p;

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
}

let p1 = new Product();
console.log(p1);
//Product();

console.log(p1.makeLabel());
console.log(p1.id);

var keys = Reflect.ownKeys(p1);
for(let key of keys) {
    console.log(key);
}

for(let key in p1) {
    console.log(key);
}