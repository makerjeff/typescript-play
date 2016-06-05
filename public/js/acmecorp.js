/**
 * Created by jeffersonwu on 6/2/16.
 */
//create a module
var AcmeCorp;
(function (AcmeCorp) {
    //currently does nothing.
    var moduleVar = "This is a variable inside a module";
    //export class
    var Greeter = (function () {
        //defines what the class should be like
        function Greeter(message) {
            this.decimal = 6;
            this.hex = 0xf00d;
            this.binary = 6;
            this.fullName = 'Bob Bobbington';
            this.age = 75;
            this.sentence = 'Hello, my name is ${ fullName }';
            //define vars
            this.greeting = message;
        }
        /**
         * Greets the person.
         * @returns {string} A greeting message.
         */
        Greeter.prototype.greet = function () {
            return 'Hello, ' + this.greeting;
        };
        /**
         * Yells at a person.
         * @returns {string} A yelling message.
         */
        Greeter.prototype.yell = function () {
            return 'Hey ' + this.greeting + ', get over here!';
        };
        /**
         * Insult the person.
         * @returns {string} An insulting message.
         */
        Greeter.prototype.insult = function () {
            return 'Hey Mother Fucking ' + this.greeting + ', git yo mofo ass ova hea!';
        };
        return Greeter;
    }());
    AcmeCorp.Greeter = Greeter;
})(AcmeCorp || (AcmeCorp = {}));
//# sourceMappingURL=acmecorp.js.map