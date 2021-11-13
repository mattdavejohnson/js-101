// Given the data structure, write code to return an object where the key
// is the first item in each subarray, and the value is the second.

let arr = [
  ['a', 1],
  ['b', 'two'],
  ['sea', { cc: 3 }],
  ['D', ['a', 'b', 'c']],
];

function objFromArray(array) {
  let returnObject = {};

  array.forEach((subArray) => {
    returnObject[subArray[0]] = subArray[1];
  });

  return returnObject;
}

let obj = objFromArray(arr);
console.log(obj);
