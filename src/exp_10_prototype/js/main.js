var l = new Array();

console.dir(Array);
console.dir(l.push === Array.prototype.push);

var Regal = function () {

};

console.log(Regal.prototype.constructor === Regal);

// Erweiterung des Prototyps
Regal.prototype.farbe = 'creme';
Regal.prototype.faecher = [1,2,3,4];


console.log(Regal.prototype);

console.dir(Regal);

var meinRegal = new Regal();
var meinRegalKeller = new Regal();
console.log(meinRegal.farbe);

meinRegal.farbe = 'blau';

console.log(meinRegal);
delete meinRegal.farbe;
console.log(meinRegal.farbe);
console.log(meinRegalKeller.farbe);

console.log(meinRegal.faecher);
meinRegal.faecher.push(5);
console.log(meinRegal.faecher);
console.log(meinRegalKeller.faecher);