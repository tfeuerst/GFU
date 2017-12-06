class Produkt {
    constructor(p) {
        this.price = p;
        this.label = 'empty';
    }
    makeLabel () {
        return 'Produkt heißt ' + this.label;
    }
}

class Kleidung extends Produkt {
    constructor(size, p) {
        super(p);
        this.size = size;
    }
}

let k1 = new Kleidung(450, 'L');
console.log(k1);

console.log(k1.makeLabel());