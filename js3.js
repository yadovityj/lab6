function Intercalary(year) {
var result;
if ((year % 400 === 0) || ((year % 4 ===0) && (year % 100 !== 0))) {
  result = " intercalary ";
}
else {
 result = " not intercalary";
}
 return (year + " year " + result);
}
console.log(Intercalary(2020));
