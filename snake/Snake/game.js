(function () {
  var Snakes = window.Snakes = window.Snakes || {};
  
  var Game = Snakes.Game = function () {
    this.snake = new Snakes.Snake();
    this.board = new Snakes.Board(); 
  }
  
  Game.prototype.play = function (){
    //check apple
    if (this.snake.newPos() == this.board.apple) {
      this.snake.addBody(this.board.apple);
      this.board.makeNewApple();
    }
    this.snake.move.bind(this.snake)();
  }
  
})();