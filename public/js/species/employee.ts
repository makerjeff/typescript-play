/**
 * Employee Generator
 * Created by jeffersonwu on 6/5/16.
 */

module Employee {

    export class Human {

        static totalHumans = [];

        firstName: string;
        lastName: string;
        age: number;
        health: number;
        hireConfirm: string;


        constructor (first:string, last:string, age: number, healthAdjust:number) {

            this.firstName = first;
            this.lastName = last;
            this.age = age;
            this.health =  healthAdjust;

            Human.totalHumans.push(this);

            console.log('An employee by the name of ' + this.firstName + ' ' + this.lastName +
            ' was hired at the age of ' + this.age + ' at ' + this.health + ' health units.');
        }

        attack(target:Human, damage:number) {
            target.health -= damage;
        }

        receiveDamage(damage: number) {
            this.health -= damage;

            console.log(this.firstName + "'s health: " + this.health);
        }
    }
}