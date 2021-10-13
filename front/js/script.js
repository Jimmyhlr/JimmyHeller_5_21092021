//          ********** FETCH ASYNCHRONE **********

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
  let productDisplay = "<div>";
  productList.forEach(function(product) {
    productDisplay += '<a href="">' //REMPLACER PAR : '<a href="' + product page link + '">'
    + '<article>'
    + '<img src="' + product.imageUrl + '" alt="Lorem ipsum dolor sit amet, Kanap name1">'
    + '<h3 class="productName">' + product.name + '</h3>'
    + '<p class="productDescription">' + product.description + '</p>'
    + '</article>'
    + '</a>';
  });
  document.getElementById("items").innerHTML = productDisplay + "</div>";
}

catchProducts().catch(error => {
  console.log("Oh no! An error has been detected! :(");
  console.error(error);
});