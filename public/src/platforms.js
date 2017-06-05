var unitGame = unitGame || {};



unitGame.Game.prototype.createPlatforms = function() {
    
    
     // Platform
    this.platforms = this.game.add.group();
    this.platforms.enableBody = true;
    
        // Ground
    this.ground = this.platforms.create(0, this.game.world.height - 64, 'ground');
    this.ground.scale.setTo(4, 4);
    this.ground.body.immovable = true;
    
    
    
    this.ledge = this.platforms.create(400, 400, 'ground');
    this.ledge.body.immovable = true;

    this.ledge = this.platforms.create(-150, 250, 'ground');
    this.ledge.body.immovable = true;
    

 };


