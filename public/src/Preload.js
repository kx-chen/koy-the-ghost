/* global Phaser */
/* global update */
'use strict';
var unitGame = new Unit(125);
var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: unitGame.Preload, create: unitGame.Create, update: unitGame.Update });

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

