var unitGame = unitGame || {};

unitGame.Boot = function(){};

//setting game configuration and loading the assets for the loading screen
unitGame.Boot.prototype = {
  preload: function() {
    //assets we'll use in the loading screen

  },
  create: function() {
  	 //scaling options
    this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
    
    //have the game centered horizontally
    this.scale.pageAlignHorizontally = true;
    this.scale.pageAlignVertically = true;
 

  
    this.state.start('Preload');
  }
};