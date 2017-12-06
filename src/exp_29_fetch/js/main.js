let r = new Request('http://httpbin.org/get', {
    method: 'GET'
});

fetch(r)
    .then(res => res.json())
//    .then(d => console.log(d));
    .then(function(d){
        console.log(d);
    })
