function active(){
    document.querySelector(".icon").style.color = "black";
}
const icon1 = document.querySelector(".icon1");
const textbox1 = document.querySelector(".textbox1");
const panelbutton = document.querySelector(".panel button");
const signupButton = document.querySelector(".left-panel button");
const signinButton = document.querySelector(".right-panel button");
const container = document.querySelector(".all");
signupButton.addEventListener("click", function (){
    container.classList.add("sign-up-mode");
})
signinButton.addEventListener("click", function (){
    container.classList.remove("sign-up-mode");
})