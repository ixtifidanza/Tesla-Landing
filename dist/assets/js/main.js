$(function(){
    $('.slider').slick({
    arrows: false,
    fade: true,
    autoplay: 2000,
    dots: true,
});

$('.fade').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear'
    });
});
