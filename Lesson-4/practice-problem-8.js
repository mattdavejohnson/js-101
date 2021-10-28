// Write a program that uses the given array to create an object where the
// names are the keys and the values are the positions in the array

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Pebbles", "Bambam"];

function arrayName(arr) {
  let transformedObject = {};

  arr.forEach((element, index) => {
    transformedObject[element] = index;
  });

  return transformedObject;
}

let flintObj = arrayName(flintstones);

console.log(flintObj);