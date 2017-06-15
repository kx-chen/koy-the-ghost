var unitGame = unitGame || {};

unitGame.Game.prototype.enemyCollide = function() {
    console.log("play collided with enemy");

    // TODO: add function to change score text 
    this.scoreText.text = 'Score: ' + this.score;
        
}