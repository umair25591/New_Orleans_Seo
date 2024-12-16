/** @format */

(function ($) {
	'use strict';

        //*============ background image js ==============*/
    $('[data-bg-img]').each(function () {
        var bg = $(this).data('bg-img');
        $(this).css({
            background: 'no-repeat center 0/cover url(' + bg + ')',
        });
    });

    // background color js
    $('[data-bg-color]').each(function () {
        var bgcolor = $(this).data('bg-color');
        $(this).css({
            'background-color': bgcolor,
        });
    });

    // Nav Bar Fix
    function navbarFixed() {
        if ($('.header_aria').length) {
            $(window).scroll(function () {
                var scroll = $(window).scrollTop();
                if (scroll) {
                    $('.header_aria').addClass('navbar_fixed');
                } else {
                    $('.header_aria').removeClass('navbar_fixed');
                }
            });
        }
    }
    navbarFixed();

    function menu_dropdown() {
        if ($(window).width() < 992) {
            $('.navbar-nav > li .mobile_dropdown_icon').on('click', function (event) {
                event.preventDefault();
                $(this).parent().find('.dropdown-menu').first().slideToggle(700);
                $(this).parent().siblings().find('.dropdown-menu').slideUp(700);
            });
        }
    }
    menu_dropdown();

    //   Magnific Popup
    $(document).ready(function () {
        $('.popup_btn').magnificPopup({
            type: 'iframe',
        });
    });


    //	  Slick js

    $('.min_team_area').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        speed: 300,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.min_testimonial_area').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        speed: 300,
        prevArrow:
                '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
            nextArrow:
                '<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
    });
    $('.testimonial_style_two_area').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: false,
        arrows: true,
        speed: 300,
        prevArrow:
                '<button type="button" class="slick-prev"><i class="fa-solid fa-angle-left"></i></button>',
            nextArrow:
                '<button type="button" class="slick-next"><i class="fa-solid fa-angle-right"></i></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    }
            }
        ]
    });
    $('.min_blog_area').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        speed: 300,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.min_blog_area_col_3').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        speed: 300,
        responsive: [
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 2,
                    }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 1,
                    }
            }
        ]
    });
    $('.min_shop_area').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: true,
        arrows: false,
        speed: 300,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.min_project_slider_area').slick({
        autoplay: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        speed: 300,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.min_project_slider_two_area').slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        autoplay: true,
        infinite: true,
        centerMode: true,
        centerPadding: '495px',
        arrows: false,
        dots: false,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    centerPadding: '100px',
                }
            },
            {
                breakpoint: 500,
                settings: {
                    centerPadding: '0',
                }
            }
        ]
    });
    $('.line_item').slick({
        speed: 8000,
        autoplay: true,
        autoplaySpeed: 1000,
        centerMode: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        infinite: true,
        initialSlide: 1,
        arrows: false,
        buttons: false,
    });

    // Counter js
        
    function counterUp() {
        if ($('.counter').length) {
            $('.counter').counterUp({
                delay: 1,
                time: 500,
            });
        }
    }

    counterUp();

    // wow js
    function bodyScrollAnimation() {
        var scrollAnimate = $('body').data('scroll-animation');
        if (scrollAnimate === true) {
            new WOW({}).init();
        }
    }
    bodyScrollAnimation();

    //    Progress-bar....//
    $('.single_items').each(function () {
        $(this).waypoint(
            function () {
                var progressBar = $('.progress-bar');
                progressBar.each(function (indx) {
                    $(this).css('width', $(this).attr('aria-valuenow') + '%');
                });
            },
            {
                triggerOnce: true,
                offset: 'bottom-in-view',
            }
        );
    });


    // Magnitic Hover
    let mm = new MagnetMouse({
        magnet: {
        element: '.popup_btn'
        }
    });
    
    mm.init();

    // Jqueray Ui 
    $( function() {
        $( "#slider-range" ).slider({
        range: true,
        min: 0,
        max: 500,
        values: [ 75, 300 ],
        slide: function( event, ui ) {
            $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
        }
        });
        $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
        " - $" + $( "#slider-range" ).slider( "values", 1 ) );
    } );

    //Product Details Slider 
    $('.slider_one').slick({
        infinite: false,
        autoplay: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider_nav',
    });

    $('.slider_nav').slick({
        infinite: true,
        autoplay: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider_one',
        dots: true,
        centerMode: true,
        focusOnSelect: true,
    });

})(jQuery);
