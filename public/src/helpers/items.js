var unitGame = unitGame || {}

unitGame.Game.prototype.createItems = function () {
  this.stars = this.game.add.group()
  this.stars.enableBody = true

  for (var i = 0; i < 1200; i++) {
    this.star = this.stars.create(i * 70, 0, 'star')

    this.star.body.gravity.y = 300
    this.star.body.bounce.y = 1 + Math.random() * 0.85654
  }
}
