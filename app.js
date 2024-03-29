document.onscroll = function(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("header").style.background = "#fff";
        document.getElementById("header").style.transition = "0.5s";
        document.getElementById("instagram-logo").style.color = "#000";
        document.getElementById("facebook-logo").style.color = "#000";
        document.getElementById("nav-link-1").style.color = "#000";
        document.getElementById("nav-link-2").style.color = "#000";
        document.getElementById("nav-link-3").style.color = "#000";
        document.getElementById("nav-link-4").style.color = "#000";
        document.getElementById("nav-link-5").style.color = "#000";
    } else {
        document.getElementById("header").style.background = "transparent";
        document.getElementById("instagram-logo").style.color = "#fff";
        document.getElementById("facebook-logo").style.color = "#fff";
        document.getElementById("nav-link-1").style.color = "#fff";
        document.getElementById("nav-link-2").style.color = "#fff";
        document.getElementById("nav-link-3").style.color = "#fff";
        document.getElementById("nav-link-4").style.color = "#fff";
        document.getElementById("nav-link-5").style.color = "#fff";
    }
}

var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
    },
});