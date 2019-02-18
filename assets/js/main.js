(function($){
    $('.partner-list').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        dots: false,
        speed: 300,
        slidesToShow: 5,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev slick-arrow" type="button"><i class="icon-left-open-big"></i></button>',
        nextArrow: '<button class="slick-next slick-arrow" type="button"><i class="icon-right-open-big"></i></button>',
        responsive: [
            {
            breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
            breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }
        ]
    });
})(jQuery);