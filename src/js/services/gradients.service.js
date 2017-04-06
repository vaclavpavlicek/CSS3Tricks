(function () {
    const app = angular.module("cssTricksApp");

    app.service("GradientsService", function () {
        this.createTopToBottomGradient = function (firstColorRGB, secondColorRGB) {
            return {
                "background": "red",
                "background": "-webkit-linear-gradient("
                + "rgb(" + firstColorRGB.red + ", " + firstColorRGB.green + ", " + firstColorRGB.blue + "),rgb("
                + secondColorRGB.red + ", " + secondColorRGB.green + ", " + secondColorRGB.blue + ")",
                "background": "-o-linear-gradient("
                + "rgb(" + firstColorRGB.red + ", " + firstColorRGB.green + ", " + firstColorRGB.blue + "),rgb("
                + secondColorRGB.red + ", " + secondColorRGB.green + ", " + secondColorRGB.blue + ")",
                "background": "-moz-linear-gradient("
                + "rgb(" + firstColorRGB.red + ", " + firstColorRGB.green + ", " + firstColorRGB.blue + "),rgb("
                + secondColorRGB.red + ", " + secondColorRGB.green + ", " + secondColorRGB.blue + ")",
                "background": "linear-gradient(" + "rgb(" + firstColorRGB.red + ", " + firstColorRGB.green + ", " + firstColorRGB.blue + "),rgb("
                + secondColorRGB.red + ", " + secondColorRGB.green + ", " + secondColorRGB.blue + ")"
            };
        }
    });
})();