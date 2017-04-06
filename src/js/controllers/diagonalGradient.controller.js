(function () {
    const app = angular.module("cssTricksApp");

    app.controller("DiagonalGradientCtrl", function (LinearGradientsService) {
        const $ctrl = this;
        this.firstColorRed = 255;
        this.firstColorGreen = 0;
        this.firstColorBlue = 0;
        this.secondColorRed = 255;
        this.secondColorGreen = 255;
        this.secondColorBlue = 0;
        this.changeGradient = function () {
            const firstColorRGB = {
                "red": $ctrl.firstColorRed.length == 0 ? 0 : $ctrl.firstColorRed,
                "green": $ctrl.firstColorGreen.length == 0 ? 0 : $ctrl.firstColorGreen,
                "blue": $ctrl.firstColorBlue.length == 0 ? 0 : $ctrl.firstColorBlue
            };
            const secondColorRGB = {
                "red": $ctrl.secondColorRed == 0 ? 0 : $ctrl.secondColorRed,
                "green": $ctrl.secondColorGreen == 0 ? 0 : $ctrl.secondColorGreen,
                "blue": $ctrl.secondColorBlue == 0 ? 0 : $ctrl.secondColorBlue
            };
            $ctrl.gradient = LinearGradientsService.createDiagonalGradient(firstColorRGB, secondColorRGB);
        };
        this.changeGradient();
    });
})();