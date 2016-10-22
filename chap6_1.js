function Vector(x, y) {
  this.x = x;
  this.y = y;
}

var another = new Vector(3, 4);
Vector.prototype.plus = function (anotherVector) {
  return new Vector(this.x + anotherVector.x, this.y + anotherVector.y);
};

Vector.prototype.minus = function (anotherVector) {
  return new Vector(this.x - anotherVector.x, this.y - anotherVector.y);
};

Object.defineProperty(Vector.prototype, "length",
  {get: function() {
  return Math.sqrt(this.x * this.x + this.y * this.y);
}
});

console.log(new Vector(1, 2).plus(another));
console.log(new Vector(1, 2).minus(another));
console.log(new Vector(3, 4).length);
