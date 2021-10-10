//          ********** FETCH ASYNCHRONE **********

async function catchProducts() {
  const response = await fetch("http://localhost:3000/api/products");
  const json = await response.json();
  console.log(json);
  json.forEach((item) => {
    console.log(item)
  })
  document.getElementById("items").textContent = response.json;
}

catchProducts().catch(error => {
  console.log("Oh no! An error has been detected! :(");
  console.error(error);
});

//          ********** FETCH SYNCHRONE **********
/*
fetch("http://localhost:3000/api/products")
  .then(response => {
    return response.json();
  })
  .then(data => {         //**********UTILISER DATA OU RESPONSE??? ***********
    console.log(data);    //**********UTILISER DATA OU RESPONSE??? ***********
  })
*/










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