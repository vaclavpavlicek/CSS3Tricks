var menu = document.getElementsByClassName("menu")[0];
var menuShowed = false;
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;

function dropdown() {
    var actualMenuPage = document.getElementsByClassName("actual-page")[0];
    actualMenuPage.parentNode.style.display = 'none';
    if (!menuShowed) {
        menu.style.display = "block";
        menuShowed = true;
    } else {
        menu.style.display = null;
        menuShowed = false;
    }
    stickPoint = contentTable.offsetTop;
}

function menuOnResize() {
    width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width <= 768) {
        if (!menuShowed) {
            menuShowed = true;
            dropdown();
        }
    } else {
        menu.style.display = "flex";
        var actualMenuPage = document.getElementsByClassName("actual-page")[0];
        actualMenuPage.parentNode.style.display = 'inline-flex';
        menuShowed = false;
    }
}