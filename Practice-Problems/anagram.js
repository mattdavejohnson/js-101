function anagramDifference(stringOne, stringTwo) {
  let result = [];
  let str1Array = stringOne.split('');
  let str2Array = stringTwo.split('');

  str1Array.forEach((letter) => {
    if (str2Array.includes(letter)) {
      let index = str2Array.indexOf(letter);
      str2Array.splice(index, 1);
    } else {
      result.push(letter);
    }
  });

  str2Array.forEach((letter) => {
    result.push(letter);
  });

  return result.length;
}

console.log(anagramDifference('aabcd', 'cafr') === 5);
console.log(anagramDifference('', '') === 0);
console.log(anagramDifference('a', '') === 1);
console.log(anagramDifference('', 'a') === 1);
console.log(anagramDifference('cbdaaa', 'accddbb') === 5);
console.log(anagramDifference('codewars', 'hackerrank') === 10);
