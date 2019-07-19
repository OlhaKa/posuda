$(document).ready(function(){
    $(".home-banners").slick({
        slidesToShow: 1,
        infinite: true,
        nextArrow: '<i class="fas fa-chevron-right"></i></i>',
        prevArrow: '<i class="fas fa-chevron-left"></i></i>',
    });

    $(".home-brands").slick({
        slidesToShow: 1,
        infinite: true,
        nextArrow: '<i class="fas fa-chevron-right"></i></i>',
        prevArrow: '<i class="fas fa-chevron-left"></i></i>',
    });
    
    $(window).on("load", "scroll", function () {
        if ((window.innerWidth) < 992) {
            var slinky = $('.nav-menu').slinky({
                title: true
            });
        }
    })
});