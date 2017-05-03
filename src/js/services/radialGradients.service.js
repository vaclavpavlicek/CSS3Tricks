(function () {
    const app = angular.module("cssTricksApp");

    app.service("RadialGradientsService", function () {
        this.createDifferentlySpacedGradient = function (firstColorRGB, secondColorRGB) {
            return {
                "background": "rgb(" + secondColorRGB.hue + ", " + secondColorRGB.saturation + ", " + secondColorRGB.lightness + ")",
                "background": "-webkit-radial-gradient("
                + "rgb(" + secondColorRGB.hue + ", " + secondColorRGB.saturation + ", " + secondColorRGB.lightness + ") 30%,rgb("
                + firstColorRGB.hue + ", " + firstColorRGB.saturation + ", " + firstColorRGB.lightness + ") 50%",
                "background": "-o-radial-gradient(" + "rgb(" + secondColorRGB.hue + ", " + secondColorRGB.saturation + ", " + secondColorRGB.lightness + ") 30%,rgb("
                + firstColorRGB.hue + ", " + firstColorRGB.saturation + ", " + firstColorRGB.lightness + ") 50%",
                "background": "-moz-radial-gradient("
                + "rgb(" + secondColorRGB.hue + ", " + secondColorRGB.saturation + ", " + secondColorRGB.lightness + ") 30%,rgb("
                + firstColorRGB.hue + ", " + firstColorRGB.saturation + ", " + firstColorRGB.lightness + ") 50%",
                "background": "radial-gradient(" + "rgb(" + secondColorRGB.hue + ", " + secondColorRGB.saturation + ", " + secondColorRGB.lightness + "),rgb("
                + firstColorRGB.hue + ", " + firstColorRGB.saturation + ", " + firstColorRGB.lightness + ")"
            };
        };

        this.createRadialGradient = function (firstColorRGB, secondColorRGB) {
            return {
                "background": "rgb(" + firstColorRGB.hue + ", " + firstColorRGB.saturation + ", " + firstColorRGB.lightness + ")",
                "background": "-webkit-radial-gradient("
                + "rgb(" + firstColorRGB.hue + ", " + firstColorRGB.saturation + ", " + firstColorRGB.lightness + "),rgb("
                + secondColorRGB.hue + ", " + secondColorRGB.saturation + ", " + secondColorRGB.lightness + ")",
                "background": "-o-radial-gradient("
                + "rgb(" + firstColorRGB.hue + ", " + firstColorRGB.saturation + ", " + firstColorRGB.lightness + "),rgb("
                + secondColorRGB.hue + ", " + secondColorRGB.saturation + ", " + secondColorRGB.lightness + ")",
                "background": "-moz-radial-gradient("
                + "rgb(" + firstColorRGB.hue + ", " + firstColorRGB.saturation + ", " + firstColorRGB.lightness + "),rgb("
                + secondColorRGB.hue + ", " + secondColorRGB.saturation + ", " + secondColorRGB.lightness + ")",
                "background": "radial-gradient(" + "rgb(" + firstColorRGB.hue + ", " + firstColorRGB.saturation + ", " + firstColorRGB.lightness + "),rgb("
                + secondColorRGB.hue + ", " + secondColorRGB.saturation + ", " + secondColorRGB.lightness + ")"
            };
        };

        this.createShapesGradient = function (firstColorRGB, secondColorRGB) {
            return {
                "background": "rgb(" + secondColorRGB.hue + ", " + secondColorRGB.saturation + ", " + secondColorRGB.lightness + ")",
                "background": "-webkit-radial-gradient(circle, "
                + "rgb(" + secondColorRGB.hue + ", " + secondColorRGB.saturation + ", " + secondColorRGB.lightness + "),rgb("
                + firstColorRGB.hue + ", " + firstColorRGB.saturation + ", " + firstColorRGB.lightness + ")",
                "background": "-o-radial-gradient(circle, "
                + "rgb(" + secondColorRGB.hue + ", " + secondColorRGB.saturation + ", " + secondColorRGB.lightness + "),rgb("
                + firstColorRGB.hue + ", " + firstColorRGB.saturation + ", " + firstColorRGB.lightness + ")",
                "background": "-moz-radial-gradient(circle, "
                + "rgb(" + secondColorRGB.hue + ", " + secondColorRGB.saturation + ", " + secondColorRGB.lightness + "),rgb("
                + firstColorRGB.hue + ", " + firstColorRGB.saturation + ", " + firstColorRGB.lightness + ")",
                "background": "radial-gradient(circle, " + "rgb(" + secondColorRGB.hue + ", " + secondColorRGB.saturation + ", " + secondColorRGB.lightness + "),rgb("
                + firstColorRGB.hue + ", " + firstColorRGB.saturation + ", " + firstColorRGB.lightness + ")"
            };
        };
    });
})();