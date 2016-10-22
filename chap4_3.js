function arrayToList(array)
{
  var list = {};
  list.value = array[0];
  if(array.length == 1) {
  list.rest = null;
  return list; }
  else
  list.rest = arrayToList(array.slice(1));
  return list;
}
function listToArray(list)
{
  var arr = [];
  while(list.rest != null)
  {
    arr.push(list.value);
    list = list.rest;
  }
  arr.push(list.value);
  return arr;
}
function prepend(element, list)
{
  var newList = {};
  newList.value = element;
  newList.rest = list;
  return newList;
}
function nth(list, position)
{
  if(!list)
  return undefined;
  else if(position == 0)
  return list.value;
  else {
    return nth(list.rest, position - 1);
  }
}
console.log(arrayToList([10, 15, 20, 25, 30]));
console.log(nth(arrayToList([10, 15, 20, 25, 30]), 0));
console.log(prepend(5, arrayToList([10, 15, 20, 25, 30])));
console.log(nth(prepend(5, arrayToList([10, 15, 20, 25, 30])), 0));
console.log(listToArray(prepend(5, arrayToList([10, 15, 20, 25, 30]))));
