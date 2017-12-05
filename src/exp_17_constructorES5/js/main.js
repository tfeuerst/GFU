(function () {
    'use strict';

    var p1 = new COMPANY.Person('Hans Mayer');
    console.log(p1.projects);
    console.log(COMPANY.Person.isPerson(p1));

    console.log(p1.id);

    p1.projects.push(new COMPANY.Project('neuesProjekt'));
    console.log(p1.projects);
}());