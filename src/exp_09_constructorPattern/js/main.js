(function () {
    'use strict';

    var p1 = new COMPANY.Person('Hans Mayer');
    console.log(p1);
    console.log(COMPANY.Person.isPerson(p1));
    console.log(p1.getUid());
    p1.projects.push(new COMPANY.Project('Neues Projekt 01'));
    console.log(p1);
}());