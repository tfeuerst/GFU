this.COMPANY = this.COMPANY || {};
this.COMPANY.Person = (function () {
    //'use strict';
    // Funktionsausdruck
    var Person = function (fn) { // closure

        // private
        var uid = Math.ceil(Math.random() * 1e8);

        // ES3 Property
        this.fullname = fn;

        this.getId = function () {
            return uid;
        };

        // member has-a-relation
        this.projects = [];
    };

    // Methods in ES3
    Person.prototype.sayName = function () {
        return 'Hi, ich bin ' + this.fullname;
    };

    // static
    Person.isPerson = function (p) {
        console.log('Constructor', p.constructor);
        return p.constructor === this;
    };

    console.dir(Person);

    return Person;
}());