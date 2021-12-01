// Update the function from the previous exercise to determine
// leap years both before and after 1752.

function isLeapYear(year) {
  let four = year % 4 === 0;
  let oneHundred = year % 100 === 0;
  let fourHundred = year % 400 === 0;

  if (year <= 1752) {
    return year % 4 === 0;
  }

  return (four && !oneHundred) || fourHundred;
}

console.log(isLeapYear(2016));
console.log(isLeapYear(2015));
console.log(isLeapYear(2100));
console.log(isLeapYear(2400));
console.log(isLeapYear(240000));
console.log(isLeapYear(240001));
console.log(isLeapYear(2000));
console.log(isLeapYear(1900));
console.log(isLeapYear(1752));
console.log(isLeapYear(1700));
console.log(isLeapYear(1));
console.log(isLeapYear(100));
console.log(isLeapYear(400));
