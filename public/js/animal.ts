/**
 * Created by jeffersonwu on 6/4/16.
 */

module Animal {

    //enums at module level
    export enum biteLevel{
        light, medium, hard
    }
    
    export class dog {
        alive: boolean;
        name: string;
        type: string;
        age: number;
        catchPhrase: string;

        constructor (alive: boolean, name:string, type:string, age:number, catchPhrase:string) {
            this.alive = alive;
            this.name = name;
            this.type = type;
            this.age = age;
            this.catchPhrase = catchPhrase;
        }

        speak(message:string) {
            return this.name + ' says: ${catchPhrase}';
        }

        bite(biteLevel)

        pee() {
            console.log(this.name + ' just peed.');
        }

        poop() {
            console.log(this.name + ' just pooped.');
        }
    }
}
