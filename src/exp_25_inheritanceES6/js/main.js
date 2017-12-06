class Produkt {
    constructor(p) {
        this.price = p;
    }
    label () {}
}

class Kleidung extends Produkt {
    constructor(p, size) {
        super(p);
        this.size = size;
    }
}

let k1 = new Kleidung(450, 'L');
console.log(k1);