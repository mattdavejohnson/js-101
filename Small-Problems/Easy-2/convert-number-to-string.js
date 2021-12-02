// Write a function that converts a non-negative integer value to the
// string representation of that integer.

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

console.log(integerToString(4321));
console.log(integerToString(0));
console.log(integerToString(5000));
console.log(integerToString(1234567890));
