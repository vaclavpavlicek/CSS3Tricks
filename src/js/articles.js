var contentTable = document.getElementsByClassName("js-content-table")[0];
var contentTableItems = document.getElementsByClassName("js-content-table-items")[0];
var content = document.getElementsByClassName("js-article-content")[0];
var arrowUp = document.getElementsByClassName("js-arrow-up")[0];
var dropdownUpArrow = document.getElementsByClassName("js-dropdown-arrow")[0];
var navigation = document.getElementsByClassName("js-navigation")[0];
arrowUp.style.visibility = 'hidden';
var contentTableWidth = contentTable.clientWidth
    - parseFloat(window.getComputedStyle(contentTable, null).getPropertyValue('padding-left').replace("px", ""))
    - parseFloat(window.getComputedStyle(contentTable, null).getPropertyValue('padding-right').replace("px", ""));
var stuck = false;
var stickPoint = contentTable.offsetTop;
var menu = document.getElementsByClassName("menu")[0];
var menuShowed = false;
var width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
if (width <= 768) {
    contentTableItems.style.display = "none";
} else {
    dropdownUpArrow.style.display = "none";
}

contentTable.addEventListener("click", function () {
    if (width <= 768) {
        if (contentTableItems.style.display == "block") {
            contentTableItems.style.display = "none";
            dropdownUpArrow.className = dropdownUpArrow.className.replace("fa-angle-up", "fa-angle-down");
        } else {
            contentTableItems.style.display = "block";
            dropdownUpArrow.className = dropdownUpArrow.className.replace("fa-angle-down", "fa-angle-up");
        }
    }
});

window.onresize = function (event) {
    contentTableWidth = contentTable.clientWidth
        - parseFloat(window.getComputedStyle(contentTable, null).getPropertyValue('padding-left').replace("px", ""))
        - parseFloat(window.getComputedStyle(contentTable, null).getPropertyValue('padding-right').replace("px", ""));
    width = (window.innerWidth > 0) ? window.innerWidth : screen.width;
    if (width <= 768) {
        dropdownUpArrow.style.display = "inline";
        contentTableItems.style.display = "none";
    } else {
        dropdownUpArrow.style.display = "none";
        menu.style.display = "flex";
        var actualMenuPage = document.getElementsByClassName("actual-page")[0];
        actualMenuPage.parentNode.style.display = 'inline-flex';
        menuShowed = true;
        if (width > 768 && contentTableItems.style.display == "none") {
            contentTableItems.style.display = "block";
        }
    }
    contentTableWidth = contentTable.clientWidth;
    stickPoint = contentTable.offsetTop;
};

window.onscroll = function (e) {
    if (window.pageYOffset > navigation.offsetTop + navigation.clientHeight) {
        arrowUp.style.visibility = 'visible';
    } else {
        arrowUp.style.visibility = 'hidden';
    }
    var distance = contentTable.offsetTop - window.pageYOffset;
    var offset = window.pageYOffset;
    if ((distance <= 0) && !stuck) {
        contentTable.style.position = 'fixed';
        contentTable.style.top = '0px';
        contentTable.style.width = contentTableWidth + 'px';
        if (width > 768) {
            content.className += " article-content-left-margin";
        }
        stuck = true;
    } else if (stuck && (offset <= stickPoint)) {
        contentTable.style.position = 'static';
        if (width > 768) {
            content.className = "article-content";
        }
        stuck = false;
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
    stickPoint = contentTable.offsetTop;
}

function scrollUp() {
    var scrollStep = -100;
    var scrollInterval = setInterval(function () {
        if (window.scrollY != 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15);
}