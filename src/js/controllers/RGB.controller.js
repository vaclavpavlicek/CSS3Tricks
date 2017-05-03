(function () {
    const app = angular.module("cssTricksApp");

    app.controller("RGBCtrl", function () {
        const $ctrl = this;
        this.red = 13;
        this.green = 87;
        this.blue = 167;
        this.inputChanged = function () {
            $ctrl.rgb = [{
                "background": "rgb(" + Number($ctrl.red) + ", " + Number($ctrl.green) + ", "
                + Number($ctrl.blue) + ")",
                "opacity": 0.2
            }, {
                "background": "rgb(" + Number($ctrl.red) + ", " + Number($ctrl.green) + ", "
                + Number($ctrl.blue) + ")",
                "opacity": 0.4
            }, {
                "background": "rgb(" + Number($ctrl.red) + ", " + Number($ctrl.green) + ", "
                + Number($ctrl.blue) + ")",
                "opacity": 0.6
            }, {
                "background": "rgb(" + Number($ctrl.red) + ", " + Number($ctrl.green) + ", "
                + Number($ctrl.blue) + ")",
                "opacity": 0.8
            }];
        };
        this.inputChanged();
    });
})();