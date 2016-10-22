function average(array) {
  function plus(a, b) { return a + b; }
  return array.reduce(plus) / array.length;
}

var byName = {};
ancestry.forEach(function(person) {
  byName[person.name] = person;
});

var ageDiff = ancestry.map(function(person) {
  if(byName[person.mother] == null)
  return null;
  else {
    return (person.born - byName[person.mother].born);
  }
});
var filtered = ageDiff.filter(function(diff) {
  if(diff != null)
  return diff;
});

console.log(average(filtered));
