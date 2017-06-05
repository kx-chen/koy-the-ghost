var unitGame = unitGame || {};



unitGame.Game.prototype.addSprites = function() {
    
    this.sky = this.game.add.tileSprite(0, 0, 1500000, 1500000 , 'sky');

    // Adds in player
    this.player = this.game.add.sprite(32, 125, 'dude');
    // this.player.scale.setTo(4,4);

    
    this.game.physics.arcade.enable(this.player);



    this.player.body.bounce.y = 0.2;
    this.player.body.gravity.y = 300;
    this.player.body.collideWorldBounds = false;
    
        
    this.player.animations.add('right', [0, 1, 2, 3, 4, 5, 6], 7, true);
    this.player.animations.add('left', [8, 9, 10, 11, 12, 13, 14], 7, true);
    

    
    this.enemy = this.game.add.sprite(32, 125, "enemy");
    this.game.physics.arcade.enable(this.enemy);
    
    this.enemy.animations.add('right', [0, 1, 2, 3, 4, 5, 6], 7, true);
    this.enemy.animations.add('left', [8, 9, 10, 11, 12, 13, 14], 7, true);
    
    
    this.enemy.body.bounce.y = 0.2;
    this.enemy.body.gravity.y = 300;
    this.enemy.body.collideWorldBounds = true;
    
    
    
};


