/**
 * Employee Generator
 * Created by jeffersonwu on 6/5/16.
 */
var Employee;
(function (Employee) {
    var Human = (function () {
        function Human(first, last, age, healthAdjust) {
            this.firstName = first;
            this.lastName = last;
            this.age = age;
            this.health = healthAdjust;
            Human.totalHumans.push(this);
            console.log('An employee by the name of ' + this.firstName + ' ' + this.lastName +
                ' was hired at the age of ' + this.age + ' at ' + this.health + ' health units.');
        }
        Human.prototype.attack = function (target, damage) {
            target.health -= damage;
        };
        Human.prototype.receiveDamage = function (damage) {
            this.health -= damage;
            console.log(this.firstName + "'s health: " + this.health);
        };
        Human.totalHumans = [];
        return Human;
    }());
    Employee.Human = Human;
})(Employee || (Employee = {}));
//# sourceMappingURL=Employee.js.map