
var f1 = function (daten) {
    console.log(daten);
}
document.addEventListener('click', (function (f1) {

    return function () {
        setTimeout(function () {

            var daten = JSON.stringify({a: 1});

            f1(daten);

        }, 1000);
    };

}(f1)));
