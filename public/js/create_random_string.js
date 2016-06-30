/**
 * Created by jeffersonwu on 6/30/16.
 */

var CRS = {
    //possible values
    lowercase: 'abcdefghijklmnopqrstuvwxyz',
    uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    numerics: '1234567890',
    possibles: CRS.lowercase + CRS.uppercase + CRS.numerics,

    createRandomString: function(number_of_chars) {
        var returnString = [];

        for(var i = 0; i < number_of_chars; i++) {
            returnString.push(CRS.possibles[Math.floor(Math.random() * CRS.possibles.length)]);
        }

        return returnString.join('');
    }
};


