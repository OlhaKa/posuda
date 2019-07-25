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
    
    // $(window).on("load", "resize", function () {
    //     if ((window.innerWidth) < 992) {
    //         var slinky = $('.nav-menu').slinky({
    //             title: true
    //         });
    //     }
    // })

    var $toggle = $('#toggler-menu');

    $('#main-nav').hcOffcanvasNav({
        maxWidth: 992,
        side: "left",
        labelClose: 'МЕНЮ',
        labelBack: 'НАЗАД',
        customToggle: $toggle,
      });
        

      $(".toggler-search").click(function () {
        $(".header-search").slideToggle();
    });

    $(".toggler-contacts").click(function () {
        $(".header-contacts").slideToggle();
    });

    $('#sort-select').selectpicker({
        width: 'fit'
    });

    $('.filters-btn').click(function () {
        $('.filters-wrap').toggleClass('showed');
    })

});