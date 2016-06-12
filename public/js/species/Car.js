/**
 * Created by jeffersonwu on 6/9/16.
 */
//modified for TS tutorial
var Car = (function () {
    //constructor
    function Car(engine, engineOn) {
        this.engine = engine;
        this.engineOn = engineOn;
        this.hornHonks = 0;
    }
    //functions
    Car.prototype.start = function () {
        alert('Engine started; ' + this.engine);
    };
    Car.prototype.stop = function () {
        alert('Engine started; ' + this.engine);
    };
    Car.prototype.createButton = function () {
        var button = document.createElement('button');
        var buttonText = document.createTextNode('start this ' + this.engine + ' engine.');
        var startSound = document.createElement('audio');
        startSound.src = './sound/carstartgarage.mp3';
        var carHorn = document.createElement('audio');
        carHorn.src = './sound/carhorn.mp3';
        //load a reference to 'this' to be used with same-level
        var self = this;
        button.appendChild(buttonText);
        document.body.appendChild(button);
        document.body.appendChild(startSound);
        console.log('A car with a ' + this.engine + ' was created.');
        button.addEventListener('click', function (e) {
            var numberOfHonks = 0;
            if (self.engineOn === false) {
                startSound.play();
                self.engineOn = true;
                console.log('starting ' + self.engine);
            }
            else {
                carHorn.play();
                self.hornHonks += 1;
                console.log(self.engine + ' is already on. Honking horn instead.');
                console.log(self.hornHonks);
                if (self.hornHonks >= 3) {
                    console.log(self.engine + ' engine exploded.');
                    button.parentNode.removeChild(this);
                }
            }
        });
    };
    return Car;
}());
//normal JS
window.addEventListener('load', function (e) {
    var subaru = new Car('2.5 Liter Boxer', false);
    var toyota = new Car('1.8 Liter inline 4', false);
    var nissan = new Car('2.0 Liter Turbo', false);
    subaru.createButton();
    toyota.createButton();
    nissan.createButton();
});
//# sourceMappingURL=Car.js.map