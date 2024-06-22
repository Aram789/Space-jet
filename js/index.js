$(document).ready(() => {
    let counter = -300;
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

            if (scrollPosition > headerHeight * 15) {
                if (counter < 0) {
                    counter += 15;
                    if (counter >= 0) {
                        counter = 0;
                        $('.rate_sh').show();
                    }
                }

                $('.rate, .rate_sh').css({
                    left: counter + 'px',
                });
            } else {
                console.log(5)
                counter -= 15;
                if (counter <= -300) {
                    counter = -300;
                    $('.rate_sh').hide();
                }

                $('.rate, .rate_sh').css({
                    left: counter + 'px',
                });
            }

        }, 100);
    });
});
