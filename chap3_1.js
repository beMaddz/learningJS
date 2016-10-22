function min(a, b)
{
  if(a <= b)
  return a;
  else if (b < a) {
    return b;
  }
}
console.log(min(2, 0));
console.log(min(2, 5));
console.log(min(2, 2));
console.log(min(2, -2));
