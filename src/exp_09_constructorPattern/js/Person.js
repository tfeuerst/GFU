this.COMPANY = this.COMPANY || {};
this.COMPANY.Person = (function () {
    //'use strict';
    // Funktionsausdruck
    var Person = function (fn) {

        //Private
        var uid = Math.ceil(Math.random() * 1e8);

        // ES3 Property
        this.fullname = fn;

        // member has-a-relation
        this.projects = []

        this.getUid = function () {
            return uid;
        };

    };

    Person.isPerson = function (p) {
        return p.constructor === this;
    }
    console.dir(Person);

    return Person;
}());