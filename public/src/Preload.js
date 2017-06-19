// Preloads assets
var unitGame = unitGame || {}

unitGame.Preload = function () {}

unitGame.Preload.prototype = {

  preload: function () {
    var assetsPath = '../assets/'

    this.game.load.image('sky', assetsPath + 'background.png')
    this.game.load.image('ground', assetsPath + 'platform.png')
    this.game.load.image('star', assetsPath + 'star.png')

    var spriteWidth = 2560
    var width = spriteWidth / 10

    var height = 128

    this.game.load.spritesheet('dude', assetsPath + 'ghost.png', 56, 56)
    this.game.load.spritesheet('enemy', assetsPath + 'enemy-ghost.png', width, height)

    this.game.load.audio('soundtrack1', assetsPath + 'soundtrack-1.wav')
  },

  create: function () {
    this.state.start('Game')
    this.game.physics.startSystem(Phaser.Physics.ARCADE)
  }
}
