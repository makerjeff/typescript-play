/**
 * Created by jeffersonwu on 6/27/16.
 */

//mah een-tah-fayce.
interface Person {
    firstname: string;
    lastname: string;
    age:number;
}

interface MegaPerson {
    firstname: string;
    lastname: string;
    age: number;
}


class MegaEmployee {

    constructor(data: MegaPerson) {

        //TODO: figure this out.

    }



    employee(person: MegaPerson): string {
        return 'Hi there, ' + person.firstname + ' ' + person.lastname + '! You are ' + person.age + ' years old. ';
    }

    createMonkey(person: MegaPerson) {
        var monkey = document.createElement('button');
        var monkeyText = document.createTextNode(person.firstname + ' ' + person.lastname);
        monkey.appendChild(monkeyText);
        document.body.appendChild(monkey);
        return this;
    }
}

// a non-void function return type
function employee(person: Person): string {
    return 'Hi ' + person.firstname + ' ' + person.lastname + '! You are currently ' + person.age + ' years old!';
}

let jeff = {firstname: 'Jeff', lastname: 'Wu', age: 33};
let shirley = {firstname: 'Shirley', lastname: 'Wu', age:37};

let dan = {firstname: 'Daniel', lastname: 'Casey', age:31};
let josie = {firstname: 'Josie', lastname: 'Casey', age:34};



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
