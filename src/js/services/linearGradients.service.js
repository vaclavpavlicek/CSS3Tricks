(function () {
    const app = angular.module("cssTricksApp");

    app.service("LinearGradientsService", function () {
        this.createTopToBottomGradient = function (firstColorRGB, secondColorRGB) {
            return {
                "background": "rgb(" + firstColorRGB.hue + ", " + firstColorRGB.saturation + ", " + firstColorRGB.lightness + ")",
                "background": "-webkit-linear-gradient("
                + "rgb(" + firstColorRGB.hue + ", " + firstColorRGB.saturation + ", " + firstColorRGB.lightness + "),rgb("
                + secondColorRGB.hue + ", " + secondColorRGB.saturation + ", " + secondColorRGB.lightness + ")",
                "background": "-o-linear-gradient("
                + "rgb(" + firstColorRGB.hue + ", " + firstColorRGB.saturation + ", " + firstColorRGB.lightness + "),rgb("
                + secondColorRGB.hue + ", " + secondColorRGB.saturation + ", " + secondColorRGB.lightness + ")",
                "background": "-moz-linear-gradient("
                + "rgb(" + firstColorRGB.hue + ", " + firstColorRGB.saturation + ", " + firstColorRGB.lightness + "),rgb("
                + secondColorRGB.hue + ", " + secondColorRGB.saturation + ", " + secondColorRGB.lightness + ")",
                "background": "linear-gradient(" + "rgb(" + firstColorRGB.hue + ", " + firstColorRGB.saturation + ", " + firstColorRGB.lightness + "),rgb("
                + secondColorRGB.hue + ", " + secondColorRGB.saturation + ", " + secondColorRGB.lightness + ")"
            };
        };

        this.createLeftToRightGradient = function (firstColorRGB, secondColorRGB) {
            return {
                "background": "rgb(" + firstColorRGB.hue + ", " + firstColorRGB.saturation + ", " + firstColorRGB.lightness + ")",
                "background": "-webkit-linear-gradient(left, "
                + "rgb(" + firstColorRGB.hue + ", " + firstColorRGB.saturation + ", " + firstColorRGB.lightness + "),rgb("
                + secondColorRGB.hue + ", " + secondColorRGB.saturation + ", " + secondColorRGB.lightness + ")",
                "background": "-o-linear-gradient(right, "
                + "rgb(" + firstColorRGB.hue + ", " + firstColorRGB.saturation + ", " + firstColorRGB.lightness + "),rgb("
                + secondColorRGB.hue + ", " + secondColorRGB.saturation + ", " + secondColorRGB.lightness + ")",
                "background": "-moz-linear-gradient(right, "
                + "rgb(" + firstColorRGB.hue + ", " + firstColorRGB.saturation + ", " + firstColorRGB.lightness + "),rgb("
                + secondColorRGB.hue + ", " + secondColorRGB.saturation + ", " + secondColorRGB.lightness + ")",
                "background": "linear-gradient(to right, " + "rgb(" + firstColorRGB.hue + ", " + firstColorRGB.saturation + ", " + firstColorRGB.lightness + "),rgb("
                + secondColorRGB.hue + ", " + secondColorRGB.saturation + ", " + secondColorRGB.lightness + ")"
            };
        };

        this.createDiagonalGradient = function (firstColorRGB, secondColorRGB) {
            return {
                "background": "rgb(" + firstColorRGB.hue + ", " + firstColorRGB.saturation + ", " + firstColorRGB.lightness + ")",
                "background": "-webkit-linear-gradient(left top, "
                + "rgb(" + firstColorRGB.hue + ", " + firstColorRGB.saturation + ", " + firstColorRGB.lightness + "),rgb("
                + secondColorRGB.hue + ", " + secondColorRGB.saturation + ", " + secondColorRGB.lightness + ")",
                "background": "-o-linear-gradient(bottom right, "
                + "rgb(" + firstColorRGB.hue + ", " + firstColorRGB.saturation + ", " + firstColorRGB.lightness + "),rgb("
                + secondColorRGB.hue + ", " + secondColorRGB.saturation + ", " + secondColorRGB.lightness + ")",
                "background": "-moz-linear-gradient(bottom right, "
                + "rgb(" + firstColorRGB.hue + ", " + firstColorRGB.saturation + ", " + firstColorRGB.lightness + "),rgb("
                + secondColorRGB.hue + ", " + secondColorRGB.saturation + ", " + secondColorRGB.lightness + ")",
                "background": "linear-gradient(to bottom right, " + "rgb(" + firstColorRGB.hue + ", " + firstColorRGB.saturation + ", " + firstColorRGB.lightness + "),rgb("
                + secondColorRGB.hue + ", " + secondColorRGB.saturation + ", " + secondColorRGB.lightness + ")"
            };
        };
    });
})();