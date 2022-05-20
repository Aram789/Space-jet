let count = 0;


if (count < 500) {
    setInterval(function () {
        if (count < 500) {
            count++;
            $('.count').text(count);
        }
    }, 35);
}
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


$(function () {
    $("header nav a").click(function () {
        // remove classes from all
        $("header nav a").removeClass("active");
        // add class to the one we clicked
        $(this).addClass("active");
    });
});


$('.logo').animate({
    top: -100
}, 1, function () {
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
    var y = $(window).scrollTop();
    console.log(y)
    if (y > 50 && y < 70) {
        $('.logo').animate({
            top: 0
        }, function () {
        });
        $('.gradient').css({
            height: '1000px',
            background: 'rgba(0, 0, 0, 0.4)',
            width: '100%',
        });
    }
    if (y == 0) {
        $('.logo').animate({
            top: -100
        }, function () {
        });
        $('.gradient').css({
            height: '0%',
            background: 'rgba(0, 0, 0, 0.0)',
        });
    }
    if (y > 100 && y < 900) {
        $('.bg_mans').css({
            top: -y
        });
    }
    if (y > 450 && y < 600) {
        $('.rate, .rate_sh').css({
            left: 2*y - 1200,
        });
    }

    if (y > $('.content3').height()) {
        $('.pilot-img').animate({
            top: '-50px',
        }, 700, function () {
        });
        $('.gradient_pilot').animate({
            height: '700px',
        }, 300, function () {
        });
    }

    if (y > $('.content4').offset().top / 0.8) {
        $('.gradient_5').animate({
            height: '800px',
        }, 300, function () {
        });
        $('.auto-content, .content5 h3, .content5 p').animate({
            opacity: 1,
        }, 1100, function () {
        });
    }
    if (y > $('.content5').offset().top / 0.8) {
        $('.content6-block1').css({
            opacity: 1,
        })
        $('.content6-block1').addClass('anim-cont8')
        $('.scale').addClass('anim-scale')
    } else {
        $('.content6-block1').removeClass('anim-cont8')
        $('.scale').removeClass('anim-scale')
    }
    //--------------nav------------------

    if (y > 0) {
        $('.Start').addClass('activ')
    }
    if (y > $('.content3').offset().top - 5) {
        $('.Start').removeClass('activ')
        $('.Die_Show').addClass('activ')
    } else {
        $('.Die_Show').removeClass('activ')
    }
    if (y > $('.content4').offset().top - 5) {
        $('.Die_Show').removeClass('activ')
        $('.Die_Fahrzeuge').addClass('activ')
    } else {
        $('.Die_Fahrzeuge').removeClass('activ')
    }
    if (y > $('.content5').offset().top - 5) {
        $('.Die_Fahrzeuge').removeClass('activ')
        $('.Besucher').addClass('activ')
    } else {
        $('.Besucher').removeClass('activ')
    }
    if (y > $('.content6').offset().top - 5) {
        $('.Besucher').removeClass('activ')
        $('.Paket_Preis').addClass('activ')
    } else {
        $('.Paket_Preis').removeClass('activ')
    }
    if (y > $('.content7').offset().top - 200) {
        $('.Paket_Preis').removeClass('activ')
        $('.Kontakt').addClass('activ')
    } else {
        $('.Kontakt').removeClass('activ')
    }
    //-------end-------nav------------------
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
    flameHeight: 1,
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
