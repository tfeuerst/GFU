// Scope
var v1 = 123; // global

var v6 = [4, 23, 34];
var v5 = f1(
    // by value
    'test',

    // by reference
    v6
);

function f1(v3, v7) {

    var v4 = 234; // lokal

    console.log(v3); // lokal
    // Durchgriff auf den höheren
    // Sichtbarkeitsbereich
    console.log(v1);
    var v1 = 'neu'; // Hoisting

    console.log(v1);

    v2 = 432; // global
    v7.push(23408243);

    return v4;
}


console.log(v2);
console.log(v5);
console.log(v6);


var f2 = function () {
    console.log('ok');
};
f2();

// IIFE
(function () {
    'use strict';
    var a = 1;
    console.log(a);

    // b = 1;
}());
//console.log(b);