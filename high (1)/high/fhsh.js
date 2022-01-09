$('.slider-1').slick({
    arrows: false,
    dots: true,
    autoplay: true,
    autoplaySpeed: 5000
});

$('.slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    asNavFor: '.slider-nav'
});

$('.slider-nav').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '.slider',
    arrows: false,
    dots: true,
    focusOnSelect: true,
    autoplay: true,
    autoplaySpeed: 5000
});


$('.slider-2').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 5000
});

$('.slider-3').slick({
    dots: true,
    arrows: false,
    fade: true
});