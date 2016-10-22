function average(array) {
  function plus(a, b) { return a + b; }
  return (array.reduce(plus) / array.length).toFixed(1);
}
function groupBy(array)
{
var gen ={};
array.forEach(function (person) {
  var year = Math.ceil(person.died / 100);
  var age = person.died - person.born;
  if(year in gen)
  gen[year].push(age);
  else
  gen[year] = [age];
});
return gen;
}
var generation = groupBy(ancestry);
for(var i in generation)
{
  console.log(i + " : " + average(generation[i]));
}
