function coverCarousel(){

    const tabs = document.querySelectorAll('.tab-item');
    const arr = [...tabs];

    new Swiper('.cover-carousel', {
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
            el: '.home-swiper-pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (arr[index].innerText) + '</span>';
            },
        },
        effect: "fade",
        // autoplay: {
        //     delay: 1500,
        //     disableOnInteraction: false,
        // },

        autoplay: false,
    });
}

function testimonialCarousel(){
    new Swiper('.testimonial-carousel', {
        slidesPerView: 1,
        spaceBetween: 0,
        autoplay: {
            delay: 6500,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        // autoplay: false,
    });
}

function galleryCarousel(){
    new Swiper('.gallery-carousel', {
        slidesPerView: 1,
        spaceBetween: 0,
        // autoplay: {
        //     delay: 1500,
        //     disableOnInteraction: false,
        // },
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
        autoplay: false,
    });
}

function partnerCarousel(){
    new Swiper('.partner-carousel', {
        slidesPerView: 6,
        spaceBetween: 0,
        // autoplay: {
        //     delay: 1500,
        //     disableOnInteraction: false,
        // },
        autoplay: false,
        breakpoints: {
            0: {
                slidesPerView: 3,
            },
            767: {
                slidesPerView: 3,
            },
            1024: {
                slidesPerView: 4,
            },
            1280: {
                slidesPerView: 6,
            },
        }
    });
}


function brandsCarousel(){
    new Swiper('.brands-carousel', {
        autoHeight: true,
        slidesPerView: 2,
        spaceBetween: 10,
        // autoplay: {
        //     delay: 1500,
        //     disableOnInteraction: false,
        // },
        navigation: {
            nextEl: '.next',
            prevEl: '.prev',
        },
        autoplay: false,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 0,
            },
            800: {
                slidesPerView: 2,
                spaceBetween: 10,
            },
        }
    });

}

function benefitCarousel(){
    new Swiper('.benefit-carousel', {
        slidesPerView: 1,
        spaceBetween: 0,
        // autoplay: {
        //     delay: 1500,
        //     disableOnInteraction: false,
        // },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        autoplay: false,
    });
}


