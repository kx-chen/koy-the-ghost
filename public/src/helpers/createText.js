var unitGame = unitGame || {};

unitGame.Game.prototype.createText = function() {
    this.scoreText = this.game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#fff' });
    this.scoreText.fixedToCamera = true;
}