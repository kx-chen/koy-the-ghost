var unitGame = unitGame || {};

unitGame.Game.prototype.enemyCollide = function() {
    console.log("Player hit enemy.");

    
    this.game.destroy();

        
}