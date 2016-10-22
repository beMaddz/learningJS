function deepEqual(a, b)
{
  if(a === b)
  return true;
  if((typeof a == "object") && (typeof b == "object"))
  {
    if((a == null) || (a == null))
    return false;
    var arrA = Object.keys(a);
    var arrB = Object.keys(b);
    if(arrA.length != arrB.length)
      return false;
    else {
      var answer =[];
      for(var i in a)
      {
        if(b.hasOwnProperty(i))
        answer.push(deepEqual(a[i], b[i]));
        else
        return false;
      }
    for(var A = 0; A < answer.length; A++)
    {
      if(answer[A] == false)
      {
        return false;
        break;
      }
    }
    return true;
  }
  }
  else
  return false;
}
console.log(deepEqual({name: "m", age: 22}, {name: "m", age: 22}));
