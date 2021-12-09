/*
Write a function that returns a list of all palindromic substrings of a
string. That is, each substring must consist of a sequence of characters
that reads the same forward and backward. The substrings in the returned
list should be sorted by their order of appearance in the input string.
Duplicate substrings should be included multiple times.
*/

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

function palindromes(string) {
  let allSubstrings = substrings(string);
  let result = [];

  allSubstrings.forEach((substring) => {
    let reverse = substring.split('').reverse().join('');
    if (substring === reverse && substring.length > 1) {
      result.push(substring);
    }
  });

  return result;
}

console.log(palindromes('abcd'));
console.log(palindromes('madam'));
console.log(palindromes('hello-madam-did-madam-goodbye'));
console.log(palindromes('knitting cassettes'));
