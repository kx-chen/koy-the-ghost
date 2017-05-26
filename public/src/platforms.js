var unitGame = unitGame || {};



unitGame.Game.prototype.createPlatforms = function() {
    
    this.ledge = this.platforms.create(400, 400, 'ground');
    this.ledge.body.immovable = true;

    this.ledge = this.platforms.create(-150, 250, 'ground');
    this.ledge.body.immovable = true;
    
    
};


