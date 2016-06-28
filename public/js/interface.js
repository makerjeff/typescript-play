/**
 * Created by jeffersonwu on 6/27/16.
 */
// a non-void function return type
function employee(person) {
    return 'Hi ' + person.firstname + ' ' + person.lastname + '! You are currently ' + person.age + ' years old!';
}
var jeff = { firstname: 'Jeff', lastname: 'Wu' };
var shirley = { firstname: 'Shirley', lastname: 'Wu' };
var dan = { firstname: 'Daniel', lastname: 'Casey' };
var josie = { firstname: 'Josie', lastname: 'Casey' };
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