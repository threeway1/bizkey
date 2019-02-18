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
})(jQuery);