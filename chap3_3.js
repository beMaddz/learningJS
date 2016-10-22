function countChar(str, s)
{
  var count = 0;
  for(var i = 0; i < str.length; i++)
  {
    if(str.charAt(i) == s)
    count++;
  }
  return count;
}
function countBs(str)
{
  return countChar(str, "B");
}
console.log(countBs("AABYFDBBBBHIYT"));
