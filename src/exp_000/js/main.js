console.log('00');(function () {
    'use strict';

    // Factory
    function productFactory(t, p) {

        // security
        if (typeof t !== 'string' || typeof p !== 'number') {
            throw new TypeError();
        }

        var o = Object.create({
            makeLabel: function () {
                return ' € ' + this.price;
            }
        }, {
            price: {
                value: p
            },
            title: {
                value: t
            }
        });

        Object.seal(o);
        return o;

    }

    var p1 = productFactory('Glas', 3.50);
    var p2 = productFactory('Vase', 50);

    console.log(p1, p2);

    console.log(p1.constructor === Object);

}());

