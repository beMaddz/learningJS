function reverseArray(array)
{
  var revArray = [];
  for(var i = array.length - 1, a = 0; i >= 0; i--, a++)
    revArray[a] = array[i];
  return revArray;
}
function reverseArrayInPlace(array)
{
  var len = array.length;
  var halfLen = Math.floor(len / 2);
  for(var i = 0; i < halfLen; i++)
  {
    var temp = array[i];
    array[i] = array[len -i -1];
    array[len - i - 1] = temp;
  }
  return array;
}
console.log(reverseArray([1, 2, 3, 4]));
console.log(reverseArrayInPlace([1, 2, 3, 4, 5, 6]));
