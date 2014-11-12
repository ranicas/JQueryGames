(function () {
  if (typeof TTT === "undefined") {
    window.TTT = {};
  }

  var View = TTT.View = function (game, $el) {
    this.game = game;
    this.$board = $el;
    this.setupBoard();
    this.bindEvents();
  };

  View.prototype.bindEvents = function () {
    
    this.$board.on("click", this.makeMove.bind(this));
  };



  View.prototype.makeMove = function (event) {
    var $square = $(event.target);
    $square.css("background", "fuchsia");
    var squarePos = function (id) {
      var cnt = 0;
      
      for (var i = 0; i < 3; i ++) {
        for (var j = 0; j < 3; j ++) {
          if (cnt === id) {
            return [i, j];
          }
          cnt++;
        }
      }
    }
    var pos = squarePos(parseInt($square.attr("id")));
    if (this.game.currentPlayer === 'x') {
      
    }
    this.game.playMove(pos);
    
  };

  View.prototype.setupBoard = function () {
    var cell = "<div class='cell'></div>";
    var megaString = '';
    for (var i = 0; i < 9; i++) {
      megaString += "<div class='cell' id='" + i + "'></div>";
    }
    this.$board.html(megaString);
  };
})();
