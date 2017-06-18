 var unitGame = unitGame || {};
 
 unitGame.Game.prototype.addMusic = function() {

 	// Checks if soundtrack1 is already playing
    //if (!this.soundtrack1 || !this.soundtrack1.isPlaying) { 

	    this.soundtrack1 = this.game.add.audio('soundtrack1');
	    this.soundtrack1.play();

	    this.soundtrack1.loopFull();
 	//}
 }