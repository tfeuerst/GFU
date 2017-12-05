this.COMPANY = this.COMPANY || {};
this.COMPANY.Project = (function () {
    //'use strict';
    // Funktionsausdruck
    var Project = function (t) { // closure
        this.title = t;
    };


    return Project;
}());