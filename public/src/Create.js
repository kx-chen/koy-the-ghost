var unitGame = unitGame || {}

unitGame.Game = function () {}

unitGame.Game.prototype.create = function () {
  this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL
  this.game.scale.updateLayout(true)
  
  // the game is not stopped
  this.stopped = false
  // Start game off with 0 score and 3 lives
  this.score = 0
  
  // TODO: make this.lives a property on this.player
  this.lives = 3

  // adds in sprites from the loader
  this.addSprites()
  // platforms.js
  this.createPlatforms()
  // items.js
  this.createItems()
  this.addMusic()
  this.spawnEnemy()
  this.createText()

  // enemyCollide.js
  this.timeDelay = 0

  // Iniates the space key. this.spacekey is referenced later in Update.js
  this.spaceKey = this.game.input.keyboard.addKey(Phaser.Keyboard.SPACEBAR)

  this.player.body.velocity.x = 500
  // Instantiates the keyboard
  this.cursors = this.game.input.keyboard.createCursorKeys()
}
