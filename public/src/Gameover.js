// Launches the gameover screen

var unitGame = unitGame || {};

unitGame.Gameover = function() {};

unitGame.Gameover.prototype = {
	preload: function() {
		console.log('lol you died');
	},

	create: function() {
		this.gameOverText = this.game.add.text(0, 550, 'Game over. Click to restart.', { fontSize: '110px', fill: '#fff'});

	}, 
	
	update: function() {
		this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
		
		if (this.game.input.activePointer.isDown) {
           this.state.start('Game');
        }
	}
}