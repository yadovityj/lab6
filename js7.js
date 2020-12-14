function Numbers()
{
var name = "Slava";
var surname = "Zayats";
var number = 100;
for (number; number >= 1; number--)
{
  if ((number % 3) === 0 && (number % 5) === 0)
  {
    console.log(name + " " + surname);
  }
  else if (number % 5 === 0)
  {
    console.log(surname);
  }
  else if (number % 3 === 0)
  {
    console.log(name);
  }
  else
  {
    console.log(number);
  }
}
}
Numbers();
