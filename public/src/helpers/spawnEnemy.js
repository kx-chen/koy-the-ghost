var unitGame = unitGame || {};

unitGame.Game.prototype.spawnEnemy = function() {
    
    this.enemies = this.game.add.group();
    this.enemies.enableBody = true;
    // this.game.physics.arcade.enable(this.enemies);

    for (var i = 0; i < 12000; i++) {
       // TODO: randomize enemy spawning
        this.enemy = this.enemies.create(i + Math.random() * 50000, i + Math.random() * 5000, 'enemy');

        this.enemy.body.gravity.x = -100;

      
        // this.enemy.body.bounce.y = Math.random() * 7;
    }

    
    
}