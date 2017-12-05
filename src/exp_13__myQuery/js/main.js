(function () {
    'use strict';

    $('p')
        .css('background-color', 'yellow')
        .css('color', 'blue')
        .css('font-family', 'Verdana');

    console.log(document.querySelectorAll('p'));
}());