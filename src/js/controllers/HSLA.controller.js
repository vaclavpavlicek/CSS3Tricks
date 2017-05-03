(function () {
    const app = angular.module("cssTricksApp");

    app.controller("HSLACtrl", function () {
        const $ctrl = this;
        this.hue = 211;
        this.saturation = 86;
        this.changeGradient = function () {
            $ctrl.hsla = [{
                "background": "hsla(" + Number($ctrl.hue) + ", " + Number($ctrl.saturation) + "%, 30%, 0.3)"
            }, {
                "background": "hsla(" + Number($ctrl.hue) + ", " + Number($ctrl.saturation) + "%, 50%, 0.3)"
            }, {
                "background": "hsla(" + Number($ctrl.hue) + ", " + Number($ctrl.saturation) + "%, 70%, 0.3)"
            }, {
                "background": "hsla(" + Number($ctrl.hue) + ", " + Number($ctrl.saturation) + "%, 90%, 0.3)"
            }];
        };
        this.changeGradient();
    });
})();