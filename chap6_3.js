function logFive(sequence)
{
  for(var i = 0; i < 5; i++) {
    var answer = sequence.check(i);
    if(answer != null)
    console.log(answer);
  }
}

function ArraySeq(array)
{
  this.array = array;
}
ArraySeq.prototype.check = function(pos) {
  if(pos < this.array.length)
  return this.array[pos];
  else return null;
}

function RangeSeq(start, end)
{
  this.start = start;
  this.end = end;
}
RangeSeq.prototype.check = function(pos) {
  if(pos + this.start <= this.end)
  return pos + this.start;
}

logFive(new ArraySeq([1, 2]));

logFive(new RangeSeq(100, 1000));
