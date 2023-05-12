const arrowup = document.querySelector(".arrowup");
const socialIconsContainer = document.querySelector(".socialicons-container");
arrowup.addEventListener("click", function () {
  arrowup.classList.add("goback");
  socialIconsContainer.classList.add("visible-icons");
});
const arrowdown = document.querySelector(".arrowdown");
arrowdown.addEventListener("click", function () {
  arrowup.classList.remove("goback");
  socialIconsContainer.classList.remove("visible-icons");
});

const add_to_cart = document.querySelector(
  ".featured-products .product .content .cart"
);
add_to_cart.addEventListener("click", function () {
  alert("Added to cart");
});
