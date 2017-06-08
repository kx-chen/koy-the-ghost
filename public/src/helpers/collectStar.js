 
 var unitGame = unitGame || {};


unitGame.Game.prototype.collectStar = function(player, star){ 
     
        star.kill();
    
        this.score += 10;
    
        console.log(this.score);
    
    
        this.scoreText.text = 'Score: ' + this.score;
    
        
    
    }
    