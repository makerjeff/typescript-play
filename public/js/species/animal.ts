/**
 * Created by jeffersonwu on 6/4/16.
 */

module Animal {

    //enums at module level
    export enum biteLevel{
        light, medium, hard
    }

    export class Dog {
        alive: boolean;
        name: string;
        type: string;
        age: number;
        catchPhrase: string;

        health: number;

        constructor (alive: boolean, name:string, type:string, age:number, catchPhrase:string) {
            this.alive = alive;
            this.name = name;
            this.type = type;
            this.age = age;
            this.catchPhrase = catchPhrase;

            this.health = 100;
        }

        speak(message:string) {
            return this.name + ' says: ' + message;
        }

        bite(damage:number) {
            console.log('Rawrr!');
            this.adjustHealth(damage);
        }

        pee() {
            console.log(this.name + ' just peed.');
        }

        poop() {
            console.log(this.name + ' just pooped.');
        }

        //utility
        adjustHealth(amount:number) {

            //limit health to 100
            if (this.health > 100) {
                this.health = 100;
            }
            else if (amount < 0){
                this.health -= amount;
                console.log(amount + ' health subtracted');
            }
            else if (amount > 0) {
                this.health += amount;
                console.log(amount + ' health added');
            } else {
                console.log('no damage');
            }

            console.log(this.health);


        }
    }
}
