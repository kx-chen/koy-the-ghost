var unitGame = unitGame || {};

unitGame.game = new Phaser.Game(1600, 1200, Phaser.CANVAS, '');

unitGame.game.state.add('Boot', unitGame.Boot);
unitGame.game.state.add('Preload', unitGame.Preload);
unitGame.game.state.add('Game', unitGame.Game);

unitGame.game.state.add('Gameover', unitGame.Gameover);

unitGame.game.state.start('Boot');
