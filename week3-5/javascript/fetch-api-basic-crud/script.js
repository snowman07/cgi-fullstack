/*
    Fake Data Api Used within video:
    https://github.com/typicode/jsonplace...
    https://jsonplaceholder.typicode.com/
*/


//=====================
//=== get request (READ)
let urlGet = 'https://jsonplaceholder.typicode.com/posts';
fetch(urlGet)
.then(response =>       //response is the data called from the API server
    response.json())    //.json() returns javascript object and its a promise
.then (data =>          //data is actually the parsed data
    console.log(data));



//=====================
// === post request (CREATE)
let urlPost = 'https://jsonplaceholder.typicode.com/posts';
    //post request has 2 params: url, options
fetch(urlPost, {
    method : "POST",    //method with type POST
    body : JSON.stringify({fakeData : 1}), //post fake data to fake API
    headers : { //kind of data to pass in
        'Content-type' : "application/json"
    }
})
.then(response =>       //response is the data called from the API server
    response.json())    //.json() returns javascript object and its a promise
.then (data =>          //data is actually the parsed data
    console.log(data));




//=====================
// === put request (UPDATE/EDIT)
let urlPut = 'https://jsonplaceholder.typicode.com/posts/1';
    //post request has 2 params: url, options
fetch(urlPut, {
    method : "PUT",    //method with type PUT
    body : JSON.stringify({fakeData : 200, id : 1}), //post fake data to fake API
    headers : { //kind of data to pass in
        'Content-type' : "application/json"
    }
})
.then(response =>       //response is the data called from the API server
    response.json())    //.json() returns javascript object and its a promise
.then (data =>          //data is actually the parsed data
    console.log(data));



//=====================
// === delete request (DELETE)
let urlDelete = 'https://jsonplaceholder.typicode.com/posts/1';
    //post request has 2 params: url, options
fetch(urlDelete, {
    method : "DELETE"    //method with type DELETE
})
.then(response =>       //response is the data called from the API server
    response.json())    //.json() returns javascript object and its a promise
.then (data =>          //data is actually the parsed data
    console.log(data));


