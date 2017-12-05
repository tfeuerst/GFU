this.COMPANY = this.COMPANY || {};
this.COMPANY.Person = (function () {
    //'use strict';
    // Funktionsausdruck
    var Person = function (fn) {
        this.fullname = fn;
    };

    Person.isPerson = function (p) {
        return p.constructor === this;
    }
    console.dir(Person);

    return Person;
}());