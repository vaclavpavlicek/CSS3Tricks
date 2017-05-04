(function () {
    const app = angular.module("cssTricksApp");

    app.service("LinearGradientsService", function () {
        this.createTopToBottomGradient = function (firstColorRGB, secondColorRGB) {
            return {
                "background": "rgb(" + firstColorRGB.red + ", " + firstColorRGB.green + ", " + firstColorRGB.blue + ")",
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
        };

        this.createLeftToRightGradient = function (firstColorRGB, secondColorRGB) {
            return {
                "background": "rgb(" + firstColorRGB.red + ", " + firstColorRGB.green + ", " + firstColorRGB.blue + ")",
                "background": "-webkit-linear-gradient(left, "
                + "rgb(" + firstColorRGB.red + ", " + firstColorRGB.green + ", " + firstColorRGB.blue + "),rgb("
                + secondColorRGB.red + ", " + secondColorRGB.green + ", " + secondColorRGB.blue + ")",
                "background": "-o-linear-gradient(right, "
                + "rgb(" + firstColorRGB.red + ", " + firstColorRGB.green + ", " + firstColorRGB.blue + "),rgb("
                + secondColorRGB.red + ", " + secondColorRGB.green + ", " + secondColorRGB.blue + ")",
                "background": "-moz-linear-gradient(right, "
                + "rgb(" + firstColorRGB.red + ", " + firstColorRGB.green + ", " + firstColorRGB.blue + "),rgb("
                + secondColorRGB.red + ", " + secondColorRGB.green + ", " + secondColorRGB.blue + ")",
                "background": "linear-gradient(to right, " + "rgb(" + firstColorRGB.red + ", " + firstColorRGB.green + ", " + firstColorRGB.blue + "),rgb("
                + secondColorRGB.red + ", " + secondColorRGB.green + ", " + secondColorRGB.blue + ")"
            };
        };

        this.createDiagonalGradient = function (firstColorRGB, secondColorRGB) {
            return {
                "background": "rgb(" + firstColorRGB.red + ", " + firstColorRGB.green + ", " + firstColorRGB.blue + ")",
                "background": "-webkit-linear-gradient(left top, "
                + "rgb(" + firstColorRGB.red + ", " + firstColorRGB.green + ", " + firstColorRGB.blue + "),rgb("
                + secondColorRGB.red + ", " + secondColorRGB.green + ", " + secondColorRGB.blue + ")",
                "background": "-o-linear-gradient(bottom right, "
                + "rgb(" + firstColorRGB.red + ", " + firstColorRGB.green + ", " + firstColorRGB.blue + "),rgb("
                + secondColorRGB.red + ", " + secondColorRGB.green + ", " + secondColorRGB.blue + ")",
                "background": "-moz-linear-gradient(bottom right, "
                + "rgb(" + firstColorRGB.red + ", " + firstColorRGB.green + ", " + firstColorRGB.blue + "),rgb("
                + secondColorRGB.red + ", " + secondColorRGB.green + ", " + secondColorRGB.blue + ")",
                "background": "linear-gradient(to bottom right, " + "rgb(" + firstColorRGB.red + ", " + firstColorRGB.green + ", " + firstColorRGB.blue + "),rgb("
                + secondColorRGB.red + ", " + secondColorRGB.green + ", " + secondColorRGB.blue + ")"
            };
        };
    });
})();