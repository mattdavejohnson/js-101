// Write a function that takes a string of digits and returns the appropriate
// number as an integer. If '-' is present, return a negative number.

function stringToInteger(str) {
  const CONVERT = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
  };

  let total = 0;
  let digits = str.split('').map((element) => CONVERT[element]);
  // eslint-disable-next-line no-mixed-operators
  digits.forEach((element) => (total = total * 10 + element));
  return total;
}

function stringToSignedInteger(str) {
  let converted = 0;

  if (str[0] === '-') {
    converted = stringToInteger(str.slice(1));
    converted *= -1;
  } else if (str[0] === '+') {
    return stringToInteger(str.slice(1));
  } else {
    return stringToInteger(str);
  }

  return converted;
}

console.log(stringToSignedInteger('4321') === 4321);
console.log(stringToSignedInteger('-570') === -570);
console.log(stringToSignedInteger('+100') === 100);
