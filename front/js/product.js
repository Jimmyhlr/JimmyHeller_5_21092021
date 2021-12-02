//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const options = {
	method: "GET",
	"Content-Type": "application/json",
}

async function catchProduct(productId) {
  //JSON DATA RETRIEVAL
  const response = await fetch("http://localhost:3000/api/products/" + productId, options);
  let product = await response.json();
  console.log(product);
  //JSON DATA USAGE
      //PRODUCT IMAGE DISPLAY
    let productImageDisplay = '<img src="' + product.imageUrl + '" alt="' + product.altTxt + '">';
    document.getElementById("productImageDisplay").innerHTML = productImageDisplay;
      //PRODUCT NAME DISPLAY
    let productNameDisplay = product.name;
    document.getElementById("title").innerHTML = productNameDisplay;
      //PRODUCT PRICE DISPLAY
    let productPriceDisplay = product.price;
    document.getElementById("price").innerHTML = productPriceDisplay;
      //PRODUCT DESCRIPTION DISPLAY
    let productDescriptionDisplay = product.description;
    document.getElementById("description").innerHTML = productDescriptionDisplay;
      //PRODUCT COLORS DISPLAY
    product.colors.forEach(color => {
      let colors = '<option value="' + color + '">' + color + '</option>';
      document.getElementById("colors").innerHTML += colors;
      console.log(color)
    })
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const search = new URLSearchParams(window.location.search);
const id = search.get("id");

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

//ADD PRODUCT.JSON TO COOKIES - START
var addToCartButton = document.getElementById("addToCart");
addToCartButton.addEventListener("click", addToCookies);

function addToCookies() {
  //---ID---
  const search = new URLSearchParams(window.location.search);
  const id = search.get("id");
  //---COLOR---
  const colorList = document.getElementById('colors');
  const colorChoice = colorList.options[colorList.selectedIndex].text;
  //---QUANTITY---
  const quantityField = document.getElementById('quantity');
  const quantityChoice = quantityField.value;  
  //---JSON---
  var cartJson = {
    "id": id,
    "color": colorChoice,
    "quantity": quantityChoice
  };
  var cartJsonString = JSON.stringify(cartJson);
  //---LOCALSTORAGE---
  localStorage.setItem(id + '.' + colorChoice, cartJsonString);  
}
//ADD PRODUCT.JSON TO COOKIES - END

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

catchProduct(id).catch(error => {
  console.log("Oh no! An error has been detected! :(");
  console.error(error);
});