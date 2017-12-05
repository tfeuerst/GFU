// create an object
var o1,
    o2,
    o3;

o1 = new Object(); // Object ist eine Funktion
o2 = { // object literal notation
    count: 7,
    say: function () {

    },
    subObject : {
        a: 1
    }
};

o2.color = 'blue';

console.dir(o2);

// Wrapper Types
var s1 = "Text";
console.dir(s1.constructor);
console.log(s1.length);
console.log(typeof s1);

// object - Konkretes Objekt
// class - classification - Gattung
// instance - Ausprägung / Exemplar
// method - Möglichkeit
// member - Mitglied / Teil von
// private
// property - Eigenschaft
// status - status
// inheritance

// static -