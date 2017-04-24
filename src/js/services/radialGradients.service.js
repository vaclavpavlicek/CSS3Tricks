(function () {
    const app = angular.module("cssTricksApp");

    app.service("RadialGradientsService", function () {
        this.createDifferentlySpacedGradient = function (firstColorRGB, secondColorRGB) {
            return {
                "background": "rgb(" + secondColorRGB.red + ", " + secondColorRGB.green + ", " + secondColorRGB.blue + ")",
                "background": "-webkit-radial-gradient("
                + "rgb(" + secondColorRGB.red + ", " + secondColorRGB.green + ", " + secondColorRGB.blue + ") 30%,rgb("
                + firstColorRGB.red + ", " + firstColorRGB.green + ", " + firstColorRGB.blue + ") 50%",
                "background": "-o-radial-gradient(" + "rgb(" + secondColorRGB.red + ", " + secondColorRGB.green + ", " + secondColorRGB.blue + ") 30%,rgb("
                + firstColorRGB.red + ", " + firstColorRGB.green + ", " + firstColorRGB.blue + ") 50%",
                "background": "-moz-radial-gradient("
                + "rgb(" + secondColorRGB.red + ", " + secondColorRGB.green + ", " + secondColorRGB.blue + ") 30%,rgb("
                + firstColorRGB.red + ", " + firstColorRGB.green + ", " + firstColorRGB.blue + ") 50%",
                "background": "radial-gradient(" + "rgb(" + secondColorRGB.red + ", " + secondColorRGB.green + ", " + secondColorRGB.blue + "),rgb("
                + firstColorRGB.red + ", " + firstColorRGB.green + ", " + firstColorRGB.blue + ")"
            };
        };

        this.createRadialGradient = function (firstColorRGB, secondColorRGB) {
            return {
                "background": "rgb(" + firstColorRGB.red + ", " + firstColorRGB.green + ", " + firstColorRGB.blue + ")",
                "background": "-webkit-radial-gradient("
                + "rgb(" + firstColorRGB.red + ", " + firstColorRGB.green + ", " + firstColorRGB.blue + "),rgb("
                + secondColorRGB.red + ", " + secondColorRGB.green + ", " + secondColorRGB.blue + ")",
                "background": "-o-radial-gradient("
                + "rgb(" + firstColorRGB.red + ", " + firstColorRGB.green + ", " + firstColorRGB.blue + "),rgb("
                + secondColorRGB.red + ", " + secondColorRGB.green + ", " + secondColorRGB.blue + ")",
                "background": "-moz-radial-gradient("
                + "rgb(" + firstColorRGB.red + ", " + firstColorRGB.green + ", " + firstColorRGB.blue + "),rgb("
                + secondColorRGB.red + ", " + secondColorRGB.green + ", " + secondColorRGB.blue + ")",
                "background": "radial-gradient(" + "rgb(" + firstColorRGB.red + ", " + firstColorRGB.green + ", " + firstColorRGB.blue + "),rgb("
                + secondColorRGB.red + ", " + secondColorRGB.green + ", " + secondColorRGB.blue + ")"
            };
        };

        this.createShapesGradient = function (firstColorRGB, secondColorRGB) {
            return {
                "background": "rgb(" + secondColorRGB.red + ", " + secondColorRGB.green + ", " + secondColorRGB.blue + ")",
                "background": "-webkit-radial-gradient(circle, "
                + "rgb(" + secondColorRGB.red + ", " + secondColorRGB.green + ", " + secondColorRGB.blue + "),rgb("
                + firstColorRGB.red + ", " + firstColorRGB.green + ", " + firstColorRGB.blue + ")",
                "background": "-o-radial-gradient(circle, "
                + "rgb(" + secondColorRGB.red + ", " + secondColorRGB.green + ", " + secondColorRGB.blue + "),rgb("
                + firstColorRGB.red + ", " + firstColorRGB.green + ", " + firstColorRGB.blue + ")",
                "background": "-moz-radial-gradient(circle, "
                + "rgb(" + secondColorRGB.red + ", " + secondColorRGB.green + ", " + secondColorRGB.blue + "),rgb("
                + firstColorRGB.red + ", " + firstColorRGB.green + ", " + firstColorRGB.blue + ")",
                "background": "radial-gradient(circle, " + "rgb(" + secondColorRGB.red + ", " + secondColorRGB.green + ", " + secondColorRGB.blue + "),rgb("
                + firstColorRGB.red + ", " + firstColorRGB.green + ", " + firstColorRGB.blue + ")"
            };
        };
    });
})();