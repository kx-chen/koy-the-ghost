var unitGame = unitGame || {}

unitGame.Game.prototype.addSprites = function () {
  this.sky = this.game.add.tileSprite(0, 0, 1500000, 1500000, 'sky')

        // Adds in player
  this.player = this.game.add.sprite(32, 125, 'dude')
  this.player.scale.setTo(2, 2)
  this.player.enableBody = true

  this.game.physics.arcade.enable(this.player)

  this.player.body.gravity.y = 1000
  this.player.body.collideWorldBounds = true

  this.player.animations.add('right', [0, 1], 2, true)
}
