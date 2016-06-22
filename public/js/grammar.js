/**
 * Created by jeffersonwu on 6/21/16.
 */
var x = 1;
var y;
var lastName = 'Papa';
var firstName = 'John';
var num1 = 100;
var num2 = 20;
var names = ['jeff', 'shirley', 'wynbert', 'valeree', 'wayne', 'julie', 'kelly', 'julie'];
names.forEach(function (element, index, array) {
    var div = document.createElement('div');
    div.id = 'div_' + index + '_layer';
    div.innerHTML = addNumbers(100, 100, index);
    document.body.appendChild(div);
});
function addNumbers(n1, n2, n3) {
    var result = n1 + n2 + n3;
    var msg = 'Sum is = ' + result;
    //alert(msg);
    return msg;
}
//# sourceMappingURL=grammar.js.map