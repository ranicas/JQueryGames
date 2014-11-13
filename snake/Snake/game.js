(function () {
  var Snakes = window.Snakes = window.Snakes || {};
  
  var Game = Snakes.Game = function () {
    this.snake = new Snakes.Snake();
    this.board = new Snakes.Board(); 
  }
  
})();