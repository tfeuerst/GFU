(function () {
    'use strict';

    var p1 = new COMPANY.Person('Hans Mayer');
    p1.projects.push(new COMPANY.Project('neuesProjekt'));
    console.log(p1);
    console.log(p1.sayName());
    console.log(p1.getId());
}());