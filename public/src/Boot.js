var unitGame = unitGame || {};

unitGame.Boot = function(){};

//setting game configuration and loading the assets for the loading screen
unitGame.Boot.prototype = {
  preload: function() {
    //assets we'll use in the loading screen

  },
  create: function() {

  
    this.state.start('Preload');
  }
};