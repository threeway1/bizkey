(function($){
    $(document).on('click','.btn-nav', function(){
        $('body').addClass('gnb-open');
    });
    $(document).on('click','.backdrop, .nav-close', function(){
        $('body').removeClass('gnb-open');
    });
    $(document).on('click','.gnb-body > ul > li > a', function(){
        if ($(this).parent().hasClass('active')) {
            $(this).parent().removeClass('active');
        } else {
            $(this).parent().siblings('.active').removeClass('active');
            $(this).parent().addClass('active');
        }
    });

    $(document).on('click','.btn-search-open', function(){
        $('.search-form .form-control').removeClass('d-none');
        $('.search-form .search-close').removeClass('d-none');
        $('.btn-search').removeClass('d-none');
        $('.btn-search-open').hide();
    });
    $(document).on('click','.search-close', function(){
        $('.search-form .form-control').addClass('d-none');
        $(this).addClass('d-none');
        $('.btn-search').addClass('d-none');
        $('.btn-search-open').show();
    });

    $(window).on('load resize', function() {
        var conWidth = $('body').width();
        if (conWidth >= 1199) {
            $('body').removeClass("gnb-open");
        }
    });

    $(document).on('mouseenter','#gnb-area > ul > li > a', function(){
        $('body').addClass('opened');
    });
    $(document).on('mouseleave','#header > .container', function(){
        $('body').removeClass('opened');
    });
    
    $(document).ready(function(){
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
    });
    $(window).on('load', function(){
        $('.partner-list').addClass('on');
    });
    
    $(window).on('scroll', function(){
        if ($(this).scrollTop() > 0) {
            $('body').addClass('scrolled');
        } else {
            $('body').removeClass('scrolled');
        }
    });
    $(document).on('click', '.btn-top', function(e){
        $('html, body').stop().animate({
            scrollTop: 0
        });
        e.preventDefault();
    });
})(jQuery);