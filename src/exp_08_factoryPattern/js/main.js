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

// Eigene Übung
(function () {
    'use strict';

    function personFactory(n, a) {
        var p;

        if(typeof n !== 'string' || typeof a !== 'number'){
            throw new TypeError();
        }

        p = {
            name: n,
            age: a,
            olderThirty: function () {
                if(this.age > 30){
                    console.log(true);
                    return true;
                }

                console.log(false);
                return false;
            }
        };

        return p;
    }

    var h1 = personFactory('Tom', 43);

    console.log(h1);
    console.log('olderThirty: ' + h1.olderThirty());
}());