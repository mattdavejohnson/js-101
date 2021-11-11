// Use map to return a new array identical in structure to the original but
// with each number incremented by 1.

let arr = [{ a: 1 }, { b: 2, cc: 3 }, { dd: 4, ee: 5, ff: 6 }];

let newArr = arr.map((obj) => {
  let newObj = Object.assign({}, obj);

  for (let property in newObj) {
    newObj[property] += 1;
  }

  return newObj;
});

console.log(newArr);
console.log(arr);
