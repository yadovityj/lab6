function BMICalc(height, weight)
{
  var bmi = (weight/(height*height));
  var result;
  if (bmi < 18.5)
  {
    result = " Insufficient weight ";
  }
  else if (bmi >= 18.5 && bmi < 25)
  {
    result = " Normal weight ";
  }
  else if (bmi >= 25 && bmi < 30) {
    result = " Overweight "
  }
  else if (bmi >= 30 && bmi < 35) {
    result = " 1st degree obesity "
  }
  else if (bmi >= 35 && bmi < 40) {
    result = " 2st degree obesity "
  }
  else {
    result = " 3st degree obesity "
  }
  return result;
}
console.log(BMICalc(1.77,60));
