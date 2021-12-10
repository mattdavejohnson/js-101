/*
Write a function that takes a string and returns an object containing
three properties: one representing the number of characters in the
string that are lowercase letters, one representing the number of
characters that are uppercase letters, and one representing the number
of characters that are neither.
*/

function letterCaseCount(string) {
  let result = { lowercase: 0, uppercase: 0, neither: 0 };

  for (let index = 0; index < string.length; index += 1) {
    if (string[index] >= 'a' && string[index] <= 'z') {
      result.lowercase += 1;
    } else if (string[index] >= 'A' && string[index] <= 'Z') {
      result.uppercase += 1;
    } else {
      result.neither += 1;
    }
  }

  return result;
}

console.log(letterCaseCount('abCdef 123'));
console.log(letterCaseCount('AbCd +Ef'));
console.log(letterCaseCount('123'));
console.log(letterCaseCount(''));
