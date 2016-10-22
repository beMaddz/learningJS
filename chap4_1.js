function range(start, end, step)
{
  if(step == undefined)
  step = 1;
  var arr = [], a = 0;
  if(step < 0)
  for(var i = start; i >= end; i += step)
  {
    arr[a] = i;
    a++;
  }
  else {
    for(var i = start; i <= end; i += step)
    {
      arr[a] = i;
      a++;
    }
  }
  return arr;
}
function sum (array)
{
  var addition = 0;
  for(var i = 0; i < array.length; i++)
  addition = addition + array[i];
  return addition;
}
console.log(sum(range(1, 10)));
console.log(sum(range(1, 10, 2)));
console.log(sum(range(5, 2, -1)));
