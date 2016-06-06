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
    var Dog = (function () {
        function Dog(alive, name, type, age, catchPhrase) {
            this.alive = alive;
            this.name = name;
            this.type = type;
            this.age = age;
            this.catchPhrase = catchPhrase;
            this.health = 100;
        }
        Dog.prototype.speak = function (message) {
            return this.name + ' says: ' + message;
        };
        Dog.prototype.bite = function (damage) {
            console.log('Rawrr!');
            this.adjustHealth(damage);
        };
        Dog.prototype.pee = function () {
            console.log(this.name + ' just peed.');
        };
        Dog.prototype.poop = function () {
            console.log(this.name + ' just pooped.');
        };
        //utility
        Dog.prototype.adjustHealth = function (amount) {
            //limit health to 100
            if (this.health > 100) {
                this.health = 100;
            }
            else if (amount < 0) {
                this.health -= amount;
                console.log(amount + ' health subtracted');
            }
            else if (amount > 0) {
                this.health += amount;
                console.log(amount + ' health added');
            }
            else {
                console.log('no damage');
            }
            console.log(this.health);
        };
        return Dog;
    }());
    Animal.Dog = Dog;
})(Animal || (Animal = {}));
//# sourceMappingURL=animal.js.map