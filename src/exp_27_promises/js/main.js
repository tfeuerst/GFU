var p1 = new Promise(function (resolve) {

    // async
    setTimeout(function () {
        resolve(JSON.stringify({a: 2}));
    }, 2000);
});

p1
    .then(function () {
        return new Promise(function (resolve) {
            resolve('aha');
        });
    })
    .then(function (datenObj) {
        console.log(datenObj);
    });


var onEvent = function (type, target) {
    return new Promise(function (resolve) {
        target.addEventListener(type, resolve);
    });
};

onEvent('click', document)
    .then(function (e) {
        console.log(e);

    });
