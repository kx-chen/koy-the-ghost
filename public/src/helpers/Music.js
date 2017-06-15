 var unitGame = unitGame || {};
 
 unitGame.Game.prototype.addMusic = function() {
       
        this.soundtrack2 = this.game.add.audio('soundtrack2');
        
        this.soundtrack2.play();
        
        this.soundtrack2.loopFull();
 }