// Write a function that takes a string, doubles every consonant character
// in the string, and returns the result as a new string. The function
// should not double vowels ('a','e','i','o','u'), digits, punctuation,
// or whitespace.

function doubleConsonants(string) {
  const CONSONANTS = 'abcdfghjklmnpqrstvwxyzABCDFGHJKLMNPQRSTVWXYZ';
  let result = '';

  for (let index = 0; index < string.length; index += 1) {
    if (CONSONANTS.includes(string[index])) {
      result += `${string[index]}${string[index]}`;
    } else {
      result += string[index];
    }
  }

  return result;
}

console.log(doubleConsonants('String'));
console.log(doubleConsonants('Hello-World!'));
console.log(doubleConsonants('July 4th'));
console.log(doubleConsonants(''));
