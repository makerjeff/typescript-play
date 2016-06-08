/**
 * Created by jeffersonwu on 6/5/16.
 */
"use strict";
var Randomizer = (function () {
    function Randomizer() {
    }
    Randomizer.randomNumber = function (rangeStart, rangeEnd) {
        return Math.ceil((Math.random() * rangeEnd)) + rangeStart;
    };
    return Randomizer;
}());
exports.Randomizer = Randomizer;
//# sourceMappingURL=Randomizer.js.map