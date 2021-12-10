// Write a function that takes a string argument and returns true if all of
// the alphabetic characters inside the string are uppercase; false otherwise.
// Ignore characters that are not alphabetic.

function isUppercase(string) {
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] !== string[index].toUpperCase()) {
      return false;
    }
  }

  return true;
}

console.log(isUppercase('t'));
console.log(isUppercase('T'));
console.log(isUppercase('Four Score'));
console.log(isUppercase('FOUR SCORE'));
console.log(isUppercase('4SCORE!'));
console.log(isUppercase(''));
