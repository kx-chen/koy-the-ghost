var unitGame = unitGame || {}

unitGame.Boot = function () {}

// setting game configuration and loading the assets for the loading screen
unitGame.Boot.prototype = {
  preload: function () {
    // assets we'll use in the loading screen
    this.loadingText = this.game.add.text(400, 16, 'hello. your game is loading. \n loading..... ', {fontSize: '32px', fill: '#fff'})
    this.loadingText.fixedToCamera = true
  },
  create: function () {
    this.game.world.setBounds(0, 0, 500000, this.game.height)

    this.game.scale.pageAlignHorizontally = true
    this.game.scale.pageAlignVertically = true

    this.game.scale.updateLayout(true)

    this.state.start('Preload')
  }
}
