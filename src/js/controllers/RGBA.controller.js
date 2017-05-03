(function () {
    const app = angular.module("cssTricksApp");

    app.controller("RGBACtrl", function () {
        const $ctrl = this;
        this.red = 13;
        this.green = 87;
        this.blue = 167;
        this.changeGradient = function () {
            $ctrl.rgba1 = {
                "background": "rgba(" + Number($ctrl.red) + ", " + Number($ctrl.green) + ", "
                + Number($ctrl.blue) + ", 0.2)"
            };
            $ctrl.rgba2 = {
                "background": "rgba(" + Number($ctrl.red) + ", " + Number($ctrl.green) + ", "
                + Number($ctrl.blue) + ", 0.4)"
            };
            $ctrl.rgba3 = {
                "background": "rgba(" + Number($ctrl.red) + ", " + Number($ctrl.green) + ", "
                + Number($ctrl.blue) + ", 0.6)"
            };
            $ctrl.rgba4 = {
                "background": "rgba(" + Number($ctrl.red) + ", " + Number($ctrl.green) + ", "
                + Number($ctrl.blue) + ", 0.8)"
            };
        };
        this.changeGradient();
    });
})();