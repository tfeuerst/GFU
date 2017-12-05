this.COMPANY = this.COMPANY || {};
this.COMPANY.Person = (function () {
    //'use strict';
    // Funktionsausdruck
    var Person = function (fn) { // closure

        // private
        var uid = Math.ceil(Math.random() * 1e8);

        Object.defineProperties(this, {
            id : {
                get: function () {
                    return uid;
                },
                set: function () {
                    throw 'not allowed';
                }
            },
            fullname : {
                value: fn
            },
            projects: {
                value: []
            }
        });

        Object.seal();
    };

    Object.defineProperties(Person.prototype, {
        sayName: {
            value: function () {
                return 'Hi, ich bin ' + this.fullname;
            }
        }
    });

    Object.freeze(Person.prototype);

    // static
    Object.defineProperties(Person, {
        isPerson : {
            value: function (p) {
                return p.constructor === this;
            }
        }
    });

    Object.freeze(Person);

    return Person;
}());