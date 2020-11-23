$(document).ready(function() {

    // dropDown
    $('.dropdown-btn').click(function(event) {
        event.preventDefault();
        $(this).parent().find('.dropdown-list').stop().slideToggle();
        $(this).parent().siblings().find('.dropdown-list').slideUp();
    })

    // goTop
    $('.top').click(function(event) {
        event.preventDefault();
        $('html,body').animate({ scrollTop: 0 }, 700);
    })

    //Swiper
    var mySwiper = new Swiper('.swiper-container', {
        // 無限迴圈
        loop: true,

        // 自動撥放
        autoplay: {
            delay: 1500
        },

        // 頁數點點
        pagination: {
            el: '.swiper-pagination',
            clickable: true
        }
    })

})