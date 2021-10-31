//          ********** FETCH PRODUCT LIST **********

const options = {
	method: "GET",
	"Content-Type": "application/json",
}

async function catchProducts() {

  //JSON DATA RETRIEVAL
  const response = await fetch("http://localhost:3000/api/products", options);
  const productList = await response.json();
  console.table(productList);
  //JSON DATA USAGE (product display)
  let productDisplay = "<div>";
  productList.forEach(product => {
    productDisplay += '<a href="../html/product.html?id=' + product._id + '" class="productPageLink">'
    + '<article>'
    + '<img src="' + product.imageUrl + '" alt="' + product.altTxt + '">'
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