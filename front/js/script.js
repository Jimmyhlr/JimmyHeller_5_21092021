//          ********** FETCH ASYNCHRONE **********

/*

const options = {
	method: "GET",
	"Content-Type": "application/json",
}


fetch("https://picsum.photos/v2/list?page=2&limit=100", options).then(function (response) {
	return response.json();
}).then(function (data) {
	console.log(data);
	data.forEach(function (objet) {
		const newImg = document.createElement("img");
		newImg.src = objet.download_url;
		newImg.alt = objet.author;
		newImg.className = "w-32 inline-block"
		listPicture.appendChild(newImg);
	});
}).catch(function (error) {
	console.error(error);
});



const insertProduct = document.getElementById("items");

const options = {
	method: "GET",
	"Content-Type": "application/json",
}

fetch("http://localhost:3000/api/products", options).then(function (response) {
	return response.json();
}).then(function (products) {
	console.table(products);
	products.forEach(function (objet) {
		const items = document.createElement("items");
		items._id = objet.download_url;
		items.name = objet.author;
    items.price = objet.author;
		items.imageUrl = objet.author;
		items.description = objet.author;
		items.altTxt = objet.author;

		items.className = "w-32 inline-block"
		insertProduct.appendChild(items);
	});
}).catch(function (error) {
	console.error(error);
});

*/


const options = {
	method: "GET",
	"Content-Type": "application/json",
}

async function catchProducts() {
  //JSON DATA RETRIEVAL
  const response = await fetch("http://localhost:3000/api/products", options);
  const productList = await response.json();
  console.table(productList);
  //PRODUCT DISPLAY
  let productDisplay = "<ul>";
  productList.forEach(function(product) {
    console.log("produit" + product.name);
    productDisplay += "<li>" + product.name + "</li>";
  });
  document.getElementById("items").innerHTML = productDisplay + "</ul>";
}

catchProducts().catch(error => {
  console.log("Oh no! An error has been detected! :(");
  console.error(error);
});


/*


//          ********** FETCH SYNCHRONE **********

fetch("http://localhost:3000/api/products")
  .then(response => {
    return response.json();
  })
  .then(data => {         //**********UTILISER DATA OU RESPONSE??? ***********
    console.log(data);    //**********UTILISER DATA OU RESPONSE??? ***********
  })

forEach(data as product);











/*

class product {
  constructor(colors, _id, name, price, imageUrl, description, altTxt) {
    this.colors = colors;
    this._id = _id;
    this.name = name;
    this.price = price;
    this.imageUrl = imageUrl;
    this.description = description;
    this.altTxt = altTxt;
  }
}

let sinope = new product("Blue", "107fb5b75607497b96722bda5b504926", "Kanap Sinopé", "1849", "http://localhost:3000/images/kanap01.jpeg", "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.", "Photo d'un canapé bleu, deux places")

let productDisplayFrontPage = document.getElementById("items");
productDisplayFrontPage.innerHTML = "<div style=color:blue>Supers produits de notre catalogue</div>";

*/