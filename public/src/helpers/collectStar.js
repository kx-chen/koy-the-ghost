 var unitGame = unitGame || {}

 unitGame.Game.prototype.collectStar = function (player, star) {
   star.kill()
   this.score += 10
   this.lives += 1

   this.scoreText.text = 'Score: ' + this.score
   this.livesText.text = 'Lives: ' + this.lives
 }
