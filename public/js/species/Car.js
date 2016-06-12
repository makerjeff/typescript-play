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
    Car.prototype.createButton = function (targetDiv) {
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
        targetDiv.appendChild(button);
        targetDiv.appendChild(startSound);
        console.log('A car with a ' + this.engine + ' was created.');
        button.addEventListener('click', function (e) {
            e.preventDefault();
            _this.updateText(buttonText); //update button text
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
    Car.prototype.updateText = function (targetText) {
        targetText.nodeValue = 'engine started. press to honk ' + this.engine;
    };
    return Car;
}());
// normal JS can go below here  
//# sourceMappingURL=Car.js.map