
'use strict';
function update() {

  
    game.physics.arcade.collide(player, platforms);
    game.physics.arcade.collide(stars, platforms);
    
   
   
    
    game.physics.arcade.overlap(player, stars, collectStar, null, null);


    player.body.velocity.x = 0;

    if (cursors.left.isDown)
    {
      
        player.body.velocity.x = -150;

        player.animations.play('left'); 
        
       
        
       
    }
    else if (cursors.right.isDown)
    {

        player.body.velocity.x = 150;

        player.animations.play('right');
        
         
    }
    else
    {

        player.frame = 4;
    }
    

    if (cursors.up.isDown && player.body.touching.down)
    {
        player.body.velocity.y = -350;
    }
    
    

}
