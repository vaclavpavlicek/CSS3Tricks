(function () {
    const app = angular.module("cssTricksApp");

    app.controller("HSLCtrl", function () {
        const $ctrl = this;
        this.hue = 211;
        this.saturation = 86;
        this.changeGradient = function () {
            $ctrl.hsl = [{
                "background": "hsl(" + Number($ctrl.hue) + ", " + Number($ctrl.saturation) + "%, 30%)"
            }, {
                "background": "hsl(" + Number($ctrl.hue) + ", " + Number($ctrl.saturation) + "%, 50%)"
            }, {
                "background": "hsl(" + Number($ctrl.hue) + ", " + Number($ctrl.saturation) + "%, 70%)"
            }, {
                "background": "hsl(" + Number($ctrl.hue) + ", " + Number($ctrl.saturation) + "%, 90%)"
            }];
        };
        this.changeGradient();
    });
})();