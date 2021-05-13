$(document).ready(function(){
    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items: 1,
        loop: true,
        dots: false,
        autoHeight: true,
    });
// Go to the next item
    $('.owl-next').click(function() {
        owl.trigger('next.owl.carousel');
    })
// Go to the previous item
    $('.owl-prev').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })

    $('ul.catalog__caption').on('click', 'li:not(.catalog__item_active)', function() {
        $(this)
            .addClass('catalog__item_active').siblings().removeClass('catalog__item_active')
            .closest('div.catalog__tabs').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    //переход

    $('.catalog__frontMore').each(function (item) {
        $(this).on('click', function (event) {
            event.preventDefault();
            $('.catalog__front').eq(item).addClass('catalog__front_active')
            $('.catalog__back').eq(item).addClass('catalog__back_active')
        })
    });

    $('.catalog__backOff').each(function (item) {
        $(this).on('click', function (event) {
            event.preventDefault();
            $('.catalog__front').eq(item).removeClass('catalog__front_active')
            $('.catalog__back').eq(item).removeClass('catalog__back_active')
        })
    });

    //fancybox

    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
            "zoom",
            "share",
            "slideShow",
            "fullScreen",
            "download",
            "thumbs",
            "close"
        ],
    });

    var map;
    DG.then(function () {
        map = DG.map('map', {
            center: [42.843723, 74.623087],
            zoom: 13
        });
        var myIcon = DG.icon({
            iconUrl: 'https://image.flaticon.com/icons/png/128/1673/1673188.png',
            iconSize: [50, 50],
        });

        var marker = DG.marker([42.843723, 74.623087], {icon: myIcon}).addTo(map).bindPopup('IT-RUN');
        marker.bindLabel('IT-RUN Academy', { static: true });
    });

    $('#tel, #number, #phone').inputmask('+\\9\\96 (999) -99-99-99');

    $(window).on('scroll', function (){
        if($ (this).scrollTop() > 1000){
            $('.go-top').fadeIn('slow');
        }else{
            $('.go-top').fadeOut('slow');
        }
    });

    $('.header__btn, .main__btn').on('click', function (){
        $('.overlay, .popup__consultation').fadeIn('slow');
    });
    $('.form__btn').on('click', function (e) {
        e.preventDefault();
        $('.overlay, .popup__thanks').fadeIn('slow');
        $('.popup__consultation').fadeOut(1);
    });
    $('.catalog__button').on('click', function (e) {
        e.preventDefault();
        $('.overlay, .popup__shopping').fadeIn('slow');
        $('.popup__order').fadeOut(1);
    });
    $('.catalog__btn').each(function (item) {
        $(this).on('click', function () {
            $('.overlay, .popup__order').fadeIn('slow');
            $('.popup__consultation-subtitle').text($('h3.catalog__frontTitle').eq(item).text());
        });
    });
    $('.popup__close').on('click', function (){
        $('.overlay, .popup__consultation, .popup__order, .popup__thanks, .popup__shopping').fadeOut('slow');
    });
});