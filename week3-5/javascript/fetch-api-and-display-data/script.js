// fetch() method: It is defined on the window object,
//      which we can use to perform request.
//      This method will return promise.
//      Promise will either be fulfilled or rejected.


let url = 'https://fakestoreapi.com/products';
fetch(url)
.then(response => response.json())
.then(data => {
    //console.log(data[2]); //this will display the object
    // console.log(data[2].title);
    // document.getElementById('root').innerHTML = data[2].title;

    let.data1 = "";
    data.map(values => {
        data1 = 
        `<div class="card">
            <h1 class="title">${values.title}</h1>
            <img src=${values.image} alt="img">
            <p>${values.description}</p>
            <p class="category">${values.category}</p>
            <p class="price">${values.price}</p>
        </div>`;
    });
    document.getElementById("cards").innerHTML = data1;
})
.catch(error => console.log(error));

