 var unitGame = unitGame || {}

 unitGame.Game.prototype.addMusic = function () {
   this.soundtrack1 = this.game.add.audio('soundtrack1')
   this.soundtrack1.play()

   this.soundtrack1.loopFull()
 }
