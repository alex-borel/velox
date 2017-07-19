$(document).ready(function() {
    var $container = $('.isotope');
    // filter buttons
    $('#filters button').click(function() {
        var $this = $(this);
        // don't proceed if already selected
        if (!$this.hasClass('is-checked')) {
            $this.parents('#options').find('.is-checked').removeClass('is-checked');
            $this.addClass('is-checked');
        }
        var selector = $this.attr('data-filter');
        $container.isotope({
            itemSelector: '.item',
            filter: selector
        });
        return false;
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.scroll-up').fadeIn();
        } else {
            $('.scroll-up').fadeOut();
        }
    });

    $('.scroll-up').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 900);
        return false;
    });

    $('a[href^="#"]').click(function() {
        var el = $(this).attr('href');
        if (el === '#myCarousel') {
            return true;
        } else {
            $('body').animate({
                scrollTop: $(el).offset().top
            }, 900);
            return false;
        }
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 200) {
            $('.navbar').addClass('blue-color');
        }
        if ($(this).scrollTop() < 200) {
            $('.navbar').removeClass('blue-color');
        }
    });

});
