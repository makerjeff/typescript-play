/**
 * Created by jeffersonwu on 6/3/16.
 */
//volt-amp calculation: Watts actually is Volt-Amps, so = volt * amps.
//watts = volt*amps
//amps = watts/volt
//volt = watts/amps
var VoltAmp;
(function (VoltAmp) {
    var Calculate = (function () {
        function Calculate(volts, watts) {
        }
        Calculate.prototype.watts = function () {
        };
        return Calculate;
    }());
    VoltAmp.Calculate = Calculate;
})(VoltAmp || (VoltAmp = {}));
//# sourceMappingURL=voltamp.js.map