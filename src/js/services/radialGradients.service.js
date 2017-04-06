(function () {
    const app = angular.module("cssTricksApp");

    app.service("RadialGradientsService", function () {
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

    });
})();