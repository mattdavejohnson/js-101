/*
Create a function that takes two integers as arguments. The first argument
is a count, and the second is the starting number of a sequence that your
function will create. The function should return an array containing the same
number of elements as the count argument. The value of each element should be
a multiple of the starting number.
*/

function sequence(count, start) {
  let result = [];

  for (let index = 0; index < count; index += 1) {
    if (index === 0) {
      result.push(start);
      continue;
    }

    result.push(result[index - 1] + start);
  }

  return result;
}

console.log(sequence(5, 1));
console.log(sequence(4, -7));
console.log(sequence(3, 0));
console.log(sequence(0, 1000000));
