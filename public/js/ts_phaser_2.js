/**
 * Created by jeffersonwu on 6/23/16.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var GameFromScratch;
(function (GameFromScratch) {
    //title state
    var TitleScreenState = (function (_super) {
        __extends(TitleScreenState, _super);
        function TitleScreenState() {
            _super.call(this);
        }
        TitleScreenState.prototype.preload = function () {
            this.load.image('title', '/img/game-of-awesome.jpg');
        };
        TitleScreenState.prototype.create = function () {
            this.titleScreenImage = this.add.sprite(0, 0, 'title');
            this.input.onTap.addOnce(this.titleClicked, this);
        };
        TitleScreenState.prototype.titleClicked = function () {
            this.game.state.start('GameRunningState');
        };
        return TitleScreenState;
    }(Phaser.State));
    GameFromScratch.TitleScreenState = TitleScreenState;
    //game state
    var GameRunningState = (function (_super) {
        __extends(GameRunningState, _super);
        function GameRunningState() {
            _super.call(this);
        }
        GameRunningState.prototype.create = function () {
            var style = { font: '65px Arial', fill: '#ff0000', align: 'center' };
            this.textValue = this.game.add.text(0, 0, '0', style);
            this.updateCount = 0;
        };
        GameRunningState.prototype.update = function () {
            this.textValue.text = (this.updateCount++).toString();
        };
        GameRunningState.prototype.render = function () {
            this.game.debug.text('This is drawn in render()', 0, 80);
        };
        return GameRunningState;
    }(Phaser.State));
    GameFromScratch.GameRunningState = GameRunningState;
    //initiate the game
    var SimpleGame = (function () {
        function SimpleGame() {
            this.game = new Phaser.Game(800, 600, Phaser.WEBGL, 'content');
            this.game.state.add('GameRunningState', false);
            this.game.state.add('TitleScreenState', false);
            this.game.state.start('TitleScreenState', true, true);
        }
        return SimpleGame;
    }());
    GameFromScratch.SimpleGame = SimpleGame;
})(GameFromScratch || (GameFromScratch = {}));
window.addEventListener('load', function () {
    var game = new GameFromScratch.SimpleGame();
});
//# sourceMappingURL=ts_phaser_2.js.map