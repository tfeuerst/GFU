function Product(p, t) {
    this.price = p;
    this.title = t;
}

function Clothing(p, t, s) {
    // Constructor stealing
    Product.call(this, p, t);

    this.size = s;
}
var k1 = new Clothing(28, 'T-Shirt', 'XL');

console.log(k1);
