/**
 * Created by jeffersonwu on 6/21/16.
 */
var demo_25;
(function (demo_25) {
    //any type
    var data;
    var info;
    var doNothing = function (arg) {
        return arg;
    };
    //primitives
    var age = 21;
    var score = 24.345;
    var rating = 99.99;
    var hasData = true;
    var isReady = true;
    var isBald = function (arg) { return 'yes'; };
    var hasHair = !!isBald('something'); //negating anything becomes 'false', double negate to be 'true'
    var firstName = 'John';
    var lastName = 'Papa';
    function getArrayLength(x) {
        return x.length;
    }
})(demo_25 || (demo_25 = {}));
//# sourceMappingURL=25_primitives.js.map