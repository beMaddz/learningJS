function StretchCell(inner, width, height) {
  this.inner = inner;
  this.width = width;
  this.height = height;
}
StretchCell.prototype.minWidth = function () {
  return Math.min(this.width, this.inner.minWidth());
}
StretchCell.prototype.minHeight = function () {
  return Math.min(this.width, this.inner.minHeight());
}

StretchCell.prototype.draw = function (width, height) {
  return this.inner.draw(width, height);
}

var oldCell = new TextCell("madhu");
var newCell = new StretchCell(oldCell, 2, 5);

console.log(newCell.minWidth());
console.log(newCell.minHeight());
console.log(newCell.draw(3,6));
