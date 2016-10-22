var str = "";
var size = prompt("Chess-board size?");
for(var r = 1; r <= size; r++)
{
  for(var c = 1; c <= size; c++)
  {
    if((r + c) % 2 == 0)
    str = str + "#";
    else {
      str = str + " ";
    }
  }
  str = str +"\n";
}
console.log(str);
