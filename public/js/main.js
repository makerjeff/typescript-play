/**
 * Created by jeffersonwu on 6/5/16.
 */
window.addEventListener('load', function (e) {
    console.log('Everything including images, sounds, etc. have been loaded.');
    var master = new Employee.Human('Master', 'JIIFE', 1, 1000);
    var jeff = new Employee.Human('Jeff', 'Wu', 32, 100);
    var shirley = new Employee.Human('Shirley', 'Wu', 35, 100);
    var josie = new Employee.Human('Josie', 'Casey', 31, 100);
    var dan = new Employee.Human('Dan', 'Casey', 33, 100);
    var jonathan = new Employee.Human('Jonathan', 'Yang', 22, 100);
    var sarah = new Employee.Human('Sarah', 'Yang', 20, 100);
    var kyle = new Employee.Human('Kyle', 'Yang', 18, 100);
    var containerDiv = document.getElementById('container');
    Employee.Human.totalHumans.forEach(function (element, index, array) {
        var button = document.createElement('div');
        button.setAttribute('id', element.firstName);
        button.classList.add('bootan');
        var buttonText = document.createTextNode('attack ' + element.firstName + '!');
        button.addEventListener('click', function (e) {
            //console.log(array[index]);
            element.receiveDamage(10);
            if (element.health <= 0) {
                console.log(element.firstName + ' has been killed.');
                var elem = document.getElementById(element.firstName);
                elem.parentNode.removeChild(this);
            }
        });
        button.appendChild(buttonText);
        containerDiv.appendChild(button);
    });
});
//just to show that this loads first
window.addEventListener('DOMContentLoaded', function (e) {
    console.log('DOM content (text, elements, etc) loaded.');
});
//# sourceMappingURL=main.js.map