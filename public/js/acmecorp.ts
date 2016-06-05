/**
 * Created by jeffersonwu on 6/2/16.
 */

//create a module
module AcmeCorp {

    //currently does nothing.
    let moduleVar: string = "This is a variable inside a module";


    //export class
    export class Greeter {

        //declare vars
        greeting: string;
        isDone: boolean;
        decimal: number = 6;
        hex: number = 0xf00d;
        binary: number = 0b0110;

        fullName: string = 'Bob Bobbington';
        age: number = 75;
        sentence: string = 'Hello, my name is ${ fullName }';

        //defines what the class should be like
        constructor (message:string) {
            //define vars
            this.greeting = message;
        }

        /**
         * Greets the person.
         * @returns {string} A greeting message.
         */
        greet(){
            return 'Hello, ' + this.greeting;
        }

        /**
         * Yells at a person.
         * @returns {string} A yelling message.
         */
        yell(){
            return 'Hey ' + this.greeting + ', get over here!';
        }

        /**
         * Insult the person.
         * @returns {string} An insulting message.
         */
        insult(){
            return 'Hey Mother Fucking ' + this.greeting + ', git yo mofo ass ova hea!';
        }

    }
}
