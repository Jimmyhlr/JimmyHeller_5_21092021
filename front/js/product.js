//          ********** FETCH PRODUCT INFORMATIONS **********

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

    /*
    let productColor1Display = '<option value="' + product.colors[0] + '">' + product.colors[0] + '</option>';
    let productColor2Display = '<option value="' + product.colors[1] + '">' + product.colors[1] + '</option>';
    let productColor3Display = '<option value="' + product.colors[2] + '">' + product.colors[2] + '</option>';
    let productColor4Display = '<option value="' + product.colors[3] + '">' + product.colors[3] + '</option>';
    document.getElementById("colors").innerHTML = productColor1Display + productColor2Display + productColor3Display + productColor4Display;
    */

}

const search = new URLSearchParams(window.location.search);
const id = search.get("id");

catchProduct(id).catch(error => {
  console.log("Oh no! An error has been detected! :(");
  console.error(error);
});