$(document).ready(function () {
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

        $(window).on("load resize", function (e) {
            changeSelectTitle()
        });

        function changeSelectTitle() {
            if ($(window).width() <= 768) {
                var selectpicker = $("#sort-select");
                selectpicker.selectpicker();
                selectpicker.selectpicker({title: 'СОРТИРОВАТЬ'}).selectpicker('render');
            }
        }

        var counterBox = $('.counterBox');

        $('.filters-btn').click(function () {
            $('.filters-wrap').toggleClass('showed');
            $(this).toggleClass('active');
            if (counterBox.is(":visible")) {
                counterBox.fadeOut();
            } else if ($("input:checked").length && $('.filters-wrap').hasClass('showed')) {
                counterBox.fadeIn();
            }
        })

        function getCounterPosition() {
            $('input[type="checkbox"]').click(function () {

                var counterTop = $(this).offset().top - $(window).scrollTop(),
                    counterLeft = $('.filters-wrap').offset().left + $('.filters-wrap').width() + 11;

                if (counterBox.is(":hidden")) {
                    counterBox.fadeIn();
                }
                counterBox.css({top: counterTop - 60, left: counterLeft});
            })
        }

        getCounterPosition();


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
            $(".header-contacts-wrap").slideToggle();
        });

        $('#sort-select').selectpicker({
            width: 'fit'
        });


    }
);