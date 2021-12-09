//////////////////// CART ////////////////////

async function catchProducts(productId) {
    let productDisplay = '';
    Object.keys(localStorage).forEach(async function (key) {
        var getProductJson = JSON.parse(window.localStorage.getItem(key));
        //--------------------
        const options = {
            method: "GET",
            "Content-Type": "application/json",
        }
        const response = await fetch("http://localhost:3000/api/products/" + getProductJson.id, options);
        let product = await response.json();
        console.log(product)           
        //--------------------
        productDisplay = '<article class="cart__item" id="' + getProductJson.id +'">'
        + '<div class="cart__item__img">'
        + '<img src="' + product.imageUrl + '" alt="' + product.txtAlt + '">'
        + '</div>'
        + '<div class="cart__item__content">'
        + '<div class="cart__item__content__titlePrice">'
        + '<h2>' + product.name + '</h2>'
        + '<p>' + product.price + '</p>'
        + '</div>'
        + '<div class="cart__item__content__settings__quantity">'
        + '<p>Qté : </p>'
        + '<input type="number" class="itemQuantity" id="' + key + 'Quantity" name="itemQuantity" min="1" max="100" value="' + getProductJson.quantity + '" onchange="updateQuantity(\'' + key + '\')">'
        + '</div>'
        + '<p>Couleur : ' + getProductJson.color + '</p>'
        + '<div class="cart__item__content__settings__delete">'
        + '<p class="deleteItem" id="' + key + '" onclick="deleteFromCart(id)">Supprimer</p>'
        + '</div>'
        + '</div>'
        + '</div>'
        + "</article>";
        document.getElementById("cart__items").innerHTML += productDisplay;
        //--------------------

        //--------------------
        var totalQuantity = document.getElementById('totalQuantity');
        var totalPrice = document.getElementById('totalPrice');
        totalQuantity2 += parseInt(getProductJson.quantity);
        totalPrice2 += parseInt(product.price)*totalQuantity2;
        totalPrice.innerHTML = totalPrice2;
        totalQuantity.innerHTML = totalQuantity2;
        //--------------------
        });
    }

//--------------------TOTAL PRICE/QUANTITY--------------------
let totalPrice2 = 0;
let totalQuantity2 = 0;

//--------------------REMOVE ITEM FROM CART-------------------
function deleteFromCart(key) {
    localStorage.removeItem(key);
    document.location.reload();
    console.log(key); //Retourne productId.productColor
}

//--------------------UPDATE ITEM QUANTITY--------------------
function updateQuantity(key) {
    const panier = JSON.parse(localStorage.getItem(key));
    console.log(key); //Retourne productId
    const id = panier.id;
    const color = panier.color;
    quantityChoice = document.getElementById(key + 'Quantity');
    const quantity = quantityChoice.value;
    var newProductQuantity = {
        "id": id,
        "color": color,
        "quantity": quantity,
    }
    var newProductJson = JSON.stringify(newProductQuantity);
    localStorage.setItem(key, newProductJson)
    console.log(newProductJson)
    document.location.reload();
}

//--------------------CATCH CART FUNCTION--------------------
catchProducts().catch(error => {
    console.log("Oh no! An error has been detected! :(");
    console.error(error);
    });


//////////////////// FORM ////////////////////

const orderButton = document.getElementById('orderButton');
async function order() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let address = document.getElementById("address").value;
    let city = document.getElementById("city").value;
    let email = document.getElementById("email").value;
    const contact = {firstName, lastName, address, city, email}
    console.log(contact);
    var products = [];
    Object.keys(localStorage).forEach(async function (key) {
        var getProductJson = JSON.parse(window.localStorage.getItem(key));
        var getProductId = getProductJson.id;
        products.push(getProductId);        
    })
    console.log(products);
    createOrder(contact, products)
}

function createOrder(contact, products) {
    fetch("http://localhost:3000/api/products/order", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ contact, products }),
        })
          .then(function (res) {
            if (res.ok) {
              return res.json();
            }
          })
          .then(function (order) {
            console.log(order);
            window.location.replace("./confirmation.html?orderId=" + order.orderId);
          })
          .catch(function (err) {
            console.error(err);
          });
}

orderButton.addEventListener('click', order);