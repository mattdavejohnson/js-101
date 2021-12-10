// Write a function that takes a string as an argument and returns an array
// that contains every word from the string, with each word followed by a
// space and the word's length. If the argument is an empty string or if no
// argument is passed, the function should return an empty array.

function wordLengths(string) {
  if (arguments.length === 0 || string.length === 0) {
    return [];
  }
  return string.split(' ').map((word) => `${word} ${String(word.length)}`);
}

console.log(wordLengths('cow sheep chicken'));
console.log(wordLengths('baseball hot dogs and apple pie'));
console.log(wordLengths("It ain't easy, is it?"));
console.log(wordLengths('Supercalifragilisticexpialidocious'));
console.log(wordLengths(''));
console.log(wordLengths());
