$(document).ready(function(){

    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    /* click even on toggle menu  */

    $toggleCollapse.click(function(){
        $nav.toggleClass('collapse')
    })

    // owl-carousel for blog
    $('.owl-carousel').owlCarousel({
        loop:true,
        autoplay: true,
        autoplayTimeout:4200,
        dots: false,
        nav: true,
        navText:[$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')]
    
    });
   


});