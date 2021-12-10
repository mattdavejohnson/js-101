// Write a function that takes a string as an argument and returns that string
// with every lowercase letter changed to uppercase and every uppercase letter
// changed to lowercase. Leave all other characters unchanged.

function swapCase(string) {
  let result = '';

  for (let index = 0; index < string.length; index += 1) {
    let digit = string[index];

    if (digit >= 'a' && digit <= 'z') {
      result += digit.toUpperCase();
    } else if (digit >= 'A' && digit <= 'Z') {
      result += digit.toLowerCase();
    } else {
      result += digit;
    }
  }

  return result;
}

console.log(swapCase('CamelCase'));
console.log(swapCase('Tonight on XYZ-TV'));
