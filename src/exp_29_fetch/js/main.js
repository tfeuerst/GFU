fetch('http://httpbin.org/get', {
    method: 'GET'
})
    .then(function (daten) {
        console.log(daten);
    });