function countChar(str)
{
  var len = str.length;
  var counter = 0;
  function countBs(s)
  {
    for(var i = 0; i < len; i++)
    {
      if(str.charAt(i) == s)
      counter++;
    }
    return counter;
  }
  return countBs;
}
var count = countChar("BBBBB");
console.log(count("B"));
