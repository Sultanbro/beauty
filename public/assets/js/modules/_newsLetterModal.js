function setCookie(cname, cvalue) {
    let d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toGMTString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

if (newsLetterModal !== null) {

    function checkCookie() {
        let user = getCookie("username");
        if (user == "") {

            if(window.innerWidth > 767) {
                newsLetterModal.classList.add('active');
                body.classList.add('modal-opened');
            }
        }
    }

    checkCookie();
}

closeModal.addEventListener("click", function(event) {

    body.classList.remove('modal-opened');
    if (newsLetterModal !== null) {
        newsLetterModal.classList.remove('active');
    }
    if (priceBtn !== null) {
        priceModal.classList.remove('active');
    }

    if(document.querySelector('#not-show:checked') !== null) {
        setCookie('username', 1);
    }
});


