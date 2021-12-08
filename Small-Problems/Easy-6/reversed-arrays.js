// Write a function that takes an Array as an argument and reverses its
// elements in place. That is, mutate the Array passed into this method.
// The return value should be the same Array object.

function reverse(array) {
  if (array.length % 2 === 0) {
    for (let index = 0; index < array.length / 2; index += 1) {
      let beginning = array[index];
      let end = array[array.length - 1 - index];

      array[index] = end;
      array[array.length - 1 - index] = beginning;
    }
  } else {
    for (let index = 0; index < Math.floor(array.length / 2); index += 1) {
      let beginning = array[index];
      let end = array[array.length - 1 - index];

      array[index] = end;
      array[array.length - 1 - index] = beginning;
    }
  }

  return array;
}

let list = [1, 2, 3, 4];
let result = reverse(list);
console.log(result);
console.log(list === result);

let list1 = ['a', 'b', 'c', 'd', 'e'];
let result1 = reverse(list1);
console.log(result1);
console.log(list1 === result1);

let list2 = ['abc'];
let result2 = reverse(list2);
console.log(result2);
console.log(list2 === result2);

let list3 = [];
let result3 = reverse(list3);
console.log(result3);
console.log(list3 === result3);
