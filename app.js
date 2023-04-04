let cart = document.getElementById('cart-icon');
let addtoCartbutton = document.getElementById("add-to-cart");
let thankYou=document.getElementById("thankyou");
let shoppingwithUs=document.getElementById("for-shooping-with-us");
let checkoutmore = document.getElementById("check-out");

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
    addtoCartbutton.style.transition="2s ease-in-out";
    addtoCartbutton.style.transitionDelay="4.2s";

    
    /*checkoutmore.style.transform="translateY(70px)";
    checkoutmore.style.transition="2s ease-in";
    checkoutmore.style.transitionDelay="7s"; */
}

let advertvideo = document.querySelector('.advert-video');
let video = advertvideo.querySelector('video');
let text = advertvideo.querySelector('h3');

//scrolling effect
const controller = new ScrollMagic.Controller();
const scene = new ScrollMagic.Scene({
    duration: 55000,
    triggerElement: advertvideo,
    triggerHook: 0
})  
.setPin(advertvideo)
.addIndicators()
.addTo(controller);

//video animation
let accelamount = 0.723906;
let scrollpos = 0;
let delay =0;

scene.on("update", e => {
    scrollpos = e.scrollPos / 1000;
});

setInterval(()=>{
    delay += (scrollpos - delay) * accelamount;

    video.currentTime = delay;
}, 4.166666666666667);

