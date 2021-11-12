// Given the data structure, use methods including filter to return a new
// array identical in structure to the original, but containing only numbers
// that are multiples of 3.

let arr = [[2], [3, 5, 7], [9], [11, 15, 18]];

let filteredArray = [];

arr.forEach((subArray) => {
  filteredArray.push(
    subArray.filter((element) => {
      return element % 3 === 0;
    })
  );
});

console.log(filteredArray);
