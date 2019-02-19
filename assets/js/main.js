(function($){
    $(document).ready(function(){
        $('.jumbo-slide').slick({
            dots: true,
            arrows: false,
            autoplay: true,
            autoplaySpeed: 6000
        });
    });
    $(window).on('load', function(){
        $('.jumbo-slide').addClass('on');
    });
})(jQuery);