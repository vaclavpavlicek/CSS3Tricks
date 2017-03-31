const app = angular.module("cssTricksApp", []);


app.controller("TopToBottomCtrl", function() {
    this.firstRed = 255;
    this.firstGreen = 0;
    this.firstBlue = 0;
    this.secondRed = 255;
    this.secondGreen = 255;
    this.secondBlue = 0;
    this.gradient = {
        "background": "red",
        "background": "-webkit-linear-gradient("
        +"rgb(" + this.firstRed + ", " + this.firstGreen + ", " + this.firstBlue + "),rgb("
        + this.secondRed + ", " + this.secondGreen + ", " + this.secondBlue + ")",
        "background": "-o-linear-gradient("
        +"rgb(" + this.firstRed + ", " + this.firstGreen + ", " + this.firstBlue + "),rgb("
        + this.secondRed + ", " + this.secondGreen + ", " + this.secondBlue + ")",
        "background": "-moz-linear-gradient("
        +"rgb(" + this.firstRed + ", " + this.firstGreen + ", " + this.firstBlue + "),rgb("
        + this.secondRed + ", " + this.secondGreen + ", " + this.secondBlue + ")",
        "background": "linear-gradient("+"rgb(" + this.firstRed + ", " + this.firstGreen + ", " + this.firstBlue + "),rgb("
        + this.secondRed + ", " + this.secondGreen + ", " + this.secondBlue + ")"
    };
    this.changeGradient = function () {
        this.gradient = {
            "background": "red",
            "background": "-webkit-linear-gradient("
            +"rgb(" + this.firstRed + ", " + this.firstGreen + ", " + this.firstBlue + "),rgb("
            + this.secondRed + ", " + this.secondGreen + ", " + this.secondBlue + ")",
            "background": "-o-linear-gradient("
            +"rgb(" + this.firstRed + ", " + this.firstGreen + ", " + this.firstBlue + "),rgb("
            + this.secondRed + ", " + this.secondGreen + ", " + this.secondBlue + ")",
            "background": "-moz-linear-gradient("
            +"rgb(" + this.firstRed + ", " + this.firstGreen + ", " + this.firstBlue + "),rgb("
            + this.secondRed + ", " + this.secondGreen + ", " + this.secondBlue + ")",
            "background": "linear-gradient("+"rgb(" + this.firstRed + ", " + this.firstGreen + ", " + this.firstBlue + "),rgb("
            + this.secondRed + ", " + this.secondGreen + ", " + this.secondBlue + ")"
        };
    }
});