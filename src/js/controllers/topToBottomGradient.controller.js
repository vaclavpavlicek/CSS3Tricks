(function () {
    const app = angular.module("cssTricksApp");

    app.controller("TopToBottomGradientCtrl", function (LinearGradientsService) {
        const $ctrl = this;
        this.firstColorRed = 255;
        this.firstColorGreen = 0;
        this.firstColorBlue = 0;
        this.secondColorRed = 255;
        this.secondColorGreen = 255;
        this.secondColorBlue = 0;
        this.changeGradient = function () {
            const firstColorRGB = {
                "red": this.firstColorRed,
                "green": this.firstColorGreen,
                "blue": this.firstColorBlue
            };
            const secondColorRGB = {
                "red": this.secondColorRed,
                "green": this.secondColorGreen,
                "blue": this.secondColorBlue
            };
            $ctrl.gradient = LinearGradientsService.createTopToBottomGradient(firstColorRGB, secondColorRGB);
        };
        this.changeGradient();
    });
})();