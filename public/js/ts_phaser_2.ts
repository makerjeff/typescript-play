/**
 * Created by jeffersonwu on 6/23/16.
 */

module GameFromScratch {

    //title state
    export class TitleScreenState extends Phaser.State {

        game: Phaser.Game;
        titleScreenImage: Phaser.Sprite;

        constructor() {
            super();
        }

        preload() {
            this.load.image('title','/img/game-of-awesome.jpg');
        }

        create() {
            this.titleScreenImage = this.add.sprite(0,0,'title');
            this.input.onTap.addOnce(this.titleClicked, this);
        }

        titleClicked() {
            this.game.state.start('GameRunningState');
        }
    }

    //game state
    export class GameRunningState extends Phaser.State {

        constructor(){
            super();
        }

        textValue: Phaser.Text;
        updateCount: number;

        create(){
            var style = {font: '65px Arial', fill: '#ff0000', align: 'center'};
            this.textValue = this.game.add.text(0,0,'0',style);
            this.updateCount = 0;
        }
        update(){
            this.textValue.text = (this.updateCount++).toString();
        }

        render() {
            this.game.debug.text('This is drawn in render()', 0, 80);
        }
    }

    //initiate the game
    export class SimpleGame {
        game: Phaser.Game;

        constructor(){
            this.game = new Phaser.Game(800,600, Phaser.WEBGL, 'content');

            this.game.state.add('GameRunningState', false);
            this.game.state.add('TitleScreenState', false);
            this.game.state.start('TitleScreenState',true,true);
        }
    }
}

window.addEventListener('load', () => {
    var game = new GameFromScratch.SimpleGame();
});