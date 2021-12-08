// Write a function that takes a string, doubles every character in the
// string, and returns the result as a new string.

function repeater(string) {
  let result = '';

  for (let index = 0; index < string.length; index += 1) {
    result += `${string[index]}${string[index]}`;
  }

  return result;
}

console.log(repeater('Hello'));
console.log(repeater('Good job!'));
console.log(repeater(''));
