(function () {
    const app = angular.module("cssTricksApp");

    app.controller("DifferentlySpacedColorCtrl", function (RadialGradientsService, ColorsService) {
        const $ctrl = this;
        this.firstColorRed = 255;
        this.firstColorGreen = 0;
        this.firstColorBlue = 0;
        this.secondColorRed = 255;
        this.secondColorGreen = 255;
        this.secondColorBlue = 0;
        this.firstColorInHex = ColorsService.rgbToHex($ctrl.firstColorRed, $ctrl.firstColorBlue, $ctrl.firstColorGreen);
        this.secondColorInHex = ColorsService.rgbToHex($ctrl.secondColorRed, $ctrl.secondColorBlue, $ctrl.secondColorGreen);
        this.changeGradient = function () {
            const firstColorRGB = {
                "red": $ctrl.firstColorRed.length === 0 ? 0 : $ctrl.firstColorRed,
                "green": $ctrl.firstColorGreen.length === 0 ? 0 : $ctrl.firstColorGreen,
                "blue": $ctrl.firstColorBlue.length === 0 ? 0 : $ctrl.firstColorBlue
            };
            const secondColorRGB = {
                "red": $ctrl.secondColorRed.length === 0 ? 0 : $ctrl.secondColorRed,
                "green": $ctrl.secondColorGreen.length === 0 ? 0 : $ctrl.secondColorGreen,
                "blue": $ctrl.secondColorBlue.length === 0 ? 0 : $ctrl.secondColorBlue
            };
            $ctrl.gradient = RadialGradientsService.createDifferentlySpacedGradient(firstColorRGB, secondColorRGB);
            $ctrl.firstColorInHex = ColorsService.rgbToHex($ctrl.firstColorRed, $ctrl.firstColorBlue, $ctrl.firstColorGreen);
            $ctrl.secondColorInHex = ColorsService.rgbToHex($ctrl.secondColorRed, $ctrl.secondColorBlue, $ctrl.secondColorGreen);
        };
        this.changeGradient();
    });
})();