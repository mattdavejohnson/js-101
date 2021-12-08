// Write a function that takes an integer argument and returns an array
// containing all integers between 1 and the argument (inclusive), in
// ascending order.

function sequence(number) {
  let result = [];

  for (let index = 1; index <= number; index += 1) {
    result.push(index);
  }

  return result;
}

console.log(sequence(5));
console.log(sequence(3));
console.log(sequence(1));
