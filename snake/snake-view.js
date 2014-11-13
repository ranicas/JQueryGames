(function () {
  var Hanoi = this.Hanoi = this.Hanoi || {};
  
  var View = Hanoi.View = function (game, $el) {
    this.game = game;
    this.$board = $el;
    this.setupBoard();
    this.bindEvent();
    this.startTower = null;
  }
  
  View.prototype.bindEvent =  function () {
    this.$board.on("click", this.moveTower.bind(this));
  }
  
  View.prototype.moveTower = function (event) {
    if (this.game.isWon()) {
      return;
    }
    var tower = parseInt($(event.target).attr("id")[0]);
    if (this.startTower !== null) {
      try {
        this.game.move(this.startTower, tower);
        undoHighlight.call(this);
        this.startTower = null;
        this.render();
        if (this.game.isWon()) {
          return alert("gratz!!!!!");
        }
      } catch (err) {
        return alert ("invalid move");
      }
    } else {
        highlightPile.call(this, tower);
        this.startTower = tower;
    }
  }
  
  function highlightPile (tower) {
    for (var i = 0; i < 3; i++) {
      var cell = this.$board.find(("#" + tower + i));
      cell.css("border-color", "yellow");
    }
  }
  
  function undoHighlight () {
    for (var i = 0; i < 3; i++) {
      var cell = this.$board.find(("#" + this.startTower + i));
      cell.css("border-color", "black");
    }
  }
  
  View.prototype.setupBoard = function () {
    var towerString = "<div class='tower'></div>"
    var largePileString = '';
    for (var j = 2; j >= 0; j--) {
      for (var i = 0; i < 3; i++) {
        largePileString += "<div class='cell' id='"+ i + '' + j + "'></div>";
      }
    }
    this.$board.html(largePileString);
    this.render();
  }
  
  View.prototype.render = function () {
    var $board = this.$board;
    for (var i = 0; i < 3; i ++) {
      for (var j = 0; j < 3; j++){
        var pos = '#' + i + j;
        var $cell = $board.find(pos);
        var el = this.game.towers[i][j];
        
        if (el === 3) {
          $cell.css("background", "darkred");
        } else if (el === 2) {
          $cell.css("background", "red");
        } else if (el === 1) {
          $cell.css("background", "pink");
        } else if (el === undefined){
          $cell.css("background", "white");
        } 
      }
    }
  }
  
})();