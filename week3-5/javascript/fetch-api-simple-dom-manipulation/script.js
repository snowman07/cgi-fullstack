const cat_btn = document.getElementById('cat_btn');
const dog_btn = document.getElementById('dog_btn');
const cat_result = document.getElementById('cat_result');
const dog_result = document.getElementById('dog_result');

//There are 2 ways to use 'click' eventListener:
//      1. Declare the addEventListener click in js file
//      2. Add the 'onclick' event in html file
//cat_btn.addEventListener('click', getRandomCat);
//dog_btn.addEventListener('click', getRandomDog);

function getRandomCat() {
    let urlCat = 'https://aws.random.cat/meow';
	fetch(urlCat)
		.then(res => res.json())
		.then(data => {
			cat_result.innerHTML = `<img src=${data.file} alt="cat" />`
		});
}

function getRandomDog() {
    let urlDog = 'https://random.dog/woof.json'
	fetch(urlDog)
		.then(res => res.json())
		.then(data => {
			if(data.url.includes('.mp4')) {
				getRandomDog();
			}
			else {
				dog_result.innerHTML = `<img src=${data.url} alt="dog" />`;
			}
		});
}