this.$ = (function () {
    'use strict';

    var Q = function (c) {
        this.c = c;
    }

    Q.prototype.css = function (prop, value) {
        this.c.forEach(function (element) {
            element.style[prop] = value;
        });

        return this;
    };

    var $ = function (selector) {
        var collection = document.querySelectorAll(selector);
        console.log(collection);

        return new Q(collection);
    };

    return $;
}());