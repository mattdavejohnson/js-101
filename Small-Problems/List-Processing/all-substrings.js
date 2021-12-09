// Write a function that returns a list of all substrings of a string.
// Order the returned list by where in the string the substring begins.

function leadingSubstrings(string) {
  let result = [];

  for (let index = 1; index <= string.length; index += 1) {
    result.push(string.slice(0, index));
  }

  return result;
}

function substrings(string) {
  let result = [];

  for (let index = 0; index < string.length; index += 1) {
    let temp = leadingSubstrings(string.slice(index));
    result = result.concat(temp);
  }

  return result;
}

console.log(substrings('abcde'));
