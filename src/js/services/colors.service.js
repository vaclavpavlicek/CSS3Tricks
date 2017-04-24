(function () {
    const app = angular.module("cssTricksApp");

    app.service("ColorsService", function () {
        this.rgbToHex = function (r, g, b) {
            r = (!r)? 0 : r;
            g = (!g)? 0 : g;
            b = (!b)? 0 : b;
            return "#" + ("0" + parseInt(r, 10).toString(16)).slice(-2) +
                ("0" + parseInt(g, 10).toString(16)).slice(-2) +
                ("0" + parseInt(b, 10).toString(16)).slice(-2);
        };
    });
})();