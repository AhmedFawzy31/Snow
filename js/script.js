/*global $, alert, console*/
function changeNav() {
    'use strict';
    var currentScroll = $(document).scrollTop();
    if (currentScroll > 50) {
        $("nav").css("background-color", "white");
        $("nav .logo img").attr("src", "images/logoblack.svg");
        $("nav ul a").css("color", "#7e7e7e");
        $("nav").css("border-bottom", "1px solid #ddd");
        $("nav ul a").hover(function () {
            $(this).css("color", "black");
        }, function () {
            $(this).css("color", "#7e7e7e");
        });
    } else {
        $("nav").css("background-color", "transparent");
        $("nav .logo img").attr("src", "images/logo.svg");
        $("nav ul a").css("color", "#bfbfbf");
        $("nav").css("border-bottom", "none");
        $("nav ul a").hover(function () {
            $(this).css("color", "#fff");
        }, function () {
            $(this).css("color", "#bfbfbf");
        });
    }
}
$(function () {
    'use strict';
    changeNav();
    $(document).scroll(function () {
        changeNav();
        /* change nav color on scroll */
    });
    /* display mobile navigation on click*/
    $(".mbNav").hide();
    $(".navToggle").click(function () {
        $(".mbNav").css("opacity", "1").fadeToggle();
        $(this).toggleClass("fa-bars").toggleClass("fa-times active");
        if ($(this).hasClass("active")) {
            $("nav .logo img").attr("src", "images/logo.svg");
        } else {
            changeNav();
        }
        var delay = 0; /* animation delay */
        $(".mbNav").children().each(function () {
            delay = delay + 75; /* set animation delay for mobile navigation items */
            $(this).css("animation-delay", delay + "ms");
        }).addClass("animated fadeInDown");
    });
    /* animate gallery caption on hover */
    $(".gallery > div .caption").hover(function () {
        $(this).children().addClass("animated fadeInUp");
    }, function () {
        $(this).children().addClass("animated fadeInUp");
        $(this).children().removeClass("animated fadeInUp");
    });
    /* initiate sliders */
    $('.testimonials').bxSlider();
    $('.clients').bxSlider({
        maxSlides: 5,
        slideWidth: 200,
        slideMargin: 30,
        moveSlides: 1,
        pager: false
    });
    $('.blog').bxSlider({
        maxSlides: 3,
        slideWidth: 365,
        slideMargin: 30,
        moveSlides: 1
    });
});