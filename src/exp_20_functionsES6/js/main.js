(function () {
    'use strict';

    // default-Wert
    // Rest Operator: ...
    let f1 = function (a = 1, ...rest) {
        console.log(a);
        console.log(rest);
    };

    f1(12,35,44,6545);


    let liste = ["A", "B", "C"];

    // Spread
    f1(...liste);


}());

