(function () {
    'use strict';

    function P () {
        this.a = 1;
        this.b = 2;
    }

    P.prototype.c = 3;
    let o = new P();

    // ES5
    let keys = Object.keys(o);
    keys.forEach(function (key) {
        console.log(key, o[key]);
    });

    // ES3
    for(let key in o) {
        // ES3 oder 5
        if(o.hasOwnProperty(key)) {
            console.log(key, o[key]);
        }
    }

    let list = [2,3,5];

    // ES6
    for(let entry of list) {
        console.log(entry);
    }

    let prop = 234;
    let propertyName = 'color';
    let o2 = {
        [propertyName]: 'blue',
        prop, // ES6
        say() {
            console.log(this.prop);
        },
        get id () {
            return '0239480923489';
        }
    };

    console.log(o2);
    o2.say();

    console.log(o2.id);
}());
