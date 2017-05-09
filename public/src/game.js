/* global Phaser */
/* global update */
'use strict';
var unitGame = new Unit(125);
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: unitGame.Preload, create: create, update: update });

var player;
var platforms;
var cursors;

var stars;
var score = 0;
var scoreText;


function Unit(height) {
    
    this.spriteWidth = 1000;
    this.height = height;
    this.width = this.spriteWidth / 4;
}



unitGame.Preload = function() {}

unitGame.Preload.prototype = function() {
    var assetsPath = "../assets/";
    
    game.load.image('sky', assetsPath + 'sky.png');
    game.load.image('ground', assetsPath + 'platform.png');
    game.load.image('star', assetsPath + 'star.png');
    game.load.spritesheet('dude', assetsPath + 'fox.png', this.width, this.height);
}


function create() {


    game.physics.startSystem(Phaser.Physics.ARCADE);


    game.add.sprite(0, 0, 'sky');


    platforms = game.add.group();
    platforms.enableBody = true;

    var ground = platforms.create(0, game.world.height - 64, 'ground');
    ground.scale.setTo(2, 2);
    ground.body.immovable = true;


    var ledge = platforms.create(400, 400, 'ground');
    ledge.body.immovable = true;

    ledge = platforms.create(-150, 250, 'ground');
    ledge.body.immovable = true;
    
 

   
    player = game.add.sprite(32, 125, 'dude');

    
    game.physics.arcade.enable(player);


    player.body.bounce.y = 0.2;
    player.body.gravity.y = 300;
    player.body.collideWorldBounds = true;


    player.animations.add('right', [0, 1, 3,4], 10, true);
    player.animations.add('left', [4, 5, 6, 7], 10, true);

   
    stars = game.add.group();


    stars.enableBody = true;


    for (var i = 0; i < 12; i++)
    {
       
        var star = stars.create(i * 70, 0, 'star');

        star.body.gravity.y = 300;

      
        star.body.bounce.y = 0.7 + Math.random() * 0.2;
    }


    scoreText = game.add.text(16, 16, 'score: 0', { fontSize: '32px', fill: '#000' });

  
    cursors = game.input.keyboard.createCursorKeys();
    
}



