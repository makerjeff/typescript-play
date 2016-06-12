/**
 * Created by jeffersonwu on 6/9/16.
 */

//modified for TS tutorial
class Car {
    //variables
    engine: string;
    engineOn: boolean;
    hornHonks: number;

    //constructor
    constructor(engine:string) {
        this.engine = engine;
        this.engineOn = false;
        this.hornHonks = 0;
    }

    //functions
    start() {
        alert('Engine started: ' + this.engine);
    }

    stop() {
        alert('Engine stopped: ' + this.engine);
    }

    createButton(targetDiv) {
        let button = document.createElement('button');
        let buttonText = document.createTextNode('start this ' + this.engine + ' engine.');

        let startSound = document.createElement('audio');
        startSound.src = './sound/carstartgarage.mp3';

        let carHorn = document.createElement('audio');
        carHorn.src = './sound/carhorn.mp3';

        let carExplode = document.createElement('audio');
        carExplode.src = './sound/carexplode.mp3';

        //load a reference to 'this' to be used with nested functions. deprecated by fat-arrow lambda =>
        //var self = this;

        button.appendChild(buttonText);
        targetDiv.appendChild(button);
        targetDiv.appendChild(startSound);

        console.log('A car with a ' + this.engine + ' was created.');

        button.addEventListener('click', (e) => {
            e.preventDefault();

            this.updateText(buttonText);    //update button text


            if(this.engineOn === false) {
                startSound.play();
                this.engineOn = true;
                console.log('starting ' + this.engine);
            }
            else if (this.hornHonks < 3) {
                carHorn.play();
                this.hornHonks += 1;

                console.log(this.engine + ' is already on. Honking horn instead.');
                console.log(this.hornHonks);
            }
            else {
                console.log( this.engine + ' engine exploded.');
                carExplode.play();
                button.parentNode.removeChild(button);
            }

        });
    }

    updateText(targetText) {
        targetText.nodeValue = 'engine started. press to honk ' + this.engine;
    }
}

// normal JS can go below here 