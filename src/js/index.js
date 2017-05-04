var arrowUp = document.getElementsByClassName("js-arrow-up")[0];
var navigation = document.getElementsByClassName("js-navigation")[0];
arrowUp.style.visibility = 'hidden';

window.onresize = function (event) {
    menuOnResize();
    width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width <= 768) {
        dropdownUpArrow.style.display = "inline";
    } else {
        dropdownUpArrow.style.display = "none";
    }
};

window.onscroll = function (e) {
    if (window.pageYOffset > navigation.offsetTop + navigation.clientHeight) {
        arrowUp.style.visibility = 'visible';
        arrowUp.style.backgroundImage = "url('images/arrow_up.png')";
    } else {
        arrowUp.style.visibility = 'hidden';
    }
};