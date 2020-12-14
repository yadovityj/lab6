function List(name, surname, number)
{
  if (number <=100 && number % 3 === 0 && number % 5 === 0)
  {
    console.log(name + " " + surname);
  }
  else if (number <=100 && number % 3 === 0)
  {
    console.log(name);
  }
  else if (number <=100 && number % 5 === 0)
  {
    console.log(surname);
  }
  else if(number <=100)
  {
    console.log(number);
  }
  else
  {
   console.log("The number is not in the range from 1 to 100");
  }
  return(number);
  }
List("Slava", "Zayats", 101);
