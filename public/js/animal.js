/**
 * Created by jeffersonwu on 6/4/16.
 */
var Animal;
(function (Animal) {
    //enums at module level
    (function (biteLevel) {
        biteLevel[biteLevel["light"] = 0] = "light";
        biteLevel[biteLevel["medium"] = 1] = "medium";
        biteLevel[biteLevel["hard"] = 2] = "hard";
    })(Animal.biteLevel || (Animal.biteLevel = {}));
    var biteLevel = Animal.biteLevel;
    var dog = (function () {
        function dog(alive, name, type, age, catchPhrase) {
            this.alive = alive;
            this.name = name;
            this.type = type;
            this.age = age;
            this.catchPhrase = catchPhrase;
        }
        dog.prototype.speak = function (message) {
            return this.name + ' says: ${catchPhrase}';
        };
        dog.prototype.pee = function () {
            console.log(this.name + ' just peed.');
        };
        dog.prototype.poop = function () {
            console.log(this.name + ' just pooped.');
        };
        return dog;
    }());
    Animal.dog = dog;
})(Animal || (Animal = {}));
//# sourceMappingURL=animal.js.map