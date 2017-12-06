// Neue Schlüsselwörter
// kein hoisting
// Block-Scope


{
    let a = 1;
    const b = 2;

    console.log(a, b);

    var c = 3; // Hoisting, kein Block

    {
        console.log(a);
    }
}
let v =3;

console.log(c);

b = 4;
console.log(b);
