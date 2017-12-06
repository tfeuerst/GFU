let get = function (url) {

    let hqx = new XMLHttpRequest();
    hqx.open('GET', url);
    hqx.send();
    return new Promise(function (resolve) {
        hqx.onreadystatechange = function () {
            if (hqx.readyState == 4) {
                if (hqx.status == 200) {
                    resolve(hqx.responseText);
                }
            }
        };
    });
};

get('http://httpbin.org/get?test1=1&test2=2')
    .then((daten) => JSON.parse(daten))
    .then((d) => {
        console.log(d);
        console.log(d.args.test1);
        console.log(d.args.test2);
        console.log(d.headers.Pragma);
    });