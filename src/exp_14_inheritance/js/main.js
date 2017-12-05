var Product = (function () {
    'use strict';

    function Product(p, t) {
        this.price = p;
        this.title = t;
    }

    return Product;
}());

var Clothing = (function () {
    'use strict';


    function Clothing(p, t, s) {
        // Constructor stealing
        Product.call(this, p, t);

        this.size = s;
    }

    return Clothing;
}());

var k1 = new Clothing(28, 'T-Shirt', 'XL');

console.log(k1);
