// Alternate implementation of joinOr

function joinOr(array, spacer = ', ', lastWord = 'or') {
  let returnString = '';

  if (array.length === 2) {
    returnString = `${array[0]} ${lastWord} ${array[1]}`;
    return returnString;
  }

  array.forEach((num) => {
    if (num === array[0]) {
      returnString += num;
    } else if (num === array[array.length - 1]) {
      returnString += spacer + lastWord + ' ' + num;
    } else {
      returnString += spacer + num;
    }
  });

  return returnString;
}

console.log(joinOr([1, 2, 3]));
console.log(joinOr([1, 2, 3], '; '));
console.log(joinOr([1, 2, 3], ', ', 'and'));
console.log(joinOr([]));
console.log(joinOr([5]));
console.log(joinOr([1, 2]));
