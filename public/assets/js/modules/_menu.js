function toggleMenu() {
    burger.addEventListener("click", function(event) {
        burger.classList.toggle('close');
        mobileMenu.classList.toggle('active');
        body.classList.toggle('opened-overlay');
    });
}


for(let i=0; i < menuItem.length; i++) {

    menuItem[i].onmouseover = function(){

        let itemLeft = this.offsetLeft + 'px';
        let itemWidth = this.offsetWidth + 'px';

        activeBorder.classList.add('show');
        activeBorder.style.left = itemLeft;
        activeBorder.style.width = itemWidth;
    };


    menuItem[i].onmouseleave = function(){
        activeBorder.classList.remove('show')
    };
}

for(let k=0; k < langItem.length; k++) {

    langItem[k].onmouseover = function(){

        let itemLeft = this.offsetLeft + 'px';
        let itemWidth = this.offsetWidth + 'px';

        activeBorderLang.classList.add('show');
        activeBorderLang.style.left = itemLeft;
        activeBorderLang.style.width = itemWidth;
    };


    langItem[k].onmouseleave = function(){
        activeBorderLang.classList.remove('show')
    };
}
