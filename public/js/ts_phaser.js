/**
 * Created by jeffersonwu on 6/23/16.
 */
var SimpleGame = (function () {
    function SimpleGame() {
        this.game = new Phaser.Game(800, 600, Phaser.AUTO, 'content', {
            create: this.create,
            update: this.update,
            render: this.render
        });
    }
    SimpleGame.prototype.create = function () {
        var text = 'Hello World!';
        var style = { font: '65px Montserrat', fill: 'rgba(100,200,255,1.0)', align: 'center' };
        this.textValue = this.game.add.text(0, 0, "0", style);
        this.updateCount = 0;
    };
    SimpleGame.prototype.update = function () {
        this.textValue.text = (this.updateCount++).toString();
    };
    SimpleGame.prototype.render = function () {
        this.game.debug.text('This is drawn in render()', 0, 80);
    };
    return SimpleGame;
}());
window.addEventListener('load', function () {
    var game = new SimpleGame();
});
//# sourceMappingURL=ts_phaser.js.map