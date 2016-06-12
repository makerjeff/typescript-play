/**
 * Created by jeffersonwu on 6/9/16.
 */
//modified for TS tutorial
var Car = (function () {
    //constructor
    function Car(engine) {
        this.engine = engine;
        this.engineOn = false;
        this.hornHonks = 0;
    }
    //functions
    Car.prototype.start = function () {
        alert('Engine started: ' + this.engine);
    };
    Car.prototype.stop = function () {
        alert('Engine stopped: ' + this.engine);
    };
    Car.prototype.createButton = function () {
        var _this = this;
        var button = document.createElement('button');
        var buttonText = document.createTextNode('start this ' + this.engine + ' engine.');
        var startSound = document.createElement('audio');
        startSound.src = './sound/carstartgarage.mp3';
        var carHorn = document.createElement('audio');
        carHorn.src = './sound/carhorn.mp3';
        var carExplode = document.createElement('audio');
        carExplode.src = './sound/carexplode.mp3';
        //load a reference to 'this' to be used with nested functions. deprecated by fat-arrow lambda =>
        //var self = this;
        button.appendChild(buttonText);
        document.body.appendChild(button);
        document.body.appendChild(startSound);
        console.log('A car with a ' + this.engine + ' was created.');
        button.addEventListener('click', function (e) {
            e.preventDefault();
            if (_this.engineOn === false) {
                startSound.play();
                _this.engineOn = true;
                console.log('starting ' + _this.engine);
            }
            else if (_this.hornHonks < 3) {
                carHorn.play();
                _this.hornHonks += 1;
                console.log(_this.engine + ' is already on. Honking horn instead.');
                console.log(_this.hornHonks);
            }
            else {
                console.log(_this.engine + ' engine exploded.');
                carExplode.play();
                button.parentNode.removeChild(button);
            }
        });
    };
    return Car;
}());
//normal JS
window.addEventListener('load', function (e) {
    e.preventDefault();
    var subaru = new Car('2.5 Liter Boxer');
    var toyota = new Car('1.8 Liter inline 4');
    var nissan = new Car('2.0 Liter Turbo');
    subaru.createButton();
    toyota.createButton();
    nissan.createButton();
});
//# sourceMappingURL=Car.js.map