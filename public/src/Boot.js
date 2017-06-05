var unitGame = unitGame || {};

unitGame.Boot = function(){};

//setting game configuration and loading the assets for the loading screen
unitGame.Boot.prototype = {
  preload: function() {
    //assets we'll use in the loading screen

  },
  create: function() {
    
    this.game.world.setBounds(0, 0, 500000, this.game.height);
    
    this.game.scale.pageAlignHorizontally = true;
    this.game.scale.pageAlignVertically = true;

    this.game.scale.updateLayout(true);
    
    this.state.start('Preload');
  }
};