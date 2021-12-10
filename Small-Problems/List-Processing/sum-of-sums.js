// Write a function that takes an array of numbers and returns the sum of the
// sums of each leading subsequence in that array.

function sumOfSums(array) {
  let result = 0;

  for (let index = 1; index <= array.length; index += 1) {
    let temp = array.slice(0, index);

    for (let subIndex = 0; subIndex < temp.length; subIndex += 1) {
      result += temp[subIndex];
    }
  }

  return result;
}

console.log(sumOfSums([3, 5, 2]));
console.log(sumOfSums([1, 5, 7, 3]));
console.log(sumOfSums([4]));
console.log(sumOfSums([1, 2, 3, 4, 5]));
