this.COMPANY = this.COMPANY || {};
this.COMPANY.Person = (function () {
    'use strict';
    // Funktionsausdruck
    var Person = function (fn) { // closure

        var o = Object.create({
            sayName: function () {
                return 'Hi, ich bin ' + this.fullname;
            }
        }, {
            uid: {
                value: Math.ceil(Math.random() * 1e8)
            },
            id: {
                get: function () {
                    return this.uid;
                }
            },
            fullname: {
                value: fn
            },
            projects: {
                value: []
            }
        });

        return o;
    };

    console.dir(Person);

    return Person;
}());