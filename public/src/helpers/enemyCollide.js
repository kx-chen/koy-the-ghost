var unitGame = unitGame || {};

unitGame.Game.prototype.enemyCollide = function() {
    console.log("play collided with enemy");
    // Gameover
     if (this.game.time.now > this.timeDelay) {

        // wait 1 second
        this.timeDelay = this.game.time.now + 1000;

        // TODO: add function to change score text 
	    this.scoreText.text = 'Score: ' + this.score;
	    this.lives -= 1;
	    this.livesText.text = 'Lives: ' + this.lives;
    
		    if (this.lives == 0) {
	
			    this.soundtrack1.stop();
	
			    this.state.start('Gameover');
			}
    }
}