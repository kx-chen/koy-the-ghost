var unitGame = unitGame || {};

unitGame.Game.prototype.createItems = function() {
	this.stars = this.game.add.group();
    
    this.scoreText = this.game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#fff' });
    this.scoreText.fixedToCamera = true;
    this.stars.enableBody = true;

    
    for (var i = 0; i < 1200; i++) {
       
        this.star = this.stars.create(i * 70, 0, 'star');

        this.star.body.gravity.y = 300;

      
        this.star.body.bounce.y = 0.7 + Math.random() * 0.2;
    }

}