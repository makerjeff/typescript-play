/**
 * Created by jeffersonwu on 6/23/16.
 */

class SimpleGame {

    game: Phaser.Game;
    textValue: Phaser.Text;
    updateCount: number;


    constructor(){
        this.game = new Phaser.Game(800,600, Phaser.AUTO, 'content', {
            create: this.create,
            update: this.update,
            render: this.render
        });
    }

    create() {
        var text = 'Hello World!';
        var style = {font: '65px Montserrat', fill:'rgba(100,200,255,1.0)', align: 'center'};
        this.textValue = this.game.add.text(0,0,"0", style);
        this.updateCount = 0;
    }

    update() {
        this.textValue.text = (this.updateCount++).toString();
    }

    render() {
        this.game.debug.text('This is drawn in render()', 0, 80);
    }

}

window.addEventListener('load', () => {
    var game = new SimpleGame();
});