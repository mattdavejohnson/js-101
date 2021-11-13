// Given the data structure, return an array which contains only the objects
// where all the numbers are even.

let arr = [
  { a: [1, 2, 3] },
  { b: [2, 4, 6], cc: [3, 6], dd: [4] },
  { ee: [8], ff: [6, 10] },
];

let evenArray = arr.filter((obj) => {
  let values = Object.values(obj);
  let numbers = [];

  values.forEach((array) => {
    array.forEach((num) => {
      numbers.push(num);
    });
  });

  return numbers.every((num) => num % 2 === 0);
});

console.log(evenArray);
