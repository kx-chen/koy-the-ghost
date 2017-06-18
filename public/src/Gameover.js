// Launches the gameover screen

var unitGame = unitGame || {};

unitGame.Gameover = function() {};

unitGame.Gameover.prototype = {
	preload: function() {
		console.log('lol you died');
	},

	create: function() {
		this.gameOverText = this.game.add.text(300, 600, 'Game over. Press spacebar to restart.', { fontSize: '64px', fill: '#fff'});

	}, 
	
	update: function() {
		this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		
		if (this.spaceKey.isDown) {
           this.state.start('Game');
        }
	}
}