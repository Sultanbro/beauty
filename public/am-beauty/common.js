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

    var swiper1 = new Swiper(".mySwiper1", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: {
            el: ".blog-pagination",
            clickable: true,
        },
        breakpoints: {
            768: {
                slidesPerView: 3,
                spaceBetween: 15,
            },

        },
        navigation: {
            nextEl: ".blog-prev",
            prevEl: ".blog-next",
        },
    });
});
