// combination inheritance
var Product = (function () {
    'use strict';

    function Product(p, t) {
        this.price = p;
        this.title = t;
    }

    Product.prototype.makelLabel = function () {
        return 'Neu: ' + this.title + ' nur €' + this.price;
    };

    return Product;
}());

var Clothing = (function () {
    'use strict';

    function Clothing(p, t, s) {
        // Constructor stealing
        Product.call(this, p, t);

        this.size = s;
    }

    // Prototypal inheritance
    Clothing.prototype = Object.create(Product.prototype, {
        constructor: {
            value: Clothing
        },
        fits: {
            value:  function (s) {
                return this.size === s;
            }
        }
    });

    return Clothing;
}());

var k1 = new Clothing(28, 'T-Shirt', 'XL');

console.log(k1);
var p1 = new Product(200, 'Baum');

console.log(k1.makelLabel());
