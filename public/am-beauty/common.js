jQuery(document).ready(function ($) {
  var swiper = new Swiper(".mySwiper", {
      slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          768: {
            slidesPerView: 3,
            spaceBetween: 15,
          },

        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

    $('.blog-next').on('click', function() {
        var currentImg = $('.active');
        var nextImg = currentImg.next();

        if(nextImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            nextImg.addClass('active').css('z-index', 10);
        }
    });

    $('.blog-prev').on('click', function() {
        var currentImg = $('.active');
        var prevImg = currentImg.prev();

        if(prevImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', 10);
        }
    });
});
