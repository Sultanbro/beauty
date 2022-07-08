searchBtn.addEventListener("click", function(evt) {
    searchWrapper.classList.add('active')
});

if (instagramLoad) {
    instagramLoad.addEventListener("click", function(evt) {
        instagramLoadCount += 1;
        document.querySelector('.instagram-photos-' + instagramLoadCount).classList.remove('invisible');
        if (instagramLoadCount == 2) {
            evt.target.classList.add('invisible')
        }
    });
}

if (shareIcon && shareContainer) {
    shareIcon.addEventListener("click", function(evt) {
        const shareContainer = this.querySelector(".share-container");
        shareContainer.classList.toggle("active");
        evt.stopPropagation();
    });

    shareContainer.addEventListener("click", function(evt) {
        evt.stopPropagation();
    });
    document.body.addEventListener("click", function(evt) {
        const shareContainer = document.querySelectorAll(".share-container");
        for (var i = 0; i < shareContainer.length; i++) {
            shareContainer[i].classList.remove("active");
        }
    });
}


closeSearch.addEventListener("click", function(evt) {
    searchWrapper.classList.remove('active')
});

document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        searchWrapper.classList.remove('active')
    }
};

toggleMenu();

if (coverCarouselVar !== null) {
    coverCarousel();
}

if (detectAboutPage !== null) {
    testimonialCarousel();
    toggleAccordion();
    benefitCarousel();
}

if (galleryCarouselVar !== null) {
    galleryCarousel();
}

if (brandsCarouselVar !== null) {
    brandsCarousel();
}

if (partnerCarouselVar !== null) {

    partnerCarousel();
}

if (blogVideo !== null) {
    playVideo.addEventListener("click", function(e) {
        blogVideo.classList.add('video-active');
    });
}

if (richText !== null) {
    var target = document.querySelectorAll('div, p, img, strong, blockquote, b, span');
    Array.prototype.forEach.call(target, function(element) {
        element.removeAttribute('style');
    });
}


if(document.getElementById('brands-filter') !== null) {
    for (let i = 0; i < brandFilter.length; i++) {
        brandFilter[i].addEventListener("click", function(e) {
            e.preventDefault();

            var url_string = window.location.href;

            var key = e.target.getAttribute('key');

            var url = new URL(url_string);
            var c = url.searchParams.get("filter");

            if (c && c.length > 0) {
                c = c.split(',');
                if (c.includes(key)) {
                    var index = c.indexOf(key);
                    if (index > -1) {
                        c.splice(index, 1);
                    }

                } else {
                    c.push(key)
                }
            } else {
                c = [];
                c.push(key)
            }
            var arrStr = c.map(function(el, idx) {
                return el;
            }).join(',');
            window.location = '?filter=' + arrStr
        });
    }

    function setBrandFilterActive() {
        var url_string = window.location.href
        var url = new URL(url_string);
        var c = url.searchParams.getAll("filter");
        if (c && c[0] != undefined) {
            c = c[0].split(",");
            for (var i = 0; i < c.length; i++) {
                var t = c[i]
                var btn = document.querySelector('#brands-filter a[key=' + t + ']')
                btn.classList.add("active")
            }
        } else {
            var btn = document.querySelector('#brands-filter a[key=all]')
            btn.classList.add("active")
        }


        // c.forEach((item, index, arr) => {
        //     console.log(item)
        //     var btn=document.querySelector('#brands-filter a[key=v]')
        //     btn.classList.add("active")
        //
        // })
        // const btns=document.querySelectorAll('#brands-filter a');
        // [...btns].forEach(btn => {
        //     var k = btn.getAttribute('key')
        //
        //     if(c[k] != undefined) {
        //         console.log(k)
        //
        //         btn.classList.add("active")
        //     }
        // })

    }

    setBrandFilterActive()
}

if (priceBtn !== null) {
    priceBtn.addEventListener("click", function(event) {
        body.classList.add('modal-opened');
        priceModal.classList.add('active');
    });
}


