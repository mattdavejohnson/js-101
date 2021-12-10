/*
Write a function that takes a grocery list in a two-dimensional array and
returns a one-dimensional array. Each element in the grocery list contains
a fruit name and a number that represents the desired quantity of that fruit.
The output array is such that each fruit name appears the number of times
equal to its desired quantity.
*/

function buyFruit(array) {
  let result = [];

  for (let index = 0; index < array.length; index += 1) {
    for (let subIndex = 0; subIndex < array[index][1]; subIndex += 1) {
      result.push(array[index][0]);
    }
  }

  return result;
}

console.log(
  buyFruit([
    ['apple', 3],
    ['orange', 1],
    ['banana', 2],
  ])
);
