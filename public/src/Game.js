var unitGame = unitGame || {};

unitGame.Game = function() {};


unitGame.Game.prototype.create = function() {

    
    
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.updateLayout(true);
       
        
        this.score = 0;

        // adds in sprites from the loader
        this.addSprites();
        
        // platforms.js
        this.createPlatforms();

        // items.js
        this.createItems();
        
        this.cursors = this.game.input.keyboard.createCursorKeys();
  
}

   


