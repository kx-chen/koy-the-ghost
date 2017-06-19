var unitGame = unitGame || {}

unitGame.Game.prototype.enemyCollide = function () {

  // Make sure this function doesn't get called again within 1 second
  if (this.game.time.now > this.timeDelay) {
    // wait 1 second
    this.timeDelay = this.game.time.now + 1000
    
    this.stopped = true
    if (this.stopped == true) {
      this.player.body.velocity.x = 0
      this.player.tint = 0xff0000
      
      var that = this
      setTimeout(function () {that.stopped = false; }, 1000)
    }

    // TODO: add function to change score text
    this.scoreText.text = 'Score: ' + this.score
    this.lives -= 1
    this.livesText.text = 'Lives: ' + this.lives

    checkIfOutOfLives.call(this, this.lives);
    
  }
}

function checkIfOutOfLives (lives) {
  if (lives === 0) {
      this.soundtrack1.stop()
  
      // Pass in score to gameover screen
      this.state.start('Gameover', true, false, this.score)
    }
}
