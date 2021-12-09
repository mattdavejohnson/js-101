/*
Write a function that takes a string argument and returns a list of substrings
of that string. Each substring should begin with the first letter of the word,
and the list should be ordered from shortest to longest.
*/

function leadingSubstrings(string) {
  let result = [];

  for (let index = 1; index <= string.length; index += 1) {
    result.push(string.slice(0, index));
  }

  return result;
}

console.log(leadingSubstrings('abc'));
console.log(leadingSubstrings('a'));
console.log(leadingSubstrings('xyzzy'));
