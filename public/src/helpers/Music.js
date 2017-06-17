 var unitGame = unitGame || {};
 
 unitGame.Game.prototype.addMusic = function() {
  
  // TODO: don't repeat self
     this.soundtrack1 = this.game.add.audio('soundtrack1');
     // this.soundtrack2 = this.game.add.audio('soundtrack2');
     
     // this.soundtrack2.play();
     this.soundtrack1.play();
     
     // this.soundtrack2.loopFull();
     this.soundtrack1.loopFull();
 }