var unitGame = unitGame || {}

unitGame.Game.prototype.spawnEnemy = function () {
  this.enemies = this.game.add.group()
  this.enemies.enableBody = true

  for (var i = 0; i < 1200; i++) {
    this.enemy = this.enemies.create(i + Math.random() * 50000, i + Math.random() * 5000, 'enemy')
    this.enemy.body.gravity.x = -100
  }
}
