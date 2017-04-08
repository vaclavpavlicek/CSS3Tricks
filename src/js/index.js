var arrowUp = document.getElementsByClassName("js-arrow-up")[0];
var navigation = document.getElementsByClassName("js-navigation")[0];
arrowUp.style.visibility = 'hidden';
var menu = document.getElementsByClassName("menu")[0];

var menuShowed = false;

window.onscroll = function (e) {
    if (window.pageYOffset > navigation.offsetTop + navigation.clientHeight) {
        arrowUp.style.visibility = 'visible';
        arrowUp.style.backgroundImage = "url('images/arrow_up.png')";
    } else {
        arrowUp.style.visibility = 'hidden';
    }
};

function dropdown() {
    var actualMenuPage = document.getElementsByClassName("actual-page")[0];
    actualMenuPage.parentNode.style.display = 'none';
    if (!menuShowed) {
        menu.style.display = "block";
        menuShowed = true;
    } else {
        menu.style.display = "none";
        menuShowed = false;
    }
}

function scrollUp() {
    var scrollStep = -window.scrollY / (window.pageYOffset / 40);
    var scrollInterval = setInterval(function () {
        if (window.scrollY != 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}