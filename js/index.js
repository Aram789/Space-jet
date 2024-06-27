$(document).ready(() => {
    let count = 0;
    let activateActiveLink = true;
    // section 4
    if (count < 500) {
        setInterval(function () {
            if (count < 500) {
                count++;
                $('.count').text(count);
            }
        }, 35);
    }
    // ---------------------

    // section 5
    $(".row1 div, .row2 div").mouseover(function () {
        $(this).find('h4').css({
            color: 'yellow',
        })
        $(this).find('img').css({
            transform: 'scale(1.3)',
        })
    });
    $(".row1 div, .row2 div").mouseleave(function () {
        $(this).find('h4').css({
            color: 'white',
        })
        $(this).find('img').css({
            transform: 'scale(1)',
        })
    });
    // ---------------

    $("header nav a").click(function (e) {
        activateActiveLink = false

        $('nav a').removeClass('activeLink');
        $(this).addClass('activeLink');
        setTimeout(function () {
            activateActiveLink = true
        }, 3000)

    });

    $('.lucifer').animate({
        width: '30%'
    }, 700, function () {
    });
    $('.jet_rat').animate({
        width: '30%'
    }, 900, function () {
    });
    $('.scooter').animate({
        width: '20%'
    }, 1100, function () {
    });
    $('.mucki').animate({
        width: '20%'
    }, 1500, function () {
    });
    $('.beast').animate({
        width: '20%'
    }, 1500, function () {
    });
    $('.ape').animate({
        width: '20%'
    }, 1500, function () {
    });


    $(window).scroll(function () {
        setTimeout(() => {
            let scrollPosition = $(this).scrollTop();
            let headerHeight = $('header').height();
            let mans = $('.bg_mans');
            let logo = $('.logo');
            let gradient = $('.gradient');

            logo.stop().animate({
                top: '29px'
            }, 100, 'linear');
            gradient.show()
            if (scrollPosition < headerHeight) {
                logo.stop().animate({
                    top: '-140px'
                }, 100, 'linear');
                gradient.hide()
            }

            if (scrollPosition > headerHeight && scrollPosition < mans.height()) {
                mans.css({
                    top: -scrollPosition
                });
            }

            if (scrollPosition > headerHeight && scrollPosition < 600) {
                let leftValue = -300 + (scrollPosition - 450) * (350 / 150); // Преобразование пропорционально диапазону от -300 до 0

                // Ограничиваем значение leftValue в диапазоне от -300 до 0
                leftValue = Math.max(-300, Math.min(0, leftValue)); // Ограничение значения leftValue

                $('.rate, .rate_sh').css({
                    left: leftValue + 'px',
                });
                $('.rate_sh').hide();

                if (leftValue === 0) {
                    $('.rate_sh').show();
                }
                if (leftValue < -200) {
                    $('.rate, .rate_sh').css({
                        left: '-300px',
                    });
                }
            }

            if (scrollPosition > $('.content3').offset().top -600) {
                $('.pilot-img').stop().animate({
                    top: '-50px',
                }, 400, function () {
                });
                $('.gradient_pilot').stop().animate({
                    height: '700px',
                }, 300, function () {
                });
            }

            if (scrollPosition > $('.content4').offset().top / 0.9) {
                $('.gradient_5').stop().animate({
                    height: '800px',
                }, 300, function () {
                });
                $('.auto-content, .content5 h3, .content5 p').stop().animate({
                    opacity: 1,
                }, 1100, function () {
                });
            }

            if (scrollPosition > $('.content5').offset().top / 0.8) {
                $('.content6-block1').css({
                    opacity: 1,
                })
                $('.content6-block1').addClass('anim-cont8')
                $('.scale').addClass('anim-scale')
            } else {
                $('.content6-block1').removeClass('anim-cont8')
                $('.scale').removeClass('anim-scale')
            }

            $('section').each(function () {
                let top = $(this).offset().top - 300;
                let bottom = top + $(this).outerHeight();

                if (scrollPosition >= top && scrollPosition <= bottom && activateActiveLink) {
                    $('nav a').removeClass('activeLink');
                    $('nav').find('a[data-scroll="' + $(this).attr('id') + '"]').addClass('activeLink');
                }
            });

        }, 100);
    });

// -------------------------fire----------------------------
    $('#fire').fire({
        width: parseInt($(window).width() / 55),
        height: parseInt($(window).width() / 10),
        speed: 60,
        fireTransparency: 900,
        globalTransparency: 11,
        maxPow: 8,
        minPow: 10,
        gravity: 6.5,
        fadingFlameSpeed: 1,
        yOffset: 0,
        mouseEffect: false,
        flameWidth: 0,
        flameHeight: 2,
        plasm: false,
        burnBorders: false,
        maxPowZone: "center",
    });

    $('#fire1').fire({
        width: parseInt($(window).width() / 55),
        height: parseInt($(window).width() / 10),
        speed: 200,
        fireTransparency: 80,
        globalTransparency: 0,
        maxPow: 10,
        minPow: 10,
        gravity: 30,
        fadingFlameSpeed: 0,
        yOffset: 0,
        mouseEffect: false,
        flameWidth: 0,
        flameHeight: 2,
        plasm: false,
        burnBorders: false,
        maxPowZone: "center",
    });
// -------------------------end----------------------------

    $(".owl").addClass('owl-carousel owl-theme');
    $(".owl").owlCarousel({
        responsive: {
            0: {
                items: 1,
                autoplay: true,
                autoplayTimeout: 10000,
                autoplaySpeed: 1500,
                dot: true,
                loop: false
            },
            768: {
                items: 1,
                autoplay: true,
                autoplayTimeout: 10000,
                autoplaySpeed: 1500,
                dot: true,
                loop: false
            },
            1024: {
                items: 1,
                autoplay: true,
                autoplayTimeout: 10000,
                autoplaySpeed: 1500,
                dot: true,
                loop: false
            }
        }
    });
    $(".open_form").hide();
    $(".open_i").click(function () {
        $(".open_form").slideToggle("slow", function () {
            // Animation complete.
        });
    });

    $(".open_form2").hide();
    $(".open_i2").click(function () {
        $(".open_form2").slideToggle("slow", function () {
            // Animation complete.
        });
    });
});