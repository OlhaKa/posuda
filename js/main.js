$(window).on('load', function () {
    $("#preloader").fadeOut("slow");
});

$(document).ready(function () {
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();
        if (scroll > 120) {
            $('.catalog-toggle-block').addClass('fixed fade-in')
        } else {
            $('.catalog-toggle-block').removeClass('fixed fade-in')
        }
    });


    $(".home-banners").slick({
        slidesToShow: 1,
        infinite: true,
        fade: true,
        speed: 1000,
        cssEase: 'ease-in',
        autoplay: true,
        nextArrow: '<i class="fas fa-chevron-right"></i></i>',
        prevArrow: '<i class="fas fa-chevron-left"></i></i>',
    });

    $(".home-brands").slick({
        slidesToShow: 1,
        infinite: true,
        nextArrow: '<i class="fas fa-chevron-right"></i></i>',
        prevArrow: '<i class="fas fa-chevron-left"></i></i>',
    });

    $(".prod-view").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.prod-photos',
        slide: '.prod-view-item'
    });

    $('.prod-photos').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.prod-view',
        focusOnSelect: true,
    });

    var stHeight = $('.prod-photos .slick-track').height();
    $('.prod-photos .slick-slide').css('height', stHeight);

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

    $('body').on('click', function (e) {
        const filtersWrap = $('.filters-wrap'),
            filters = filtersWrap.has(e.target).length === 0,
            filtersBtnWrap = $('.filters-btn');
        filtersBtn = filtersBtnWrap.has(e.target).length === 0;

        if (!filtersWrap.is(e.target)
            && filters
            && !filtersBtnWrap.is(e.target)
            && filtersBtn) {
            filtersWrap.removeClass("showed");
            filtersBtnWrap.removeClass('active');
            $('.counterBox').fadeOut()
        }
    });

    // ---- Basket item counter------
    $('.minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    // --------- ORDER FORM SELECTS--------
    const paymentSelect = $('#payment-select'),
        postOfficeSelect = $('#post-office-select');

    paymentSelect.selectpicker({
        title: "Выберите способ оплаты"
    });
    postOfficeSelect.selectpicker({
        title: "Выберите номер отделения"
    });

    paymentSelect.on('changed.bs.select', function () {
        $('[data-id="payment-select"]').find('.filter-option-inner-inner').addClass('selected')
    });

    postOfficeSelect.change(function (e) {
        $('[data-id="post-office-select"]').find('.filter-option-inner-inner').addClass('selected')
    });
    // --------- ORDER FORM SELECTS END--------

    $('.show-basket-btn').click(function () {
        $('.sidebar-basket').toggleClass('show')
    });


    $('.progress-bar').each(function() {
        let valuenow = $(this).attr("aria-valuenow"),
            valuemax = $(this).attr("aria-valuemax"),
            progressBarWidth = (valuenow / valuemax * 100) + '%';
        $(this).width(progressBarWidth)
    });

    $('.show-reviews').on('click', function (e) {
        $([document.documentElement, document.body]).animate({
            scrollTop: $("#prod-descr").offset().top
        });
        $('#prod-descr a[href="#d"]').tab('show');
    })
});