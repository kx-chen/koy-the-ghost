var unitGame = unitGame || {};

unitGame.game = new Phaser.Game(800, 600, Phaser.AUTO, '');

unitGame.game.state.add('Boot', unitGame.Boot);
unitGame.game.state.add('Preload', unitGame.Preload);
unitGame.game.state.add('Game', unitGame.Game);

unitGame.game.state.start('Boot');
