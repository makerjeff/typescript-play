/**
 * Created by jeffersonwu on 6/21/16.
 */

module demo_25 {
    //any type
    var data:any;
    var info;
    var doNothing = function(arg){
        return arg;
    };

    //primitives
    var age:number = 21;
    var score:number = 24.345;
    var rating = 99.99;

    var hasData: boolean = true;
    var isReady = true;
    var isBald = function(arg:string) {return 'yes';};
    var hasHair = !!isBald('something'); //negating anything becomes 'false', double negate to be 'true'

    var firstName:string = 'John';
    var lastName = 'Papa';

    function getArrayLength(x:string[]){
        var len = x.length;
        return len;
    }
}
