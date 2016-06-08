/**
 * Created by jeffersonwu on 6/5/16.
 */


export class Randomizer {
    static randomNumber(rangeStart:number, rangeEnd:number) {
        return Math.ceil((Math.random() * rangeEnd)) + rangeStart;
    }
}

