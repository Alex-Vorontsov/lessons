
$(function () {
    $("[data-scroll]").on("click", function (event) {
        event.preventDefault();

        blockId = $(this).data('scroll');
        blockOffset = $(blockId).offset().top;
        
        $('html,body').animate({
            scrollTop:blockOffset - 50
        }, 700);
    });
    $("[data-modal]").on("click", function (event) {
        event.preventDefault();
        $(modal__resume).addClass('show');
    });
    $(modal__resume).on("click", function () {
        $(modal__resume).removeClass('show');
        
    })
    
});
$(function () {
    $("[data-moda1]").on("click", function (event) {
        event.preventDefault();
        $(modal__cert1).addClass('show');
    });
    $(modal__cert1).on("click", function () {
        $(modal__cert1).removeClass('show');

    })
    
});
$(function () {
    $("[data-moda2]").on("click", function (event) {
        event.preventDefault();
        $(modal__cert2).addClass('show');
    });
    $(modal__cert2).on("click", function () {
        $(modal__cert2).removeClass('show');

    })

});
$(function () {
    $("[data-moda3]").on("click", function (event) {
        event.preventDefault();
        $(modal__cert3).addClass('show');
    });
    $(modal__cert3).on("click", function () {
        $(modal__cert3).removeClass('show');

    })

});
$(function () {
    $("[data-moda4]").on("click", function (event) {
        event.preventDefault();
        $(modal__cert4).addClass('show');
    });
    $(modal__cert).on("click", function () {
        $(modal__cert4).removeClass('show');

    })

});
const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    autoHeight: true,
    effect: 'coverflow',
    grabCursor: true,
    initialSlide: 0,
    

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
        el: '.swiper-scrollbar',
    },
    autoplay: {
        delay: 3000, 
    }
});
