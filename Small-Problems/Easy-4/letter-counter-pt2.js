// Modify the wordSizes function from the previous exercise to exclude
// non-letters when determining word size.

function wordSizes(string) {
  let result = {};

  if (string.length === 0) {
    return result;
  }

  let words = remove(string).split(' ');
  let wordLengths = [];

  words.forEach((word) => wordLengths.push(String(word.length)));

  wordLengths.forEach((prop) => {
    if (result.hasOwnProperty(prop)) {
      result[prop] += 1;
    } else {
      result[prop] = 1;
    }
  });

  return result;
}

function remove(string) {
  let filtered = '';
  let letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';

  for (let index = 0; index < string.length; index += 1) {
    if (letters.includes(string[index]) || string[index] === ' ') {
      filtered += string[index];
    }
  }

  return filtered;
}

console.log(wordSizes('Four score and seven.'));
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));
console.log(wordSizes("What's up doc?"));
console.log(wordSizes(''));
