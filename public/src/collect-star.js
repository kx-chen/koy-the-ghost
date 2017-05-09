/* global score */
/* global scoreText */
function collectStar (player, star) {
    
  
    star.kill();

    score += 10;
    scoreText.text = 'Score: ' + score;

}