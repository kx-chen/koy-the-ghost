var unitGame = unitGame || {}

unitGame.Game.prototype.update = function () {
  this.game.physics.arcade.collide(this.player, this.platforms)
  this.game.physics.arcade.collide(this.stars, this.platforms)
  this.game.physics.arcade.overlap(this.player, this.stars, this.collectStar, null, this)
  this.game.physics.arcade.overlap(this.player, this.enemies, this.enemyCollide, null, this)

  this.game.physics.arcade.collide(this.enemies, this.platforms)

  this.player.animations.play('right')
  
  if(this.stopped == false) {
    this.player.body.velocity.x = 500
    this.player.tint = 0xffffff
  }
  
  console.log("Update.js: " + this.stopped)
  if (this.cursors.right.isDown) {
    this.player.body.velocity.x = 150

  } 

  if (this.cursors.up.isDown) {
    this.player.body.velocity.y = -500
  }

  if (this.spaceKey.isDown) {
    this.player.body.velocity.y = -500
  } 

  this.camera.follow(this.player)


  this.score += 0.5
  this.scoreText.text = 'Score: ' + Math.round(this.score)
}
