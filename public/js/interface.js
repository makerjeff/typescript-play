/**
 * Created by jeffersonwu on 6/27/16.
 */
var MegaEmployee = (function () {
    function MegaEmployee(data) {
        //TODO: figure this out.
    }
    MegaEmployee.prototype.employee = function (person) {
        return 'Hi there, ' + person.firstname + ' ' + person.lastname + '! You are ' + person.age + ' years old. ';
    };
    MegaEmployee.prototype.createMonkey = function (person) {
        var monkey = document.createElement('button');
        var monkeyText = document.createTextNode(person.firstname + ' ' + person.lastname);
        monkey.appendChild(monkeyText);
        document.body.appendChild(monkey);
        return this;
    };
    return MegaEmployee;
}());
// a non-void function return type
function employee(person) {
    return 'Hi ' + person.firstname + ' ' + person.lastname + '! You are currently ' + person.age + ' years old!';
}
var jeff = { firstname: 'Jeff', lastname: 'Wu', age: 33 };
var shirley = { firstname: 'Shirley', lastname: 'Wu', age: 37 };
var dan = { firstname: 'Daniel', lastname: 'Casey', age: 31 };
var josie = { firstname: 'Josie', lastname: 'Casey', age: 34 };
window.addEventListener('load', function (e) {
    var div = document.createElement('div');
    div.id = 'something_wonderful';
    div.style.padding = '20px';
    div.style.display = 'flex';
    div.style.position = 'absolute';
    div.style.height = '300px';
    div.style.width = '600px';
    document.body.appendChild(div);
});
//# sourceMappingURL=interface.js.map