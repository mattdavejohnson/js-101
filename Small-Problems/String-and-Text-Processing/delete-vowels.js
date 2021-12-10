// Write a function that takes an array of strings and returns an array of
// the same string values, but with all vowels (a, e, i, o, u) removed.

function removeVowels(array) {
  const VOWELS = 'aeiouAEIOU';

  return array.map((string) => {
    let filteredString = '';

    for (let index = 0; index < string.length; index += 1) {
      if (!VOWELS.includes(string[index])) {
        filteredString += string[index];
      }
    }

    return filteredString;
  });
}

console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));
