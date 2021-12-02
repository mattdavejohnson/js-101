// Write a function that takes an integer and converts it to a string
// representation accounting for positive/negative numbers.

function integerToString(number) {
  const CONVERT = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

  let result = '';

  do {
    let remainder = number % 10;
    number = Math.floor(number / 10);

    result = CONVERT[remainder] + result;
  } while (number > 0);

  return result;
}

function signedIntegerToString(number) {
  switch (Math.sign(number)) {
    case 1:
      return `+${integerToString(number)}`;
    case -1:
      return `-${integerToString(number * -1)}`;
    default:
      return integerToString(number);
  }
}

console.log(signedIntegerToString(4321) === '+4321');
console.log(signedIntegerToString(-123) === '-123');
console.log(signedIntegerToString(0) === '0');
