var unitGame = unitGame || {};

unitGame.Game.prototype.spawnEnemy = function() {
    
 
    for (var i = 0; i < 1200; i++) {
       // TODO: randomize enemy spawning
        this.enemy = this.enemies.create(i * 350, 1000, 'enemy');

        this.enemy.body.gravity.y = 300;

      
        this.enemy.body.bounce.y = Math.random() * 7;
    }

    
    
}