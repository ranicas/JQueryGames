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
    if (this.game.isOver()) {
      return;
    }
    if ($square.attr("class") !== "cell" ) {
      return;
    }
    
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
    try {
      this.game.playMove(pos);
    } catch(err) {
      alert("Invalid Move!");
    }
    
    if (this.game.currentPlayer === 'x') {
      $square.css("background", "blue");
    } else if (this.game.currentPlayer === 'o'){
      $square.css("background", "red");
    }
    
    if (this.game.isOver()) {
      if (this.game.winner()) {
        return alert(this.game.winner() + " has won!");
      } else {
        return alert("NO ONE WINS!");
      }
    }
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
