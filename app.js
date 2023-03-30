let cart = document.getElementById("cart-icon");
let addtoCartbutton = document.getElementById("add-to-cart");
let thankYou=document.getElementById("thankyou");
let shoppingwithUs=document.getElementById("for-shooping-with-us");
let checkoutmore = document.getElementById("check-out-more");

function moveCart(){
    cart.style.transform="translateX(130px)";
    cart.style.animation="move 2s ease-in";

    thankYou.style.display="block";
    thankYou.style.animation="messagemove 3s ease-in";
    thankYou.style.animationDelay="1s";

    shoppingwithUs.style.display="block";
    shoppingwithUs.style.animation="messagemove 3s ease-in";
    shoppingwithUs.style.animationDelay="3s";

    addtoCartbutton.style.width="0px";
    addtoCartbutton.style.transition="4s ease-in-out"
    addtoCartbutton.style.transitionDelay="3.2s"

    checkoutmore.style.display="block";
    /*checkoutmore.style.transform="translateY(70px)";
    checkoutmore.style.transition="2s ease-in";
    checkoutmore.style.transitionDelay="7s"; */
}