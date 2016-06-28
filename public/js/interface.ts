/**
 * Created by jeffersonwu on 6/27/16.
 */

//mah een-tah-fayce.
interface Person {
    firstname: string;
    lastname: string;
    age:number;
}

// a non-void function return type
function employee(person: Person): string {
    return 'Hi ' + person.firstname + ' ' + person.lastname + '! You are currently ' + person.age + ' years old!';
}

let jeff = {firstname: 'Jeff', lastname: 'Wu'};
let shirley = {firstname: 'Shirley', lastname: 'Wu'};

let dan = {firstname: 'Daniel', lastname: 'Casey'};
let josie = {firstname: 'Josie', lastname: 'Casey'};



window.addEventListener('load', function(e){
    let div = document.createElement('div');
    div.id = 'something_wonderful';

    div.style.padding = '20px';
    div.style.display = 'flex';
    div.style.position = 'absolute';
    div.style.height = '300px';
    div.style.width = '600px';
    
    document.body.appendChild(div);
});
