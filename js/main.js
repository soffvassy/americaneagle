$(document).ready(function() {
    $('.menu-toggle').click(function () {
        $(".header-bottom").slideToggle();
    });
    $('.owl-carousel').owlCarousel({
        loop:true,
        responsiveClass:true,
        //autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        nav:false,
        dots:false,
        responsive:{
            0:{
                items:1,
            }
        }
    })
});