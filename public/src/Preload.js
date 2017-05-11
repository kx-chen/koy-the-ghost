var unitGame = unitGame || {};

unitGame.Preload = function() {};

unitGame.Preload.prototype = {


    preload: function() {

    var assetsPath = "../assets/";
    
    this.game.load.image('sky', assetsPath + 'sky.png');
    this.game.load.image('ground', assetsPath + 'platform.png');
    this.game.load.image('star', assetsPath + 'star.png');
    this.game.load.spritesheet('dude', assetsPath + 'dude.png', 32, 48);



	},

	create: function() {

    	this.state.start('Game');
	}


}
