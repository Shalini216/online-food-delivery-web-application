addToCartBtn = document.getElementsByClassName("add_cart");

for (let i = 0; i < addToCartBtn.length; i++) {
  addToCartBtn[i].addEventListener("click", updateCart);
}

/*   Update cart function   */

function updateCart(e) {
  clickedaddToCartBtn = e.target;
  productContainer = clickedaddToCartBtn.parentElement;

  // Getting the title, price and image source of clicked item
  productTitle =productContainer.getElementsByClassName("productTitle")[0].innerText;
  productPrice = productContainer.getElementsByClassName("price")[0].innerText;
  productImage = productContainer.getElementsByTagName("img")[0].src;

  //   Preventing from adding same item more than once
  cartTitle = cartContainer.getElementsByClassName("cartTitle");
  for (let i = 0; i < cartTitle.length; i++) {
    if (cartTitle[i].innerText == productTitle) {
      alert("Product has already added to cart");
      return;
    }
  }

  //Calling function for Appending to cart
  AddToCart(productTitle, productPrice, productImage);

  // Update total price after adding item
  updateTotalPrice();
}

cartContainer = document.getElementsByClassName("cartContainer")[0];

/*   Add to cart function   */

function AddToCart(productTitle, productPrice, productImage) {
  console.log("Add to cart function");
  div = document.createElement("div");
  div.classList.add("row");
  divContent = `<div class="cartImagecol"> <img src="${productImage}"> </div>
  <div class="cartTitle">${productTitle}</div>
  <div class="cartPrice"> ${productPrice}</div>
  <button class="removeBtn">Remove</button>`;
  div.innerHTML = divContent;
  cartContainer.appendChild(div);
 

  //  Remove button
  removeButton = document.getElementsByClassName("removeBtn");
  for (let i = 0; i < removeButton.length; i++) {
    removeButton[i].addEventListener("click", removeFromCart);
  }
}

// removeFromCart function
function removeFromCart(e) {
  e.target.parentElement.remove();
  // Update total price after removing item
  updateTotalPrice();
}

// Updating total price function
function updateTotalPrice() {
  cartPrice = cartContainer.getElementsByClassName("cartPrice");
  totalPrice = 0;
  for (let i = 0; i < cartPrice.length; i++) {
    totalPrice =
      totalPrice + parseInt(cartPrice[i].innerText.replace("Rs.", ""));
  }
  cartTotalPrice = document.getElementsByClassName(
    "cartTotalPrice"
  )[0].innerText = new Number(totalPrice).toLocaleString("en");
}
addToCartBtn = document.getElementsByClassName("add_cart");
console.log(addToCartBtn);
for (let i = 0; i < addToCartBtn.length; i++) {
  addToCartBtn[i].addEventListener("click", updateCart);
}


