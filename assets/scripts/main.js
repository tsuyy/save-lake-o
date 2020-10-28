$(document).ready(function() {

    // MAPBOX CONFIG
    mapboxgl.accessToken = 'pk.eyJ1IjoidHN1eSIsImEiOiJjazBsaWl5MXgwd2hqM2VxbzVlcGdnanlvIn0.V75WjSKJrKNSvazBDuQDeg';
    var map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/tsuy/ckgtuzv2i02jm19nz0f1khw5b/draft', // stylesheet location
        center: [-80.782, 26.948], // starting position [lng, lat]
        zoom: 9.49 // starting zoom
    });

    map.on('click', function(e) {
        console.log("hi");
    });


    // toggle active on click
    $(document).on('click', '.nav-items a', function() {
        $('.nav-items a').removeClass('active');
        $(this).addClass('active');
    });

    $('body').css('padding-top', $('.navbar').outerHeight() + 'px')

    // detect scroll top or down
    if ($('.smart-scroll').length > 0) { // check if element exists
        var last_scroll_top = 0;
        $(window).on('scroll', function() {
            scroll_top = $(this).scrollTop();
            if(scroll_top < last_scroll_top) {
                $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
            }
            else {
                $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
            }
            last_scroll_top = scroll_top;
        });
    }
});

$(window)
    .scroll(function() {
            const scrollDistance = $(window).scrollTop() + 150;

            // Assign active class to nav links while scolling
            $('.page-section').each(function(i) {
                    if ($(this).position().top <= scrollDistance) {
                            $('.nav-items a.active').removeClass('active');
                            $('.nav-items a')
                                    .eq(i)
                                    .addClass('active');
                    }
            });
    })
    .scroll();

