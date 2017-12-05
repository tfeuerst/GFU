// data types
// number string boolean undefined
var n1 = 1123;
var n2 = 0xA3;
var n3 = 34e10;
var n4 = 34e10;

var n5 = 'Cake' / 8;
console.log(n5, typeof n5);

var input = '1234';
var numberX = parseInt(input, 8);
console.log(numberX, typeof numberX);

console.log(0.1 + 0.2);

var n6 = 0;
var n7 = n6++; // checkt keiner
console.log(n6, n7); // 1 0

// besser so:
var n8 = 0;
var n9 = n8;
n8 += 1;

console.log(n8, n9); // 1 0

// string
var s1 = 'Text';
var s2 = 'Text'; // besser

/*
var s3 = `Multiline
    ${n8}
Text`;
*/

console.log(s1, s2);

var s4 = '3';
var s5 = s4 * 2; // nein

console.log(s5);

console.log(33409.39.toLocaleString('de-CH'));

// boolean
// === !==  > < <= >= (diese nie: != ==)
// && || ! ()

var r1 = 2 === '2';
var r2 = 2 == '2';
console.log(r1, r2);

var value = 0 || 2;

console.log(value);

// undefined
var x;
console.log(x, typeof x);

function compute(x,y) {
    if(x === void 0) {
        throw new TypeError('Das muss anders werden');
    }
}
//compute();

// object
var o1 = new Array();
console.log(o1.constructor, typeof o1);

var o2 = null;
console.log(o2, typeof o2);


//  function
function sum () {
}

console.dir(sum);
console.dir(typeof sum);

var foo = new Function('alert(\'ok...\');');
//foo();

console.log(typeof foo);

// Wichtig: Kein implizites Casten