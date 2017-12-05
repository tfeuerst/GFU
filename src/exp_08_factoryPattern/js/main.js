(function () {
    'use strict';

    // Factory
    function productFactory(t, p) {
        var o; // Declaration => undefined

        // security
        if (typeof t !== 'string' || typeof p !== 'number') {
            throw new TypeError();
        }

        // object literal notation
        o = {
            price: p,
            title: t
        };

        return o;
    }

    var p1 = productFactory('Glas', 3.50);
    var p2 = productFactory('Vase', 50);

    console.log(p1, p2);

    console.log(p1.constructor === Object);

}());

