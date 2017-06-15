var unitGame = unitGame || {};

unitGame.Game = function() {};


unitGame.Game.prototype.create = function() {

    
    
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.updateLayout(true);
       
        
        this.score = 0;

        // adds in sprites from the loader
        this.addSprites();
        
  
        this.soundtrack2 = this.game.add.audio('soundtrack2');
        
        this.soundtrack2.play();
        // platforms.js
        this.createPlatforms();

        // items.js
        this.createItems();
        
        
        // Iniates the space key. this.spacekey is referenced later in Update.js
        this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR);
        
        // Instantiates the keyboard
        this.cursors = this.game.input.keyboard.createCursorKeys();
  
}

   


