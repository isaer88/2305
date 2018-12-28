$(document).ready(function () {

  console.log('scripts init');

    // Slider project

    $(".slider_project").owlCarousel({
        items:1,
        loop: true,
        nav: true,
        navText: []
    });

    // Menu

    $('.button').on('click', function(){
        $('.menu').toggleClass('active');
    });

    $('.menu ul li a').on('click', function(){
        $('.menu').removeClass('active');
    });

});