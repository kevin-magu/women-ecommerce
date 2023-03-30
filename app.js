let cart = document.getElementById("cart-icon");
let addtoCartbutton = document.getElementById("add-to-cart");
let addedtoCartMsg= document.getElementById("added-to-cart");
let thankYou=document.getElementById("thankyou");
let shoppingwithUs=document.getElementById("for-shooping-with-us");
function moveCart(){
    cart.style.transform="translateX(130px)";
    cart.style.animation="move 2s ease-in-out";
    addedtoCartMsg.style.display="block";
    addedtoCartMsg.style.animation="messagemove 2s ease-in";
    addedtoCartMsg.style.animationDelay="4s"
    thankYou.style.display="block";
    thankYou.style.animation="messagemove 1s ease-in";
    thankYou.style.animationDelay="3s";
    shoppingwithUs.style.display="block";
    shoppingwithUs.style.animation="messagemove 3s ease-in";
    shoppingwithUs.style.animationDelay="4s";
}