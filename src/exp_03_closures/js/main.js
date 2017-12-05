(function () {
    'use strict';

    // Closure

    function shop() {
        var basket = []; // private

        return function (item) {
            basket.push(item); // Auslöser
            return basket.slice();
        };
    }

    var addToBasket = shop();

    addToBasket('Haus');
    addToBasket('Haus');
    addToBasket('Haus');
    var erg = addToBasket('Haus');

    console.log(erg);
    erg.push('324234');
    erg = addToBasket('Haus');
    console.log(erg);


}());
