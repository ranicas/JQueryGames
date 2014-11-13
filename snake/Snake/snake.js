(function () {
  var Snakes = window.Snakes = window.Snakes || {};
  
  var Snake = Snakes.Snake = function () {
    this.body = [];
    this.direction = 'up';
  }
  
  Snake.prototype.move = function () {
    this.body.unshift(newPos(this.body[0], this.direction));
    this.body.pop();
  }
  
  function newPos(oldPos, direction) {
    if (direction === 'up') {
      return [oldPos[0] - 1, oldPos[1]]
    } else if (direction === 'down') {
      return [oldPos[0] + 1, oldPos[1]]
    } else if (direction === 'left') {
      return [oldPos[0], oldPos[1] - 1]
    } else if (direction === 'right') {
      return [oldPos[0], oldPos[1] + 1]
    }
  }
  
})();