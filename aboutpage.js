const searchContainer = document.querySelector(".search-icon");
const searchI = document.querySelector(".search-icon i");
const searchInput = document.querySelector(".search-icon input");


const arrowup = document.querySelector(".arrowup");
const socialIconsContainer = document.querySelector(".socialicons-container");
arrowup.addEventListener("click", function (){
    arrowup.classList.add("goback");
    socialIconsContainer.classList.add("visible-icons");
})
const arrowdown = document.querySelector(".arrowdown");
arrowdown.addEventListener("click", function (){
    arrowup.classList.remove("goback");
    socialIconsContainer.classList.remove("visible-icons");
})